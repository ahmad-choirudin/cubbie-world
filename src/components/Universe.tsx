import { projects } from "../data/projects";

const base = import.meta.env.BASE_URL;

const notes = [
  "Browse and collect Cubbie NFTs.",
  "A research workspace for Web3 projects.",
  "Follow airdrop campaigns and tasks in one place.",
];

export default function Universe() {
  return (
    <section id="universe" className="relative isolate overflow-hidden border-y border-white/10">
      <img
        src={`${base}images/characters/universe.jpg`}
        alt="A small Cubbie explorer looks at a glowing green portal in a world of black monoliths"
        className="absolute inset-x-0 top-40 -z-20 aspect-[16/9] w-full object-cover md:inset-0 md:top-0 md:aspect-auto md:h-full md:object-[62%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg/30 to-bg" />
      <div className="mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-between gap-16 px-5 py-20">
        <div>
          <h2 className="font-d text-4xl font-bold uppercase sm:text-6xl">Cubbie Universe</h2>
          <p className="mt-3 max-w-md text-ink/80">
            Beyond the character is a whole world. Step through a portal to explore what is being built around Cubbie.
          </p>
        </div>
        <div className="h-48 md:hidden" />
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <img src={`${base}images/characters/abstract.jpg`} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
          <div className="grid gap-4 bg-bg/60 p-4 backdrop-blur-sm md:grid-cols-3">
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="rv group rounded-2xl bg-slab/90 p-5 ring-1 ring-white/10 transition hover:ring-acc"
              >
                <p className="text-xs text-acc">Portal {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-d text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-dim">{notes[i]}</p>
                <p className="mt-4 text-sm text-acc">Enter →</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
