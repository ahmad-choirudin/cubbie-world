const src = `${import.meta.env.BASE_URL}images/characters/abstract.jpg`;

const parts = [
  ["Black spheres", "Glossy, calm, a little mysterious."],
  ["Lime forms", "Soft matte shapes that carry the accent color."],
  ["Glass rings", "Clear loops that catch the light."],
];

export default function AbstractAsset() {
  return (
    <section id="shapes" className="relative isolate overflow-hidden border-y border-white/10">
      <img
        src={src}
        alt="Floating black spheres, lime forms and glass rings above dark blocks"
        className="drift absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/40 to-bg/10" />
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end gap-8 px-5 py-16">
        <div>
          <h2 className="font-d text-4xl font-bold uppercase sm:text-6xl">Shapes of the Universe</h2>
          <p className="mt-3 max-w-md text-ink/80">The building blocks floating around every Cubbie.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {parts.map(([n, d]) => (
            <div key={n} className="rv rounded-2xl bg-bg/70 p-4 ring-1 ring-white/10 backdrop-blur-sm">
              <p className="font-d font-bold text-acc">{n}</p>
              <p className="mt-1 text-sm text-dim">{d}</p>
            </div>
          ))}
        </div>
        <a
          href={src}
          download="cubbie-universe-shapes.jpg"
          className="w-fit rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase hover:border-acc"
        >
          Save the asset
        </a>
      </div>
    </section>
  );
}
