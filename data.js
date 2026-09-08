// Mock data for TÜKÖR prototype
const KOZSZEREPLŐK = [
  {
    id: "magyar-peter",
    nev: "Magyar Péter",
    score: 82,
    color: "green",
    kerdesek: 247,
    kozvetlen: 89,
    konkret: 81,
    kellemetlen: 76,
    forrasokkal: 73,
    onkorrekcio: "+",
    kitérő: 11,
    megvalaszolatlan: 8,
    valosagkapcsolat: "magas",
    history: [
      { period: "2026", kerdesek: 247, valasz: 219, kozvetlen: 89 },
      { period: "2027 Q1", kerdesek: 62, valasz: 58, kozvetlen: 91 },
      { period: "2027 Q2", kerdesek: 71, valasz: 64, kozvetlen: 83 }
    ],
    vakfoltok: [
      "Az elmúlt 12 hónapban a gazdasági kérdésekre rendszeresen válaszolt, azonban a személyes felelősségre vonatkozó kérdések 63%-ára nem adott közvetlen választ."
    ]
  },
  {
    id: "xy-1",
    nev: "Kovács Anna",
    score: 61,
    color: "yellow",
    kerdesek: 183,
    kozvetlen: 64,
    konkret: 58,
    kellemetlen: 52,
    forrasokkal: 49,
    onkorrekcio: "±",
    kitérő: 22,
    megvalaszolatlan: 14,
    valosagkapcsolat: "közepes",
    history: [
      { period: "2026", kerdesek: 183, valasz: 157, kozvetlen: 64 }
    ],
    vakfoltok: [
      "A közpénzek felhasználásával kapcsolatos kérdéseknél gyakran kitérő válaszokat ad."
    ]
  },
  {
    id: "xy-2",
    nev: "Nagy István",
    score: 43,
    color: "orange",
    kerdesek: 156,
    kozvetlen: 48,
    konkret: 41,
    kellemetlen: 35,
    forrasokkal: 38,
    onkorrekcio: "–",
    kitérő: 31,
    megvalaszolatlan: 19,
    valosagkapcsolat: "alacsony",
    history: [],
    vakfoltok: [
      "A korrupciós témájú kérdések 71%-ára nem adott konkrét választ."
    ]
  },
  {
    id: "xy-3",
    nev: "Szabó Éva",
    score: 27,
    color: "red",
    kerdesek: 219,
    kozvetlen: 31,
    konkret: 24,
    kellemetlen: 18,
    forrasokkal: 22,
    onkorrekcio: "–",
    kitérő: 42,
    megvalaszolatlan: 28,
    valosagkapcsolat: "nagyon alacsony",
    history: [],
    vakfoltok: [
      "Rendszeresen elzárkózik a kellemetlen kérdésektől. A 'nem válaszolt' arány kiemelkedően magas."
    ]
  }
];

const KERDESEK = [
  {
    id: 1,
    kerdes: "Miért támogatja a kormány ezt a szerződést, amikor annak költsége jelentősen meghaladja az eredeti becslést?",
    tema: "közpénzek",
    kozszereploId: "magyar-peter",
    kozszereploNev: "Magyar Péter",
    allapot: "resben", // megvalaszolva | resben | megvalaszolatlan | nem-valaszolt
    valasz: "A beruházás stratégiai jelentőségű Magyarország számára. A hosszú távú gazdasági előnyök messze meghaladják a kezdeti költségnövekedést, és a projekt a nemzeti érdekeket szolgálja.",
    ai: {
      kozvetlen: 42,
      konkret: 18,
      strategia: 81,
      osszegzes: "A válasz a beruházás stratégiai jelentőségét részletesen tárgyalja, de nem ad konkrét választ arra, mi indokolja a költségnövekedést.",
      reszletek: [
        { cimke: "Közvetlen válasz a kérdésre", ertek: 42, color: "orange" },
        { cimke: "Költségnövekedésre adott konkrét válasz", ertek: 18, color: "red" },
        { cimke: "Stratégiai indoklás kifejtése", ertek: 81, color: "green" },
        { cimke: "Lényegi rész kihagyása", ertek: null, color: "red", note: "Az eredeti kérdés egyik lényegi részére nem tért ki." }
      ]
    }
  },
  {
    id: 2,
    kerdes: "Milyen konkrét lépéseket tesz a kórházi várólisták csökkentése érdekében?",
    tema: "egészségügy",
    kozszereploId: "xy-1",
    kozszereploNev: "Kovács Anna",
    allapot: "megvalaszolva",
    valasz: "Három intézkedést indítottunk: 1) 200 új szakorvosi állás meghirdetése, 2) digitális előjegyzési rendszer országos bevezetése, 3) 15 milliárd forintos többletforrás a műtéti kapacitások bővítésére. A várólisták átlagosan 18%-kal csökkentek az elmúlt fél évben.",
    ai: {
      kozvetlen: 88,
      konkret: 85,
      strategia: 70,
      osszegzes: "A válasz konkrét, számszerűsíthető intézkedéseket tartalmaz, és adatot is közöl a hatásról.",
      reszletek: [
        { cimke: "Közvetlen válasz", ertek: 88, color: "green" },
        { cimke: "Konkrét intézkedések", ertek: 85, color: "green" },
        { cimke: "Ellenőrizhető adatok", ertek: 78, color: "green" }
      ]
    }
  },
  {
    id: 3,
    kerdes: "Miért nem publikálták a minisztérium belső audit jelentését a közbeszerzésekről?",
    tema: "korrupció",
    kozszereploId: "xy-3",
    kozszereploNev: "Szabó Éva",
    allapot: "nem-valaszolt",
    valasz: null,
    ai: null
  },
  {
    id: 4,
    kerdes: "Hogyan magyarázza a 2025-ös nyilatkozatát a jelenlegi álláspontjával szemben?",
    tema: "egyéb",
    kozszereploId: "magyar-peter",
    kozszereploNev: "Magyar Péter",
    allapot: "megvalaszolva",
    valasz: "Akkor más információk álltak rendelkezésemre. Az új adatok fényében módosítottam a véleményemet. Hibáztam, amikor nem vártam meg a teljes kép kialakulását.",
    ai: {
      kozvetlen: 92,
      konkret: 80,
      strategia: 75,
      osszegzes: "A válasz felismeri a korábbi álláspont hibáját, és magyarázatot ad a változásra. Magas valóságkapcsolat.",
      reszletek: [
        { cimke: "Közvetlen válasz", ertek: 92, color: "green" },
        { cimke: "Önkorrekció", ertek: 90, color: "green" },
        { cimke: "Felelősségvállalás", ertek: 85, color: "green" }
      ]
    }
  }
];

const TEMÁK = [
  "gazdaság", "egészségügy", "oktatás", "közlekedés",
  "külpolitika", "közpénzek", "korrupció", "honvédelem",
  "környezet", "egyéb"
];

// AI provider options for the prototype
const AI_PROVIDERS = [
  { id: "mock", name: "Beépített szimuláció (prototípus)", desc: "Helyi mock válaszok – nincs valódi API hívás" },
  { id: "grok", name: "xAI Grok", desc: "Csatlakoztatható Grok API-val (később)" },
  { id: "openai", name: "OpenAI GPT", desc: "OpenAI API kulccsal" },
  { id: "claude", name: "Anthropic Claude", desc: "Claude API kulccsal" },
  { id: "local", name: "Helyi modell (Ollama stb.)", desc: "Saját futtatású modell" }
];

function getScoreColor(score) {
  if (score >= 70) return "green";
  if (score >= 50) return "yellow";
  if (score >= 30) return "orange";
  return "red";
}

function getAllapotBadge(allapot) {
  const map = {
    megvalaszolva: { text: "Megválaszolva", color: "green" },
    resben: { text: "Részben megválaszolva", color: "yellow" },
    megvalaszolatlan: { text: "Megválaszolatlan", color: "orange" },
    "nem-valaszolt": { text: "Nem válaszolt", color: "red" }
  };
  return map[allapot] || { text: allapot, color: "black" };
}