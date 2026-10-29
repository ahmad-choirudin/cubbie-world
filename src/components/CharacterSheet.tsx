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

const pad = (n: number) => String(n).padStart(2, "0");

export default function CharacterSheet() {
  const [i, setI] = useState(0);
  const startX = useRef<number | null>(null);
  const go = (d: number) => setI((n) => (n + d + views.length) % views.length);
  const v = views[i];

  return (
    <section
      id="sheet"
      className="mx-auto max-w-[90rem] scroll-mt-20 px-5 py-24 md:px-10 lg:py-32"
    >
      <p className="kicker text-acc">Front · Side · Back</p>
      <h2 className="display mt-5 text-[clamp(2.4rem,6vw,5.5rem)]">
        <span className="block">Character</span>
        <span className="block">Sheet</span>
      </h2>
      <p className="mt-6 max-w-lg text-dim">Swipe the image, tap the arrows or pick a view.</p>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:mx-0">
          <div className="relative bg-coal p-3 ring-1 ring-edge sm:p-4">
            <span className="pointer-events-none absolute left-0 top-0 z-10 h-5 w-5 border-l-2 border-t-2 border-acc" />
            <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-5 w-5 border-b-2 border-r-2 border-acc" />
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
              className="relative aspect-[3/4] w-full touch-pan-y select-none overflow-hidden bg-black"
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
              <span className="kicker pointer-events-none absolute bottom-3 left-3 bg-bg/70 px-2 py-1 text-ink">
                {pad(i + 1)} / {pad(views.length)}
              </span>
              <button
                onClick={() => go(-1)}
                aria-label="Previous view"
                className="absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 border border-white/20 bg-bg/70 transition hover:border-acc hover:text-acc"
              >
                ‹
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next view"
                className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 border border-white/20 bg-bg/70 transition hover:border-acc hover:text-acc"
              >
                ›
              </button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {views.map((x, n) => (
              <button
                key={x.id}
                onClick={() => setI(n)}
                aria-pressed={n === i}
                className={`border-b-2 pb-2 text-left transition ${n === i ? "border-acc" : "border-edge hover:border-acc/60"}`}
              >
                <img
                  src={x.src}
                  alt=""
                  className={`aspect-[3/4] w-full object-cover transition ${n === i ? "opacity-100" : "opacity-50"}`}
                />
                <span className={`kicker mt-2 block ${n === i ? "text-acc" : "text-dim"}`}>{x.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <p className="kicker text-acc">View {pad(i + 1)}</p>
          <h3 className="display mt-4 text-[clamp(3rem,7vw,6rem)]" aria-live="polite">
            {v.label}
          </h3>
          <p className="mt-5 max-w-md text-dim">{v.note}</p>

          <p className="kicker mt-14 text-dim">Signature items</p>
          <ul className="mt-4 border-t border-edge">
            {items.map((x, n) => (
              <li key={x} className="flex items-baseline gap-4 border-b border-edge py-3 text-sm">
                <span className="kicker text-acc/70">{pad(n + 1)}</span>
                {x}
              </li>
            ))}
          </ul>

          <p className="kicker mt-14 text-dim">Palette</p>
          <div className="mt-4 flex flex-wrap gap-6">
            {palette.map(([n, h]) => (
              <div key={h} className="flex items-center gap-3">
                <span className="h-12 w-12 ring-1 ring-white/25" style={{ background: h }} />
                <div>
                  <p className="font-d text-sm font-bold uppercase">{n}</p>
                  <p className="kicker text-dim">{h}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
