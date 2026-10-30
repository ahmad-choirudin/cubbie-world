import { links } from "../data/projects";

const cards = [
  ["Creative process", "Character sheets, outfit studies and 3D renders, all from one set of shapes and colors."],
  ["Design", "A black and lime palette with cinematic lighting, kept the same across every edition."],
  ["Web3 tools", "A small set of tools built around the character. Find them in the Universe section."],
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[90rem] scroll-mt-20 px-5 py-24 md:px-10 lg:py-32"
    >
      <p className="kicker text-acc">About</p>
      <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2 className="display text-[clamp(2.2rem,6vw,5.5rem)] lg:col-span-8">
          Not just a toy. <span className="text-acc">Your little universe.</span>
        </h2>
        <p className="max-w-sm text-dim lg:col-span-3 lg:col-start-10">
          Cubbie is a character with a different style for every mood, and a set of Web3 tools built around it.
        </p>
      </div>

      <div className="mt-16 grid gap-10 border-t border-edge pt-8 md:grid-cols-3 md:gap-8">
        {cards.map(([t, d], i) => (
          <div key={t} className="rv">
            <p className="kicker text-acc/70">0{i + 1}</p>
            <h3 className="font-d mt-3 text-xl font-bold uppercase">{t}</h3>
            <p className="mt-2 text-sm text-dim">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href={links.portfolio}
          target="_blank"
          rel="noreferrer"
          className="kicker bg-acc px-6 py-4 text-bg transition hover:bg-ink"
        >
          Meet the creator
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="kicker border border-white/30 px-6 py-4 transition hover:border-acc hover:text-acc"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
