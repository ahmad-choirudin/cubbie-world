# ◈ Cubbie World

<div align="center">

![PROJECT](https://img.shields.io/badge/PROJECT-CUBBIE_WORLD-C4F56A?style=for-the-badge&labelColor=161b22)
![STATUS](https://img.shields.io/badge/STATUS-IN_PROGRESS-C4F56A?style=for-the-badge&labelColor=161b22)
<br>
![BUILT WITH](https://img.shields.io/badge/BUILT_WITH-REACT_%2B_TYPESCRIPT-58a6ff?style=for-the-badge&labelColor=161b22)

**Small creatures. Big energy.**
<br>
A character-driven landing site in black and lime: meet the Cubbie, explore its universe and follow the Web3 projects built around it.

[GITHUB PROFILE](https://github.com/ahmad-choirudin)

</div>

<!-- Add a screenshot: save it as docs/preview.png, then uncomment the line below. -->
<!-- ![Cubbie World preview](docs/preview.png) -->

---

## ◈ FEATURES

| | |
| --- | --- |
| **01 / DESIGN**<br>Dark theme with a lime accent, fully responsive. | **02 / SECTIONS**<br>Hero, Character Sheet, Cubbie Crew, Collectibles, Universe, Iconic Poster, Brand Banner, Story and Contact. |
| **03 / CHARACTER SHEET**<br>Switch between front, side and back views of the same character. | **04 / COLLECTIBLES**<br>Digital artworks with Original, Cyberpunk and Limited Edition labels. |
| **05 / MOTION**<br>Scrolling mantra strip, smooth entrance animations and a slowly drifting asset banner. | **06 / ACCESSIBILITY**<br>Respects `prefers-reduced-motion`, with visible keyboard focus. |
| **07 / EASY TO EDIT**<br>Text and links live in simple data files under `src/data/`, so updates never touch components. | **08 / TWO HOSTS**<br>Uses a relative base path, so the same build works on Vercel and GitHub Pages. |

> The collectibles are digital artworks only. They are **not minted as NFTs yet**.

## ◈ TECH STACK

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)

## ◈ PAGE FLOW

Hero → Marquee → Character Sheet → Cubbie Crew → Collectibles → Shapes of the Universe → Iconic Poster → Cubbie Universe → Brand Banner → Story → Contact

## ◈ GETTING STARTED

Requires Node.js 18 or newer.

```bash
git clone https://github.com/ahmad-choirudin/cubbie-world.git
cd cubbie-world
npm install
npm run dev
```

Open <http://localhost:5173> in your browser. In GitHub Codespaces, tap **Open in Browser** when the port notification appears.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Check the TypeScript types |

## ◈ DEPLOY

- **Vercel:** import the repo, then use the Vite preset with build command `npm run build` and output directory `dist`.
- **GitHub Pages:** the workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`. In **Settings → Pages**, set **Source** to **GitHub Actions**.

`vite.config.ts` uses `base: "./"`, so no changes are needed to switch between the two.

## ◈ PROJECT STRUCTURE

```
cubbie-world/
├── .github/workflows/deploy.yml
├── public/
│   ├── images/characters/     # hero, banner, front/side/back, crew, collectibles, universe, poster, abstract, story-1
│   ├── favicon.svg
│   └── og-image.png           # social share image
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx        # scrolling mantra strip
│   │   ├── CharacterSheet.tsx
│   │   ├── Crew.tsx
│   │   ├── Collectibles.tsx
│   │   ├── AbstractAsset.tsx  # Shapes of the Universe
│   │   ├── IconicPoster.tsx
│   │   ├── Universe.tsx       # portals to the Web3 projects
│   │   ├── BrandBanner.tsx
│   │   ├── About.tsx          # the Story section
│   │   └── Footer.tsx         # contact and copyright
│   ├── data/
│   │   ├── characters.ts      # collectible and poster details
│   │   └── projects.ts        # project, social and contact links
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js         # colors and fonts
├── vite.config.ts
└── package.json
```

## ◈ MAKE IT YOURS

1. **Links:** replace every `"#"` in `src/data/projects.ts` (projects, X, Telegram, Discord, portfolio, GitHub, email).
2. **Collectibles and poster:** edit names, labels and descriptions in `src/data/characters.ts`.
3. **Crew and shapes:** edit the short arrays at the top of `Crew.tsx` and `AbstractAsset.tsx`.
4. **Images:** swap the files in `public/images/characters/`, keeping the same names.
5. **Look:** colors (`#090A09`, `#C4F56A`) and fonts (Space Grotesk, Inter) live in `tailwind.config.js`.
6. **SEO:** update the title, description and `og-image.png` in `index.html` and `public/`.

## ◈ ROADMAP

- [x] Responsive layout, character sections, universe portals and story
- [x] Deploy on Vercel and GitHub Pages
- [ ] More motion with Motion for React
- [ ] Interactive 3D viewer with a `.glb` model (Three.js / React Three Fiber)
- [ ] Wallet connection and NFT minting, once a deployed smart contract is ready

## ◈ ECOSYSTEM

Cubbie World is the front door to a small set of Web3 projects: **Cubbie NFT Marketplace**, **Web3 Research OS** and **Airdrop Tracker**.

## ◈ LICENSE

Add a license here, for example MIT, before sharing the repo publicly. All Cubbie artwork and characters remain the property of their creator.
