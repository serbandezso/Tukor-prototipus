// TÜKÖR prototype – shared logic

function getAIProvider() {
  return localStorage.getItem("tukor_ai_provider") || "mock";
}

function setAIProvider(id) {
  localStorage.setItem("tukor_ai_provider", id);
}

function initAISelector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const current = getAIProvider();
  let html = `
    <div class="ai-panel">
      <h3>AI csatlakozás (prototípus)</h3>
      <p class="text-muted" style="margin-bottom:0.75rem;font-size:0.9rem;">
        A rendszer több AI-hoz csatlakoztatható. Jelenleg a beépített szimuláció fut.
        Később API-kulccsal vagy helyi modellel is használható.
      </p>
      <div class="form-group">
        <label for="ai-select">Aktív AI szolgáltató</label>
        <select id="ai-select">
          ${AI_PROVIDERS.map(p => `
            <option value="${p.id}" ${p.id === current ? "selected" : ""}>
              ${p.name}
            </option>
          `).join("")}
        </select>
      </div>
      <p id="ai-desc" class="text-muted" style="font-size:0.85rem;"></p>
    </div>
  `;
  container.innerHTML = html;

  const select = document.getElementById("ai-select");
  const desc = document.getElementById("ai-desc");
  const updateDesc = () => {
    const p = AI_PROVIDERS.find(x => x.id === select.value);
    desc.textContent = p ? p.desc : "";
  };
  updateDesc();
  select.addEventListener("change", () => {
    setAIProvider(select.value);
    updateDesc();
  });
}

// Simulate AI analysis (for prototype when "mock" is selected)
function simulateAIAnalysis(kerdes, valasz) {
  // Very simple heuristic for demo
  const lower = (valasz || "").toLowerCase();
  const hasNumbers = /\d/.test(valasz || "");
  const admits = /hibázt|nem tudom|módosított|korábbi/.test(lower);
  const strategic = /stratégiai|hosszú táv|nemzeti érdek/.test(lower);
  const avoids = !valasz || valasz.length < 40;

  let kozvetlen = avoids ? 15 : (admits ? 90 : (strategic ? 45 : 70));
  let konkret = hasNumbers ? 80 : (admits ? 75 : 35);
  let relevancia = avoids ? 20 : 75;

  return {
    kozvetlen,
    konkret,
    relevancia,
    osszegzes: avoids
      ? "A válasz hiányzik vagy túl általános. A kérdés lényegi része nem kapott választ."
      : admits
        ? "A válasz felismeri a korábbi álláspontot vagy a bizonytalanságot. Magas valóságkapcsolat."
        : strategic
          ? "A válasz a stratégiai keretet erősíti, de a konkrét részletekre kevésbé tér ki."
          : "A válasz részben kapcsolódik a kérdéshez, de további pontosításra szorulna.",
    reszletek: [
      { cimke: "Közvetlenség", ertek: kozvetlen, color: getScoreColor(kozvetlen) },
      { cimke: "Konkrétság", ertek: konkret, color: getScoreColor(konkret) },
      { cimke: "Relevancia", ertek: relevancia, color: getScoreColor(relevancia) }
    ]
  };
}

// Form validation for question submission
function cleanQuestionCheck(text) {
  const personal = /(hülye|idiota|korrupt bűnöző|hazudik|szemét)/i;
  if (personal.test(text)) {
    return {
      warning: true,
      message: "A kérdés személyeskedő részt tartalmaz. Szeretnéd átfogalmazni úgy, hogy a közszereplőnek konkrétan megválaszolható kérdést tegyen fel?"
    };
  }
  return { warning: false };
}

// Utility: render score dot + number
function renderScore(score, color) {
  return `<span class="score"><span class="dot ${color || getScoreColor(score)}"></span> ${score}</span>`;
}

// Set active nav link
function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
});