# ◈ Cubbie World

<div align="center">

![PROJECT](https://img.shields.io/badge/PROJECT-CUBBIE_WORLD-C4F56A?style=for-the-badge&labelColor=161b22)
![STATUS](https://img.shields.io/badge/STATUS-IN_PROGRESS-C4F56A?style=for-the-badge&labelColor=161b22)
<br>
![BUILT WITH](https://img.shields.io/badge/BUILT_WITH-REACT_%2B_TYPESCRIPT-58a6ff?style=for-the-badge&labelColor=161b22)

**Small creatures. Big energy.**
<br>
A character-driven landing site in black and lime: dress up the Cubbie, browse the collection and explore the little universe around it.

[GITHUB PROFILE](https://github.com/ahmad-choirudin)

</div>

<!-- Add a screenshot: save it as docs/preview.png, then uncomment the line below. -->
<!-- ![Cubbie World preview](docs/preview.png) -->

---

## ◈ FEATURES

| | |
| --- | --- |
| **01 / DESIGN**<br>Dark theme with a lime accent, fully responsive. | **02 / SECTIONS**<br>Hero, OutfitLab, Collection, Story and Contact. |
| **03 / OUTFITLAB**<br>Pick Street, Soft or Chaos and see each outfit larger, with arrows to step through. | **04 / COLLECTION**<br>Swipeable trading-style cards that open in a full-size viewer. |
| **05 / ACCESSIBILITY**<br>Respects `prefers-reduced-motion`, with visible keyboard focus. | **06 / EASY TO EDIT**<br>Content lives in simple data files under `src/data/`, so text and links change without touching components. |

> The collection shows digital artworks only. They are **not minted as NFTs yet**.

## ◈ TECH STACK

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## ◈ GETTING STARTED

Requires Node.js 18 or newer.

```bash
git clone https://github.com/ahmad-choirudin/cubbie-world.git
cd cubbie-world
npm install
npm run dev
```

Open <http://localhost:5173> in your browser. In GitHub Codespaces, tap **Open in Browser** when the port notification appears.

To create a production build:

```bash
npm run build
npm run preview
```

## ◈ PROJECT STRUCTURE

```
cubbie-world/
├── public/
│   ├── images/characters/    # hero, outfit-1..8 and collection images
│   ├── favicon.svg
│   └── og-image.png          # social share image
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx       # scrolling mantra strip
│   │   ├── OutfitLab.tsx
│   │   ├── Collection.tsx
│   │   ├── CharacterCard.tsx
│   │   ├── CharacterModal.tsx
│   │   ├── About.tsx         # the Story section
│   │   └── Footer.tsx        # contact and copyright
│   ├── data/
│   │   ├── characters.ts     # collection items and labels
│   │   ├── outfits.ts        # OutfitLab items and groups
│   │   └── projects.ts       # project, social and contact links
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js        # colors and fonts
└── package.json
```

## ◈ MAKE IT YOURS

1. **Links:** replace every `"#"` in `src/data/projects.ts` with your real URLs.
2. **Outfits:** edit names, groups and descriptions in `src/data/outfits.ts`.
3. **Collection:** edit titles, labels and descriptions in `src/data/characters.ts`.
4. **Images:** swap the files in `public/images/characters/`, keeping the same names.
5. **Look:** colors (`#090A09`, `#C4F56A`) and fonts (Space Grotesk, Inter) live in `tailwind.config.js`.

## ◈ ROADMAP

- [x] Responsive layout, OutfitLab, collection viewer and story section
- [ ] Entrance, hover and modal animations with Motion for React
- [ ] Interactive 3D viewer with a `.glb` model (Three.js / React Three Fiber)
- [ ] Wallet connection and NFT minting, once a deployed smart contract is ready

## ◈ ECOSYSTEM

Cubbie World is the front door to a small set of Web3 projects: **Cubbie NFT Marketplace**, **Web3 Research OS** and **Airdrop Tracker**.

## ◈ LICENSE

Add a license here, for example MIT, before sharing the repo publicly. All Cubbie artwork and characters remain the property of their creator.

