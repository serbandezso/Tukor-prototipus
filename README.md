# TÜKÖR – prototípus

Nyilvános visszacsatolási rendszer: nem azt minősíti, kihez tartozol, hanem hogyan viszonyulsz a kellemetlen kérdésekhez.

## Oldalak

- `index.html` – nyitó
- `kozszereplok.html` – névsor + válaszminőség
- `kozszereplo.html?id=...` – egyéni profil, vakfoltok, történet
- `kerdesek.html` – kérdések szűréssel
- `kerdes.html?id=...` – kérdés → válasz → AI-tükör
- `kerdes-feltetel.html` – kérdés beküldése (localStorage)
- `metodika.html` – mit mér az AI + AI csatlakozás
- `vezetok-tukre.html` – színskála, nem rangsor

## AI csatlakoztatás

A fejlécben / módszertan oldalon választható szolgáltató (mock / Grok / OpenAI / Claude / helyi).

Jelenleg a **mock** fut (helyi heurisztika + előre definiált példák).  
A választás `localStorage`-ban van (`tukor_ai_provider`).

Valós backendhez: a `simulateAIAnalysis` helyére API-hívás a kiválasztott providerrel, struktúrált outputtal (közvetlenség, konkrétság, összegzés).

## Alapelv

Az AI nem mondja meg, ki az igaz ember, melyik oldalnak van igaza, vagy kire kell szavazni.  
Csak megmutatja, hogyan bánik a hatalom a kérdéssel.
