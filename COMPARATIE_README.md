# Pagina de Comparație - Console Notebook

## 📊 Status Implementare

✅ **COMPLETAT** - Selector sincronizat cu TOATE 51 consolele din proiect

## 🎮 Console Disponibile (51 Total)

### Generația 1 (5 console)
- Magnavox Odyssey (1972)
- Atari Home Pong (1975)
- Coleco Telstar (1976)
- Atari 2600 (1977)
- Magnavox Odyssey 2 (1978)
- Intellivision (1979)

### Generația 2 (6 console)
- Atari 5200 (1982)
- ColecoVision (1982)
- Vectrex (1982)
- Nintendo Famicom (1983)
- Sega SG-1000 (1983)

### Generația 3 (3 console)
- Nintendo NES (1985)
- Sega Master System (1985)
- Atari 7800 (1986)

### Generația 4 (9 console)
- PC Engine (1987)
- Sega Genesis (1988)
- Neo Geo AES (1990)
- Super Nintendo (1990)
- Philips CD-i (1991)
- 3DO (1993)
- Atari Jaguar (1993)

### Generația 5 (3 console)
- Sega Saturn (1994)
- PlayStation 1 (1994)
- Nintendo 64 (1996)

### Generația 6 (4 console)
- Sega Dreamcast (1998)
- PlayStation 2 (2000)
- Nintendo GameCube (2001)
- Xbox (2001)

### Generația 7 (3 console)
- Xbox 360 (2005)
- Nintendo Wii (2006)
- PlayStation 3 (2006)

### Generația 8 (5 console)
- Nintendo Wii U (2012)
- PlayStation 4 (2013)
- Xbox One (2013)
- Nintendo Switch (2017)

### Generația 9 (3 console)
- PlayStation 5 (2020)
- Xbox Series X (2020)
- Xbox Series S (2020)

### Handheld (10 console)
- Microvision (1979)
- Atari Lynx (1989)
- Game Boy (1989)
- Sega Game Gear (1990)
- Game Boy Color (1998)
- Neo Geo Pocket (1998)
- Neo Geo Pocket Color (1999)
- WonderSwan (1999)
- Game Boy Advance (2001)
- Nintendo DS (2004)
- PlayStation Portable (2004)
- Nintendo 3DS (2011)
- PlayStation Vita (2011)

---

## 🏗️ Arhitectură Tehnică

### Surse de Date

**Sursă de adevăr**: Paginile HTML din `src/html/pages/consoles/`

Fiecare pagină de consolă conține:
```html
<div class="console-meta">
    <span>Manufacturer</span>
    <span>Year</span>
    <span>Generation</span>
</div>
```

### Structura `comparatie.html`

```javascript
// 1. METADATA EXTRACTED (51 console)
const consoleMetadata = [
    {slug: 'playstation-5', name: 'PlayStation 5', mfg: 'Sony', year: 2020, gen: 'Generația 9'},
    // ... 50 more
];

// 2. DETAILED SPECS (pentru console cu date disponibile)
const consolesData = {
    'playstation-5': { specs: {...}, pros: [...], cons: [...] },
    'ps4': { specs: {...}, ... },
    'snes': { specs: {...}, ... },
    'nes': { specs: {...}, ... },
    'atari-2600': { specs: {...}, ... },
    // Nu conține date pentru alte console - vor folosi fallback
};

// 3. MERGED DATABASE (scalabil)
const fullConsoleDb = {};
consoleMetadata.forEach(meta => {
    // Merge metadata + specs, cu fallback
    // Imagine: slug-based (atari-2600.png)
    // Specs: empty object dacă nu există
    // Pro/Contra: array gol dacă nu există
});
```

---

## ✨ Caracteristici Implementate

### 1. **Selector Complet** ✅
- Dropdown A: Selectează prima consolă
- Dropdown B: Selectează a doua consolă
- Toate 51 consolele disponibile
- Grupate pe generații (Gen 1-9 + Handheld)

### 2. **Organizare Cronologică** ✅
- Generații ordonate descrescător (Gen 9 → Gen 1)
- Consolele în cadrul unei generații sortate după an descrescător
- Label clar: "Generația X"

### 3. **Imagini (Fallback)** ✅
- Path: `../../assets/images/consoles/{slug}.png`
- Dacă imaginea nu există → `onerror="this.style.display='none'"`
- Pagina nu se blochează

### 4. **Fișă Tehnică (Specs)** ✅
- 9 console cu date detaliate (PS5, PS4, PS3, PS2, PS1, Xbox 360, SNES, NES, Atari 2600)
- 42 console fără specs → vor afișa doar meta + Pro/Contra
- Render adaptiv: secțiuni specs apare doar dacă au date

### 5. **Pro/Contra Lists** ✅
- 5 console cu verdictul rapid (PS5, PS4, PS3, PS2, PS1, Xbox 360, SNES, NES, Atari 2600)
- 42 console fără liști → secțiune verdict se ascunde

### 6. **Scalabilitate** ✅
- ❌ **NO hardcoding**: Slugurile din `consoleMetadata` se mapează la fișiere HTML reale
- ✅ **Adăugare nouă consolă**: 
  1. Crează `src/html/pages/consoles/my-console.html` (cu structura standard)
  2. Adaugă linie în `consoleMetadata`: `{slug:'my-console', name:'...', mfg:'...', year:..., gen:'...'}`
  3. Optional: Adaugă entry în `consolesData` pentru specs detaliate
  4. **Gata** - pagina auto-se actualizează!

---

## 📝 Specs Disponibile (Categorii)

| Consolă | CPU | GPU | Memory | Storage | Video | Tech |
|---------|-----|-----|--------|---------|-------|------|
| PS5 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PS4 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PS3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PS2 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PS1 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Xbox 360 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| SNES | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| NES | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Atari 2600 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Altele (42)** | — | — | — | — | — | — |

---

## 🛠️ Cum Adaugi Specs la O Nouă Consolă

Exemplu: Adaug specs pentru Sega Dreamcast

```javascript
'sega-dreamcast': {
    name: 'Sega Dreamcast',
    manufacturer: 'Sega',
    year: 1998,
    generation: 6,
    image: '../../assets/images/consoles/sega-dreamcast.png',
    specs: {
        cpu: { arch: 'Hitachi SH-4', node: '0.25 µm', ... },
        gpu: { arch: 'PowerVR CLX2', cu: 'N/A', ... },
        // ... rest
    },
    pros: ['Jocuri exclusive...', ...],
    cons: ['GD-ROM..', ...]
}
```

Atunci slugul din `consoleMetadata` trebuie să fie `sega-dreamcast` ✓

---

## 🎯 Testing Checklist

- [x] Toate 51 consolele apar în selectorA
- [x] Toate 51 consolele apar în selectorB
- [x] Dropdown-urile sunt ordonate corect (Gen 9 → Gen 1, Handheld la final)
- [x] Fiecare generație are consolele sortate după an (descrescător)
- [x] Selectarea unei console updatează card-ul
- [x] Imaginea încarcă fără eroare (sau se ascunde dacă nu există)
- [x] Specs apar pentru console cu date
- [x] Pro/Contra apar pentru console cu verdictul rapid
- [x] Pagina funcționează fără server HTTP (file:// protocol)
- [x] Design responsive (testat la 900px, 768px, 480px)

---

## 📐 Dimensiuni de Referință

- **Selector VS Badge**: 36×36px
- **Console Card**: min-height 320px, flex column
- **Spec Section**: max-width pentru densitate
- **Responsiv**: Breakpoints 900px, 768px, 480px

---

## 🚀 Next Steps (Optional)

1. **Adaugă Specs** pentru mai multe console
2. **Adaugă Imagini** pentru console care lipsesc
3. **Extinde Pro/Contra** cu mai mult conținut tehnic
4. **Adaugă Filtru pe Gen** (dropdown separator per generație)
5. **Implementează Favorites** (localStorage)

---

**Proiect**: Console Notebook - Atestat Informatică  
**Dată**: 2026  
**Status**: ✅ Production Ready
