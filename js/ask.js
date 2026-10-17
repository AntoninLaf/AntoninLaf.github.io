// The "Ask me anything" panel: questions in pencil, answers in ink.
import { t, lang } from "./i18n.js";
import { esc } from "./ink.js";

const ENDPOINT = "https://portfolio-chat.expworkshopz.workers.dev";
const history = [];   // per page load only; nothing is stored
let busy = false;

const starters = {
  en: ["What is he best at?", "What did he do at STEKAR?", "How does the VersyNow agent avoid inventing numbers?", "Is he available, and where?"],
  fr: ["En quoi est-il le meilleur ?", "Qu'a-t-il fait chez STEKAR ?", "Comment l'agent VersyNow évite-t-il d'inventer des chiffres ?", "Est-il disponible, et où ?"]
};

function errorText(code) {
  const fr = lang() === "fr";
  if (code === "rate_limited") return fr ? "Beaucoup de questions en peu de temps. Réessayez dans un moment, ou écrivez-moi directement." : "That's a lot of questions in a short time. Try again in a while, or write to me directly.";
  return fr ? "L'assistant ne répond pas pour l'instant. Écrivez-moi directement :" : "The assistant isn't answering right now. Write to me directly:";
}

export function renderAsk(body) {
  const L = lang();
  body.innerHTML = `
    <p class="margin-note ask-intro">${esc(t("ask.intro"))}</p>
    <div class="ask-log" id="ask-log" aria-live="polite"></div>
    <div class="ask-starters" id="ask-starters">${starters[L].map((s) => `<button type="button" class="ask-starter">${esc(s)}</button>`).join("")}</div>
    <form class="ask-form" id="ask-form">
      <input class="ask-input" id="ask-input" type="text" maxlength="600" autocomplete="off" placeholder="${esc(t("ask.placeholder"))}" aria-label="${esc(t("ask.title"))}">
      <button class="btn" type="submit">${esc(t("ask.send"))}</button>
    </form>
    <p class="ask-foot">${esc(t("ask.foot"))} <a href="mailto:${esc(t("ask.email"))}">${esc(t("ask.email"))}</a></p>`;
  const log = body.querySelector("#ask-log");
  for (const m of history) appendTurn(log, m.role, m.content);
  if (history.length) body.querySelector("#ask-starters").hidden = true;

  body.querySelector("#ask-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = body.querySelector("#ask-input");
    ask(body, input.value);
    input.value = "";
  });
  body.querySelectorAll(".ask-starter").forEach((b) => b.addEventListener("click", () => ask(body, b.textContent)));
}

function appendTurn(log, role, text) {
  const p = document.createElement("p");
  p.className = role === "user" ? "ask-q" : "ask-a";
  p.textContent = text;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
  return p;
}

async function ask(body, raw) {
  const q = raw.trim();
  if (!q || busy) return;
  busy = true;
  const log = body.querySelector("#ask-log");
  body.querySelector("#ask-starters").hidden = true;
  history.push({ role: "user", content: q });
  appendTurn(log, "user", q);
  const pending = appendTurn(log, "assistant", "…");
  pending.classList.add("thinking");
  try {
    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-12) })
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok || !data.answer) throw new Error(data.error || "upstream");
    pending.classList.remove("thinking");
    pending.textContent = data.answer;
    history.push({ role: "assistant", content: data.answer });
  } catch (err) {
    pending.classList.remove("thinking");
    pending.classList.add("ask-err");
    pending.innerHTML = `${esc(errorText(err.message))} <a href="mailto:${esc(t("ask.email"))}">${esc(t("ask.email"))}</a>`;
    history.pop();
  } finally {
    busy = false;
    log.scrollTop = log.scrollHeight;
  }
}
