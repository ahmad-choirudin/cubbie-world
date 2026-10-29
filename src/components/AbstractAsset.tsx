const src = `${import.meta.env.BASE_URL}images/characters/abstract.jpg`;

const parts = [
  ["Black spheres", "Glossy, calm, a little mysterious."],
  ["Lime forms", "Soft matte shapes that carry the accent color."],
  ["Glass rings", "Clear loops that catch the light."],
];

export default function AbstractAsset() {
  return (
    <section id="shapes" className="relative isolate overflow-hidden border-y border-edge">
      <img
        src={src}
        alt="Floating black spheres, lime forms and glass rings above dark blocks"
        width={1376}
        height={768}
        loading="lazy"
        className="drift absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/60 to-bg/10" />
      <div className="mx-auto flex min-h-[70svh] max-w-[90rem] flex-col justify-end gap-12 px-5 py-16 md:px-10 lg:py-24">
        <div>
          <h2 className="display text-[clamp(2rem,6vw,5.5rem)]">
            <span className="block">Shapes of</span>
            <span className="block">the Universe</span>
          </h2>
          <p className="mt-6 max-w-md text-ink/80">The building blocks floating around every Cubbie.</p>
        </div>
        <div className="grid gap-8 border-t border-white/25 pt-6 sm:grid-cols-3 sm:gap-10">
          {parts.map(([n, d], i) => (
            <div key={n} className="rv">
              <p className="kicker text-acc">0{i + 1}</p>
              <p className="font-d mt-2 text-lg font-bold uppercase">{n}</p>
              <p className="mt-1 text-sm text-ink/70">{d}</p>
            </div>
          ))}
        </div>
        <a
          href={src}
          download="cubbie-universe-shapes.jpg"
          className="kicker w-fit border border-white/30 px-6 py-4 transition hover:border-acc hover:text-acc"
        >
          Save the asset ↓
        </a>
      </div>
    </section>
  );
}
