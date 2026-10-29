import { useState } from "react";

const src = `${import.meta.env.BASE_URL}images/characters/character-sheet.jpg`;
const views = [
  { name: "Front", x: "0%" },
  { name: "Side", x: "50%" },
  { name: "Back", x: "100%" },
];

export default function CharacterSheet() {
  const [i, setI] = useState(0);

  return (
    <section id="sheet" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <h2 className="font-d text-4xl font-bold">Character Sheet</h2>
      <p className="mt-3 max-w-lg text-dim">Front, side and back. Pick a view to look closer.</p>
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div
          role="img"
          aria-label={`${views[i].name} view of Cubbie`}
          className="mx-auto aspect-[457/768] w-full max-w-sm rounded-2xl bg-white ring-1 ring-white/10 lg:mx-0"
          style={{ backgroundImage: `url(${src})`, backgroundSize: "300% 100%", backgroundPosition: `${views[i].x} 0` }}
        />
        <div>
          <div className="flex gap-2">
            {views.map((v, n) => (
              <button
                key={v.name}
                onClick={() => setI(n)}
                aria-pressed={n === i}
                className={`rounded-full px-5 py-2 text-sm uppercase ${n === i ? "bg-acc font-bold text-bg" : "border border-white/15 text-ink/80 hover:border-acc"}`}
              >
                {v.name}
              </button>
            ))}
          </div>
          <div className="relative mt-5 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img src={src} alt="Cubbie character sheet: front, side and back views" className="w-full" />
            <div
              className="absolute top-0 h-full w-1/3 border-2 border-acc transition-all duration-300"
              style={{ left: `${(i * 100) / 3}%` }}
            />
          </div>
          <p className="mt-4 max-w-md text-sm text-dim">
            A Cubbie in a puffer vest, cargo pants and lime-trimmed sneakers, shown from three angles.
          </p>
        </div>
      </div>
    </section>
  );
}
