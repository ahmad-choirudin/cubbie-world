import { useState } from "react";
import { outfits } from "../data/outfits";

export default function OutfitLab() {
  const [i, setI] = useState(0);
  const o = outfits[i];

  return (
    <section id="outfits" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
      <h2 className="font-d text-4xl font-bold">Outfit Lab</h2>
      <p className="mt-3 max-w-md text-dim">Same soul, different styles. Pick an edition to see it larger.</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl bg-slab ring-1 ring-white/10">
            <img key={o.image} src={o.image} alt={o.name} className="sw aspect-[4/5] w-full object-cover" />
          </div>
          <div className="mt-4 flex items-center gap-3">
            <h3 className="font-d text-2xl font-bold">{o.name}</h3>
            <span className="rounded-full border border-acc/60 px-3 py-0.5 text-xs text-acc">{o.category}</span>
          </div>
          <p className="mt-2 max-w-md text-dim">{o.description}</p>
          <p className="mt-2 text-sm text-dim">Edition {String(i + 1).padStart(2, "0")} of {String(outfits.length).padStart(2, "0")}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-3">
          {outfits.map((x, n) => (
            <button
              key={x.name}
              onClick={() => setI(n)}
              aria-pressed={n === i}
              className={`rv overflow-hidden rounded-xl bg-slab text-left ring-1 transition hover:ring-acc ${n === i ? "ring-acc" : "ring-white/10"}`}
            >
              <img src={x.image} alt="" className="aspect-[4/5] w-full object-cover" />
              <div className="p-3">
                <p className="font-d font-bold">{x.name}</p>
                <p className="text-xs text-dim">{x.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
