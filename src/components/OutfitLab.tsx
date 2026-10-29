import { useState } from "react";
import { groups, outfits, type Group } from "../data/outfits";

export default function OutfitLab() {
  const [group, setGroup] = useState<Group>("Street");
  const [sel, setSel] = useState(outfits[0].name);
  const list = outfits.filter((o) => o.group === group);
  const o = outfits.find((x) => x.name === sel)!;

  const pick = (g: Group) => {
    setGroup(g);
    setSel(outfits.find((x) => x.group === g)!.name);
  };
  const step = (d: number) => {
    const i = list.findIndex((x) => x.name === sel);
    setSel(list[(i + d + list.length) % list.length].name);
  };

  return (
    <section id="outfits" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <div className="overflow-hidden rounded-2xl bg-slab ring-1 ring-white/10">
            <img key={o.image} src={o.image} alt={o.name} className="sw aspect-[4/5] w-full object-cover" />
          </div>
          <h3 className="mt-4 font-d text-2xl font-bold">{o.name}</h3>
          <p className="mt-1 max-w-md text-dim">{o.description}</p>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-d text-4xl font-bold">OutfitLab</h2>
            <div className="flex gap-2">
              <button onClick={() => step(-1)} aria-label="Previous outfit" className="h-10 w-10 rounded-full border border-white/20 hover:border-acc">‹</button>
              <button onClick={() => step(1)} aria-label="Next outfit" className="h-10 w-10 rounded-full border border-white/20 hover:border-acc">›</button>
            </div>
          </div>
          <div className="mt-5 flex gap-2 border-b border-white/10 pb-5">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => pick(g)}
                aria-pressed={g === group}
                className={`rounded-full px-5 py-2 text-sm uppercase ${g === group ? "bg-ink text-bg" : "border border-white/15 text-ink/80 hover:border-acc"}`}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {list.map((x) => (
              <button
                key={x.name}
                onClick={() => setSel(x.name)}
                aria-pressed={x.name === sel}
                className={`relative overflow-hidden rounded-xl bg-slab text-left ring-1 transition hover:ring-acc ${x.name === sel ? "ring-2 ring-acc" : "ring-white/10"}`}
              >
                <img src={x.image} alt="" className="aspect-square w-full object-cover" />
                <p className="p-2 text-xs text-ink/80">{x.name}</p>
                {x.name === sel && <span className="absolute bottom-8 right-2 h-2.5 w-2.5 rounded-full bg-acc" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
