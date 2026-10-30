import { useEffect, useRef, useState } from "react";
import { collection } from "../data/collection";
import { projects } from "../data/projects";

// Grid span for each card by position, repeating. Each group of three fills 12 columns.
const spans = [
  "lg:col-span-5", "lg:col-span-3", "lg:col-span-4",
  "lg:col-span-3", "lg:col-span-5", "lg:col-span-4",
  "lg:col-span-4", "lg:col-span-3", "lg:col-span-5",
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Collectibles() {
  const [openId, setOpenId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const idx = collection.findIndex((c) => c.id === openId);
  const current = idx >= 0 ? collection[idx] : null;

  const step = (d: number) => {
    if (idx < 0) return;
    setOpenId(collection[(idx + d + collection.length) % collection.length].id);
  };

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (openId && !d.open) d.showModal();
    if (!openId && d.open) d.close();
    document.body.style.overflow = openId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openId]);

  return (
    <section
      id="collectibles"
      className="mx-auto max-w-[90rem] scroll-mt-20 px-5 py-24 md:px-10 lg:py-32"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7">
          <p className="kicker text-acc">NFT minting: coming soon</p>
          <h2 className="display mt-5 text-[clamp(2.2rem,5.6vw,5.5rem)]">Collectibles</h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="kicker text-dim">{pad(collection.length)} pieces</p>
          <p className="mt-3 max-w-md text-dim">
            Cubbie characters as digital artworks, made to be collected. They are not minted as NFTs yet.
          </p>
          <a
            href={projects[0].url}
            target="_blank"
            rel="noreferrer"
            className="kicker mt-6 inline-block bg-acc px-6 py-4 text-bg transition hover:bg-ink active:bg-ink"
          >
            {projects[0].name} →
          </a>
        </div>
      </div>

      <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
        {collection.map((c, i) => (
          <li key={c.id} className={`rv ${spans[i % spans.length]}`}>
            <button
              type="button"
              onClick={() => setOpenId(c.id)}
              aria-label={`${c.name}, ${c.category}. Open larger view.`}
              className="group block w-full text-left transition active:scale-[0.99]"
            >
              <div
                className="relative overflow-hidden bg-coal ring-1 ring-transparent transition group-hover:ring-acc/60 group-focus-visible:ring-acc"
                style={{ aspectRatio: c.ratio ?? "4 / 5" }}
              >
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="kicker absolute left-3 top-3 bg-bg/80 px-2 py-1 text-acc">{c.category}</span>
                <span className="kicker absolute bottom-3 right-3 bg-bg/80 px-2 py-1 text-ink transition group-hover:bg-acc group-hover:text-bg">
                  View ↗
                </span>
              </div>
              <div className="mt-4 grid grid-cols-[2rem_1fr] gap-x-3">
                <span className="kicker pt-1.5 text-acc/70">{pad(i + 1)}</span>
                <div>
                  <h3 className="font-d text-xl font-bold uppercase transition group-hover:text-acc">{c.name}</h3>
                  <p className="mt-1 line-clamp-2 max-w-md text-sm text-dim">{c.description}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenId(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenId(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
        aria-label={current ? current.name : "Collectible viewer"}
        className="m-auto max-h-[94svh] w-[min(94vw,72rem)] overflow-hidden bg-coal p-0 text-ink backdrop:bg-black/85"
      >
        {current && (
          <div className="relative grid max-h-[94svh] md:grid-cols-[1fr_20rem]">
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="kicker absolute right-3 top-3 z-10 border border-white/25 bg-bg/80 px-3 py-2 transition hover:border-acc hover:text-acc"
            >
              Close ✕
            </button>
            <div className="flex min-h-0 items-center justify-center bg-black">
              <img
                src={current.image}
                alt={`${current.name}, ${current.category}`}
                className="max-h-[56svh] w-full object-contain md:max-h-[94svh]"
              />
            </div>
            <div className="flex flex-col justify-between gap-8 overflow-y-auto p-6">
              <div>
                <p className="kicker text-acc">{current.category}</p>
                <h3 className="display mt-3 text-3xl">{current.name}</h3>
                <p className="mt-4 text-sm text-dim">{current.description}</p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous piece"
                  className="h-11 w-11 border border-white/25 transition hover:border-acc hover:text-acc"
                >
                  ‹
                </button>
                <span className="kicker text-dim">
                  {pad(idx + 1)} / {pad(collection.length)}
                </span>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next piece"
                  className="h-11 w-11 border border-white/25 transition hover:border-acc hover:text-acc"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
