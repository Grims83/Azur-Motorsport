/* ============================================================
   SCRIPT.JS — génère le contenu à partir de TEAM_DATA (data.js)
   Tu n'as normalement pas besoin de toucher ce fichier.
   ============================================================ */

const ICONS = {
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M5 3v18M5 4h11l-2 4 2 4H5"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.1l2-1.6-2-3.4-2.4.9a7 7 0 0 0-1.9-1.1L14.3 3H9.7l-.3 2.7a7 7 0 0 0-1.9 1.1l-2.4-.9-2 3.4 2 1.6a7 7 0 0 0 0 2.2l-2 1.6 2 3.4 2.4-.9c.6.5 1.2.8 1.9 1.1L9.7 21h4.6l.3-2.7c.7-.3 1.3-.6 1.9-1.1l2.4.9 2-3.4-2-1.6c.1-.4.1-.7.1-1.1Z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4a3 3 0 0 0 3 5M17 5h3a3 3 0 0 1-3 5"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z"/><circle cx="12" cy="13" r="3.3"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M10 9l6 3-6 3V9Z" fill="currentColor" stroke="none"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>'
};

function initBrand() {
  document.querySelectorAll("[data-team-name]").forEach(el => el.textContent = TEAM_DATA.teamName);
  document.querySelectorAll("[data-team-tagline]").forEach(el => el.textContent = TEAM_DATA.teamTagline);
}

function renderQuickLinks() {
  const grid = document.querySelector("[data-quick-links]");
  if (!grid) return;
  grid.innerHTML = TEAM_DATA.quickLinks.map(link => `
    <a class="quick-link metal-panel" href="${link.url}">
      <span class="ico">${ICONS[link.icon] || ICONS.doc}</span>
      <h3>${link.label}</h3>
      <p>${link.desc}</p>
    </a>
  `).join("");
}

function renderEnduranceEvent() {
  const box = document.querySelector("[data-endurance-event]");
  if (!box) return;
  const ev = TEAM_DATA.enduranceEvent;

  box.querySelector("[data-ev-status]").textContent = statusLabelEndurance(ev.status);
  box.querySelector("[data-ev-status]").className = `status-dot ${statusClassEndurance(ev.status)}`;
  box.querySelector("[data-ev-title]").textContent = ev.title;
  box.querySelector("[data-ev-series]").textContent = ev.series;
  box.querySelector("[data-ev-track]").textContent = ev.track;
  box.querySelector("[data-ev-car]").textContent = ev.car;
  box.querySelector("[data-ev-format]").textContent = ev.format;
  box.querySelector("[data-ev-date]").textContent = ev.date;
  box.querySelector("[data-ev-briefing]").textContent = ev.briefing;
  box.querySelector("[data-ev-notes]").textContent = ev.notes;
}

function statusLabelEndurance(status) {
  return { "inscrit": "Inscrits", "en attente": "En attente", "terminé": "Terminé" }[status] || status;
}
function statusClassEndurance(status) {
  return { "inscrit": "upcoming", "en attente": "live", "terminé": "done" }[status] || "upcoming";
}

function renderRaceWeek() {
  const box = document.querySelector("[data-race-week]");
  if (!box) return;
  box.innerHTML = TEAM_DATA.raceWeek.map(r => `
    <div class="cal-line">
      <span class="cal-track">${r.track}</span>
      <span class="cal-sep">—</span>
      <span class="cal-session">${r.session}</span>
      <span class="cal-sep">·</span>
      <span class="cal-car">${r.car}</span>
    </div>
  `).join("");

  document.querySelectorAll("[data-week-updated]").forEach(el => el.textContent = TEAM_DATA.weekUpdatedOn);
  document.querySelectorAll("[data-sim-game]").forEach(el => el.textContent = TEAM_DATA.simGame);
}

function renderPalmares() {
  const box = document.querySelector("[data-palmares]");
  if (!box) return;

  box.innerHTML = TEAM_DATA.palmares.map(r => `
    <div class="palmares-card metal-panel">
      <div class="palmares-top">
        <h3>${r.event}</h3>
        <span class="palmares-badge">${r.result}</span>
      </div>
      <div class="palmares-meta">${r.track} · ${r.car}</div>
      ${r.note ? `<p class="palmares-note">${r.note}</p>` : ""}
    </div>
  `).join("");
}

function renderBonus() {
  const grid = document.querySelector("[data-bonus-grid]");
  if (!grid) return;

  grid.innerHTML = TEAM_DATA.bonusItems.map(item => {
    let media;
    if (item.video) {
      media = `<video class="bonus-video" controls playsinline><source src="assets/bonus/${item.video}" type="video/mp4">Ton navigateur ne peut pas lire cette vidéo.</video>`;
    } else if (item.embed) {
      media = `<iframe class="bonus-embed" src="${item.embed}" title="${item.title}" frameborder="0" allowfullscreen></iframe>`;
    } else if (item.image) {
      media = `<img src="assets/bonus/${item.image}" alt="${item.title}">`;
    } else {
      media = `<div class="bonus-placeholder">${ICONS[item.tag === "Clip" ? "play" : "camera"]}</div>`;
    }
    return `
      <div class="bonus-card metal-panel">
        <div class="bonus-media">${media}</div>
        <div class="bonus-body">
          <span class="bonus-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.note}</p>
        </div>
      </div>
    `;
  }).join("");
}

function renderSetups() {
  const box = document.querySelector("[data-setups]");
  if (!box) return;

  box.innerHTML = TEAM_DATA.setupFiles.map(s => `
    <a class="setup-row" href="assets/setups/${s.file}" download>
      <div class="setup-info">
        <span class="ico setup-ico">${ICONS.gear}</span>
        <div>
          <div class="setup-title">${s.title}</div>
          ${s.note ? `<div class="setup-note">${s.note}</div>` : ""}
        </div>
      </div>
      <span class="setup-download">${ICONS.download} Télécharger</span>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  initBrand();
  renderQuickLinks();
  renderRaceWeek();
  renderEnduranceEvent();
  renderPalmares();
  renderBonus();
  renderSetups();
});
