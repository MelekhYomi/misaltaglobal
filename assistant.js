/* Misalta AI: the chat assistant panel. Loaded by script.js the first time a visitor opens it.
   Talks to /api/assistant (Vercel function). The conversation lives in sessionStorage for this visit only.
   If the AI is unavailable, answers come from the FAQ page and the contact options stay one tap away. */
(() => {
  const KEY = "misaltaAI.v1";
  const TEAMS = { invest: ["Investment & partnerships", E.invest], supply: ["Supply & agro-processing", E.supply], services: ["Misalta Consulting", E.services],
    tradex: ["Misalta Trade X", E.tradex], media: ["Media", E.media], info: ["General enquiries", E.info] };
  const FIELDS = [["name", "Name"], ["email", "Email"], ["phone", "Phone / WhatsApp"], ["organisation", "Organisation"], ["location", "Location"], ["commodity", "Commodity"], ["details", "Request"]];
  const STARTERS = ["What does Misalta do?", "I want to invest or partner", "Book a consulting service", "Join Trade X early access", "Request a supply quote", "Talk to a person"];
  const tel = "tel:" + CONFIG.phone.replace(/\s/g, ""), wa = "https://wa.me/" + CONFIG.whatsapp;
  const I = {
    send: '<path d="M4 12l16-8-6 16-3-6z"/><path d="M11 14l9-10"/>', close: '<path d="M6 6l12 12M18 6L6 18"/>', reset: '<path d="M4 4v6h6"/><path d="M5 15a8 8 0 102-8.5L4 10"/>',
    phone: NI.phone, chat: NI.chat, mail: NI.mail, check: '<path d="M5 12l5 5L20 7"/>'
  };

  let state = { history: [], offline: false };
  try { state = { ...state, ...JSON.parse(sessionStorage.getItem(KEY) || "{}") }; } catch { /* private mode: keep in memory */ }
  const save = () => { try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ } };
  let busy = false;

  /* ---------- panel ---------- */
  document.body.insertAdjacentHTML("beforeend", `
  <div class="ai-panel" id="aiPanel" role="dialog" aria-modal="false" aria-labelledby="aiTitle" hidden>
    <header class="ai-head">
      <span class="ai-avatar" aria-hidden="true"><img src="images/logo.jfif" alt=""></span>
      <div class="ai-id"><b id="aiTitle">Misalta AI</b><small id="aiStatus"><i></i>Online · replies instantly</small></div>
      <button type="button" class="ai-icon" id="aiReset" title="New chat" aria-label="Start a new chat">${svgI(I.reset)}</button>
      <button type="button" class="ai-icon" id="aiClose" title="Close" aria-label="Close Misalta AI">${svgI(I.close, 2.2)}</button>
    </header>
    <div class="ai-log" id="aiLog" aria-live="polite"></div>
    <div class="ai-human"><span>Prefer a person?</span><a href="${tel}">${svgI(I.phone)}Call</a><a href="${wa}" target="_blank" rel="noopener">${svgI(I.chat)}WhatsApp</a><a href="mailto:${E.info}">${svgI(I.mail)}Email</a></div>
    <form class="ai-form" id="aiForm">
      <label class="sr" for="aiInput">Message Misalta AI</label>
      <textarea id="aiInput" rows="1" maxlength="2000" placeholder="Ask anything about Misalta…" autocomplete="off"></textarea>
      <button type="submit" class="ai-send" aria-label="Send">${svgI(I.send, 2)}</button>
    </form>
    <p class="ai-note">Misalta AI can make mistakes. Don't share card, bank or ID details. <a href="privacy.html#assistant">Privacy</a></p>
  </div>`);
  const panel = q0("aiPanel"), log = q0("aiLog"), input = q0("aiInput"), form = q0("aiForm");

  /* ---------- rendering ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeHref = h => /^(#(?:invest|services|supply)|\/[\w\-./#?=&%]*|https:\/\/(www\.)?(misaltaglobal\.com|wa\.me|linkedin\.com)\/[^\s]*|mailto:[^\s]+|tel:[+\d]+)$/i.test(h) ? h : null;
  function md(src) {
    const inline = t => esc(t)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label, href) => {
        const h = safeHref(href.replace(/&amp;/g, "&"));
        if (!h) return label;
        const local = h.startsWith("/");
        return `<a href="${esc(h)}"${local || h.startsWith("#") ? "" : ' target="_blank" rel="noopener"'}>${label}</a>`;
      })
      .replace(/(^|[\s(])((?:info|invest|supply|services|tradex|media)@misaltaglobal\.com)/g, '$1<a href="mailto:$2">$2</a>');
    const out = []; let list = null;
    for (const line of src.split("\n")) {
      const li = line.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)/);
      if (li) { (list ||= []).push(`<li>${inline(li[1])}</li>`); continue; }
      if (list) { out.push(`<ul>${list.join("")}</ul>`); list = null; }
      if (line.trim()) out.push(`<p>${inline(line)}</p>`);
    }
    if (list) out.push(`<ul>${list.join("")}</ul>`);
    return out.join("");
  }
  const scroll = () => { log.scrollTop = log.scrollHeight; };
  const bubble = (who, html) => { log.insertAdjacentHTML("beforeend", `<div class="ai-msg ${who}">${html}</div>`); scroll(); return log.lastElementChild; };

  function welcome() {
    bubble("bot", md(`Hello! I'm **Misalta AI**. I can tell you about the Misalta group and our eight businesses, and take your enquiry, quote request, booking or Trade X registration straight to the right team.${state.offline ? "\n\nI'm in quick-answer mode right now, so I'll answer from our FAQ and point you to the right form." : ""}\n\nWhat can I help you with?`));
    log.insertAdjacentHTML("beforeend", `<div class="ai-chips">${STARTERS.map(s => `<button type="button" data-q="${esc(s)}">${esc(s)}</button>`).join("")}</div>`);
  }

  function card(tool, result) {
    const t = TEAMS[tool.input.team] || TEAMS.info;
    const rows = FIELDS.filter(([k]) => tool.input[k]).map(([k, l]) => `<div><dt>${l}</dt><dd>${esc(tool.input[k])}</dd></div>`).join("");
    const status = result == null ? `<div class="ai-card-acts"><button type="button" class="btn btn-green btn-sm" data-send="${tool.id}">Send to the team</button><button type="button" class="btn btn-dark btn-sm" data-cancel="${tool.id}">Change something</button></div>`
      : `<p class="ai-card-done ${/^sent|^email/.test(result) ? "ok" : ""}">${/^sent/.test(result) ? svgI(I.check, 2.4) + "Sent to the team" : /^email/.test(result) ? svgI(I.check, 2.4) + "Prepared in your email app" : "Not sent"}</p>`;
    return `<div class="ai-card" data-card="${tool.id}"><span class="ai-card-team">To: ${esc(t[0])}</span><b>${esc(tool.input.subject || "Your request")}</b><dl>${rows}</dl>${status}</div>`;
  }

  function render() {
    log.innerHTML = "";
    welcome();
    const results = {};
    state.history.forEach(m => { if (m.role === "user" && Array.isArray(m.content)) m.content.forEach(b => { if (b.type === "tool_result") results[b.tool_use_id] = b.content; }); });
    for (const m of state.history) {
      if (m.role === "user") {
        if (typeof m.content === "string") bubble("me", esc(m.content));
        else m.content.filter(b => b.type === "text").forEach(b => bubble("me", esc(b.text)));
      } else {
        for (const b of m.content) {
          if (b.type === "text" && b.text.trim()) bubble("bot", md(b.text));
          if (b.type === "tool_use" && b.name === "prepare_submission") bubble("bot card-wrap", card(b, results[b.id]));
        }
      }
    }
    if (state.history.length) log.querySelector(".ai-chips")?.remove();
  }

  const pendingTool = () => {
    const last = state.history.at(-1);
    if (!last || last.role !== "assistant") return null;
    return last.content.find(b => b.type === "tool_use") || null;
  };

  /* ---------- talking to the AI ---------- */
  async function ask(userContent) {
    if (busy) return;
    busy = true; form.classList.add("busy");
    state.history.push({ role: "user", content: userContent });
    save();
    const said = typeof userContent === "string" ? userContent : (userContent.find(b => b.type === "text") || {}).text;
    if (said) bubble("me", esc(said));
    log.querySelector(".ai-chips")?.remove();
    let ok = false;
    const typing = bubble("bot typing", "<span></span><span></span><span></span>");
    let live = null, text = "";
    try {
      if (state.offline) throw Object.assign(new Error("offline"), { offline: true });
      const r = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: state.history }) });
      if (r.status === 503 || r.status === 404 || r.status === 405) throw Object.assign(new Error("offline"), { offline: true });
      if (!r.ok) { const j = await r.json().catch(() => ({})); throw new Error(j.error || "Misalta AI is unavailable right now."); }
      const reader = r.body.getReader(), dec = new TextDecoder();
      let buf = "", done = null;
      for (;;) {
        const { value, done: end } = await reader.read();
        if (end) break;
        buf += dec.decode(value, { stream: true });
        let nl;
        while ((nl = buf.indexOf("\n")) >= 0) {
          const line = buf.slice(0, nl); buf = buf.slice(nl + 1);
          if (!line.trim()) continue;
          const ev = JSON.parse(line);
          if (ev.type === "text") {
            text += ev.text;
            if (!live) { typing.remove(); live = bubble("bot", ""); }
            live.innerHTML = md(text); scroll();
          } else if (ev.type === "done") done = ev;
          else if (ev.type === "error") throw new Error(ev.message);
        }
      }
      if (!done) throw new Error("The reply was cut off. Please try again.");
      if (done.stop === "refusal") { state.history.pop(); }
      else {
        // A tool call cut off at max_tokens can't be trusted: keep the text, drop the call.
        const content = done.stop === "max_tokens" ? done.content.filter(b => b.type !== "tool_use") : done.content;
        state.history.push({ role: "assistant", content });
      }
      track("Assistant reply", { stop: done.stop });
      ok = true;
    } catch (err) {
      typing.remove(); live?.remove();
      state.history.pop();
      if (err.offline) { state.offline = true; setStatus(); save(); busy = false; form.classList.remove("busy"); return offlineAnswer(said || "", true); }
      bubble("bot error", `${esc(err.message)} <button type="button" class="ai-retry" data-retry>Try again</button>`);
      retryWith = userContent;
    } finally {
      typing.remove();
      busy = false; form.classList.remove("busy"); save();
      if (ok) render();
      input.focus();
    }
  }
  let retryWith = null;

  /* ---------- quick-answer mode: FAQ search ---------- */
  let faq = null;
  async function loadFaq() {
    if (faq) return faq;
    try {
      const html = await (await fetch("/faq.html")).text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      faq = [...doc.querySelectorAll(".faq-group details")].map(d => ({ q: d.querySelector("summary").textContent, a: d.querySelector("p").textContent }));
    } catch { faq = []; }
    return faq;
  }
  const words = s => s.toLowerCase().match(/[a-z0-9]{3,}/g) || [];
  async function offlineAnswer(q, shown) {
    if (!shown) bubble("me", esc(q));
    const intents = [
      [/invest|partner|fund|financ/i, "You can invest in the group or a single business, or partner with us. [Make an investment enquiry](#invest) or see [Invest & Partner](/investment)."],
      [/consult|train|facility|procure|book|service|marketing|oil|gas/i, "Misalta Consulting can help. [Book a service](#services) or see [Misalta Consulting](/consulting)."],
      [/trade ?x|early access|commodit|sell my|buyer|trader/i, "Join the [Trade X early access list](/trade-x#get-started) and we'll be in touch as it opens."],
      [/supply|quote|cocoa|buy|order/i, "[Request a supply quote](#supply) with the product, quantity, grade and destination."],
      [/person|human|call|phone|whatsapp|talk|agent|contact/i, `Our team is here for you: call or WhatsApp [${CONFIG.phone}](${tel}), or email ${E.info}. We reply within two business days.`]
    ];
    const intent = intents.find(([re]) => re.test(q));
    const list = await loadFaq(), qw = new Set(words(q));
    const best = list.map(f => ({ f, score: words(f.q + " " + f.a).filter(w => qw.has(w)).length + words(f.q).filter(w => qw.has(w)).length }))
      .sort((a, b) => b.score - a.score)[0];
    const parts = [];
    if (best && best.score >= 2) parts.push(`**${best.f.q}**\n${best.f.a}`);
    if (intent) parts.push(intent[1]);
    if (!parts.length) parts.push(`I don't have a quick answer for that. Browse the [FAQ](/faq), or our team can help: call or WhatsApp [${CONFIG.phone}](${tel}) or email ${E.info}.`);
    bubble("bot", md(parts.join("\n\n")));
    log.querySelectorAll('a[href="#invest"],a[href="#services"],a[href="#supply"]').forEach(a => { a.dataset.open = a.getAttribute("href").slice(1); a.setAttribute("href", "#"); });
  }

  /* ---------- sending a prepared request ---------- */
  function submit(tool) {
    const t = TEAMS[tool.input.team] || TEAMS.info, f = document.createElement("form");
    const map = { name: "Name", email: "Email", phone: "Phone", organisation: "Organisation", location: "Location", commodity: "Commodity", details: "Message" };
    for (const [k, n] of Object.entries(map)) { const i = document.createElement("input"); i.name = n; i.value = tool.input[k] || ""; f.append(i); }
    return new Promise(resolve => {
      f.addEventListener("sent", () => resolve(formsLive ? "sent: delivered to the team inbox" : "email: the visitor's email app opened with the message ready; they still need to press send there"));
      sendMail(f, `${tool.input.subject || "Enquiry"} (via Misalta AI)`, t[1], "Your message is ready to send.");
      setTimeout(() => resolve("email: the visitor's email app opened with the message ready; they still need to press send there"), 4000);
    });
  }

  /* ---------- events ---------- */
  function setStatus() { q0("aiStatus").innerHTML = state.offline ? "<i class=\"off\"></i>Quick answers mode" : "<i></i>Online · replies instantly"; }
  function open(prefill) {
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add("open"));
    document.documentElement.classList.add("ai-open");
    q0("aiLaunch")?.setAttribute("aria-expanded", "true");
    if (prefill) { input.value = prefill; }
    input.focus();
    track("Assistant opened");
  }
  function close() {
    panel.classList.remove("open");
    document.documentElement.classList.remove("ai-open");
    q0("aiLaunch")?.setAttribute("aria-expanded", "false");
    setTimeout(() => { panel.hidden = true; }, 250);
    q0("aiLaunch")?.focus();
  }
  function sendText(text) {
    text = text.trim().slice(0, 2000);
    if (!text || busy) return;
    if (state.offline) return offlineAnswer(text);
    const pending = pendingTool();
    // The visitor typed instead of pressing Send: close the open request first, then pass on their words.
    if (pending) ask([{ type: "tool_result", tool_use_id: pending.id, content: "not sent: the visitor replied instead" }, { type: "text", text }]);
    else ask(text);
  }

  form.addEventListener("submit", e => { e.preventDefault(); const t = input.value; input.value = ""; input.style.height = ""; sendText(t); });
  input.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
  input.addEventListener("input", () => { input.style.height = ""; input.style.height = Math.min(input.scrollHeight, 120) + "px"; });
  q0("aiClose").addEventListener("click", close);
  q0("aiReset").addEventListener("click", () => { state = { history: [], offline: false }; save(); setStatus(); render(); input.focus(); });
  panel.addEventListener("keydown", e => { if (e.key === "Escape") { e.stopPropagation(); close(); } });
  log.addEventListener("click", async e => {
    const chip = e.target.closest("[data-q]");
    if (chip) {
      if (chip.dataset.q === "Talk to a person") { bubble("bot", md(`Of course. Call or WhatsApp [${CONFIG.phone}](${tel}), email ${E.info}, or use the [contact page](/contact). We reply within two business days.`)); return; }
      return sendText(chip.dataset.q);
    }
    if (e.target.closest("[data-retry]") && retryWith) { const c = retryWith; retryWith = null; e.target.closest(".ai-msg").remove(); return typeof c === "string" ? sendText(c) : ask(c); }
    const s = e.target.closest("[data-send]"), c = e.target.closest("[data-cancel]");
    if (s || c) {
      const tool = pendingTool();
      if (!tool || tool.id !== (s || c).dataset[s ? "send" : "cancel"]) return;
      (s || c).disabled = true;
      const result = s ? await submit(tool) : "not sent: the visitor wants to change something";
      track(s ? "Assistant request sent" : "Assistant request changed", { team: tool.input.team });
      ask([{ type: "tool_result", tool_use_id: tool.id, content: result }]);
    }
    const a = e.target.closest("a[href]");
    if (a && !a.dataset.open && matchMedia("(max-width:600px)").matches && a.getAttribute("href").startsWith("/")) close();
  });

  setStatus();
  render();
  window.misaltaAI = { open, close, ask: t => { open(); sendText(t); } };
})();
