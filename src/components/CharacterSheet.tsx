import { useRef, useState } from "react";

const base = import.meta.env.BASE_URL;

const views = [
  { id: "front", label: "Front", note: "Glowing lime eyes and a quilted vest, facing the camera.", src: `${base}images/characters/front.jpg` },
  { id: "side", label: "Side", note: "The profile shows the vest shape and the lime wristband.", src: `${base}images/characters/side.jpg` },
  { id: "back", label: "Back", note: "Layered hair and a clean quilted back.", src: `${base}images/characters/back.jpg` },
];

const items = ["Quilted puffer vest", "Cargo pants", "Lime wristband", "Lime-trimmed sneakers"];

const palette = [
  ["Void", "#090A09"],
  ["Lime", "#C4F56A"],
  ["Mist", "#ECEFE8"],
];

export default function CharacterSheet() {
  const [i, setI] = useState(0);
  const startX = useRef<number | null>(null);
  const go = (d: number) => setI((n) => (n + d + views.length) % views.length);
  const v = views[i];

  return (
    <section id="sheet" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <h2 className="font-d text-4xl font-bold">Character Sheet</h2>
      <p className="mt-3 max-w-lg text-dim">Swipe the image, tap the arrows or pick a view.</p>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div>
          <div
            tabIndex={0}
            role="group"
            aria-label="Character views"
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") go(-1);
              if (e.key === "ArrowRight") go(1);
            }}
            onPointerDown={(e) => {
              startX.current = e.clientX;
            }}
            onPointerUp={(e) => {
              if (startX.current === null) return;
              const dx = e.clientX - startX.current;
              startX.current = null;
              if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            }}
            onPointerCancel={() => {
              startX.current = null;
            }}
            className="relative mx-auto aspect-[3/4] w-full max-w-sm touch-pan-y select-none overflow-hidden rounded-2xl bg-black ring-1 ring-white/10 lg:mx-0"
          >
            {views.map((x, n) => (
              <img
                key={x.id}
                src={x.src}
                alt={n === i ? `${x.label} view of Cubbie` : ""}
                aria-hidden={n !== i}
                draggable={false}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 motion-reduce:transition-none ${n === i ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <button onClick={() => go(-1)} aria-label="Previous view" className="absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-bg/70 hover:text-acc">‹</button>
            <button onClick={() => go(1)} aria-label="Next view" className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-bg/70 hover:text-acc">›</button>
          </div>
          <div className="mx-auto mt-4 flex max-w-sm gap-3 lg:mx-0">
            {views.map((x, n) => (
              <button
                key={x.id}
                onClick={() => setI(n)}
                aria-pressed={n === i}
                className={`flex-1 overflow-hidden rounded-xl bg-slab text-center text-xs ring-1 transition ${n === i ? "ring-2 ring-acc" : "ring-white/10 hover:ring-acc"}`}
              >
                <img src={x.src} alt="" className="aspect-[3/4] w-full object-cover" />
                <span className="block py-2 uppercase">{x.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-acc">View</p>
          <h3 className="font-d text-3xl font-bold uppercase" aria-live="polite">{v.label}</h3>
          <p className="mt-2 max-w-md text-dim">{v.note}</p>
          <h4 className="mt-8 font-d text-lg font-bold">Signature items</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {items.map((x) => (
              <li key={x} className="rounded-xl bg-slab px-4 py-3 text-sm ring-1 ring-white/10">{x}</li>
            ))}
          </ul>
          <h4 className="mt-8 font-d text-lg font-bold">Palette</h4>
          <div className="mt-3 flex flex-wrap gap-5">
            {palette.map(([n, h]) => (
              <div key={h} className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full ring-1 ring-white/30" style={{ background: h }} />
                <div>
                  <p className="text-sm">{n}</p>
                  <p className="text-xs text-dim">{h}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

