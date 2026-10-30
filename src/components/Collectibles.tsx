import { useEffect, useRef, useState } from "react";
import { collection, labels } from "../data/collection";
import { projects } from "../data/projects";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Collectibles() {
  const [filter, setFilter] = useState("All");
  const [touched, setTouched] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const railRef = useRef<HTMLUListElement>(null);
  const ticking = useRef(false);
  const lastOpen = useRef<string | null>(null);

  // Only offer labels that at least one piece uses; hide the filter if there is just one.
  const usedLabels = labels.filter((l) => collection.some((c) => c.label === l.name));
  const showFilter = usedLabels.length > 1;

  const visible = filter === "All" ? collection : collection.filter((c) => c.label === filter);
  const idx = visible.findIndex((c) => c.id === openId);
  const current = idx >= 0 ? visible[idx] : null;
  const activeLabel = labels.find((l) => l.name === filter);

  const shown = visible.length ? Math.min(visible.length, Math.round(progress * (visible.length - 1)) + 1) : 0;

  const step = (d: number) => {
    if (!visible.length || idx < 0) return;
    setOpenId(visible[(idx + d + visible.length) % visible.length].id);
  };

  const onScroll = () => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      ticking.current = false;
      const el = railRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    });
  };

  const scrollRail = (dir: number) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const w = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * w, behavior: calm ? "auto" : "smooth" });
  };

  // Start from the first piece whenever the filter changes.
  useEffect(() => {
    railRef.current?.scrollTo({ left: 0 });
    setProgress(0);
  }, [filter]);

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

  // After closing the viewer, bring the last viewed piece back into view in the rail.
  useEffect(() => {
    if (openId) {
      lastOpen.current = openId;
      return;
    }
    if (!lastOpen.current) return;
    const el = railRef.current?.querySelector(`[data-id="${lastOpen.current}"]`);
    el?.scrollIntoView({ inline: "center", block: "nearest" });
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

      {showFilter && (
        <div className="mt-14">
          <div className="no-bar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
            {["All", ...usedLabels.map((l) => l.name)].map((f) => {
              const n = f === "All" ? collection.length : collection.filter((c) => c.label === f).length;
              const on = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    if (f === filter) return;
                    setFilter(f);
                    setTouched(true);
                  }}
                  className={`kicker shrink-0 border px-4 py-2.5 transition ${
                    on
                      ? "border-acc bg-acc text-bg"
                      : "border-white/20 text-dim hover:border-acc hover:text-acc active:border-acc"
                  }`}
                >
                  {f} · {n}
                </button>
              );
            })}
          </div>
          <p className="mt-4 min-h-[1.5rem] text-sm text-dim" aria-live="polite">
            {activeLabel ? activeLabel.text : "Every piece in the collection."}
          </p>
        </div>
      )}

      <div className={`${showFilter ? "mt-10" : "mt-16"} flex items-center justify-between gap-6`}>
        <div className="flex flex-1 items-center gap-4">
          <span className="kicker shrink-0 text-ink">
            {pad(shown)} <span className="text-dim">/ {pad(visible.length)}</span>
          </span>
          <div className="h-px max-w-xs flex-1 bg-white/15">
            <div
              className="h-px bg-acc transition-all duration-300"
              style={{ width: `${visible.length ? (shown / visible.length) * 100 : 0}%` }}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollRail(-1)}
            disabled={progress <= 0.01}
            aria-label="Previous pieces"
            className="h-11 w-11 border border-white/25 transition hover:border-acc hover:text-acc active:border-acc disabled:opacity-30 disabled:hover:border-white/25 disabled:hover:text-ink"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollRail(1)}
            disabled={progress >= 0.99}
            aria-label="Next pieces"
            className="h-11 w-11 border border-white/25 transition hover:border-acc hover:text-acc active:border-acc disabled:opacity-30 disabled:hover:border-white/25 disabled:hover:text-ink"
          >
            ›
          </button>
        </div>
      </div>

      <ul
        ref={railRef}
        onScroll={onScroll}
        className="no-bar -mx-5 mt-6 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto overscroll-x-contain scroll-px-5 px-5 py-10 md:-mx-10 md:scroll-px-10 md:px-10 lg:gap-8"
      >
        {visible.map((c, i) => (
          <li
            key={`${filter}-${c.id}`}
            data-id={c.id}
            className={`${touched ? "rise" : "rv"} w-[78vw] max-w-[24rem] shrink-0 snap-start sm:w-[24rem] lg:w-[26rem] lg:max-w-none ${i % 2 === 1 ? "mt-10" : ""}`}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <button
              type="button"
              onClick={() => setOpenId(c.id)}
              aria-label={`${c.name}, ${c.category}, ${c.label}. Open larger view.`}
              className="group block w-full text-left transition active:scale-[0.99]"
            >
              <div className="relative" style={{ aspectRatio: c.ratio ?? "4 / 5" }}>
                <div className="pointer-events-none absolute -inset-[8%] bg-[radial-gradient(closest-side,rgba(196,245,106,0.16),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100 group-focus-visible:opacity-100" />
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className="relative h-full w-full object-cover object-top transition duration-700 ease-out [mask-image:radial-gradient(ellipse_75%_70%_at_50%_52%,#000_60%,transparent_100%)] group-hover:scale-[1.03] group-active:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h3 className="font-d text-lg font-bold uppercase transition group-hover:text-acc">{c.name}</h3>
                <span className="kicker shrink-0 text-dim">{c.label}</span>
              </div>
              <p className="kicker mt-2 flex justify-between gap-4">
                <span className="text-acc">{c.category}</span>
                <span className="text-dim transition group-hover:text-ink">View ↗</span>
              </p>
              <span className="mt-4 block h-px w-8 bg-acc/60 transition-all duration-500 group-hover:w-full group-active:w-full" />
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
                <p className="kicker mt-2 text-dim">{current.label}</p>
                <h3 className="display mt-4 text-3xl">{current.name}</h3>
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
                  {pad(idx + 1)} / {pad(visible.length)}
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
