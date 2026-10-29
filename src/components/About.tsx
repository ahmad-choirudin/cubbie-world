import { links } from "../data/projects";

const cards = [
  ["Creative process", "Character sheets, outfit studies and 3D renders, all from one set of shapes and colors."],
  ["Design", "A black and lime palette with cinematic lighting, kept the same across every edition."],
  ["Web projects", "Cubbie NFT Marketplace, Web3 Research OS and Airdrop Tracker."],
];

export default function About() {
  return (
    <section id="story" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <p className="text-sm text-dim">About / Story</p>
      <div className="mt-4 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <h2 className="font-d text-4xl font-bold uppercase leading-[1.02] sm:text-6xl">Not just a toy. Your little universe.</h2>
        <p className="text-dim">Cubbie is a character with a different style for every mood, and a set of Web3 tools built around it.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map(([t, d]) => (
          <div key={t} className="rv rounded-2xl bg-slab p-6 ring-1 ring-white/10">
            <h3 className="font-d text-xl font-bold">{t}</h3>
            <p className="mt-2 text-sm text-dim">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={links.portfolio} className="rounded-full bg-acc px-6 py-3 text-sm font-bold uppercase text-bg hover:brightness-110">Main portfolio</a>
        <a href={links.github} className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase hover:border-acc">GitHub</a>
      </div>
    </section>
  );
}
