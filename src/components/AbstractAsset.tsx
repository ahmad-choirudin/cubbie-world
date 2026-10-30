const src = `${import.meta.env.BASE_URL}images/characters/abstract.jpg`;

const parts = [
  ["Black spheres", "Glossy, calm, a little mysterious."],
  ["Lime forms", "Soft matte shapes that carry the accent color."],
  ["Glass rings", "Clear loops that catch the light."],
];

export default function AbstractAsset() {
  return (
    <section
      id="shapes"
      className="mx-auto max-w-[90rem] scroll-mt-20 px-5 py-24 md:px-10 lg:py-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="rv lg:order-2 lg:col-span-8">
          <img
            src={src}
            alt="Floating black spheres, grey blocks, rings and ribbons with thin lime lines on a dark background"
            width={1376}
            height={768}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_82%,transparent)] lg:[mask-image:linear-gradient(to_right,transparent,#000_32%)]"
          />
        </div>

        <div className="rv lg:order-1 lg:col-span-4">
          <p className="kicker text-acc">Building blocks</p>
          <h2 className="display mt-4 text-[clamp(1.7rem,2.9vw,2.75rem)]">
            <span className="block">Shapes of</span>
            <span className="block">the World</span>
          </h2>
          <p className="mt-5 max-w-sm text-dim">The building blocks floating around every Cubbie.</p>

          <ul className="mt-8 border-t border-edge">
            {parts.map(([n, d], i) => (
              <li key={n} className="grid grid-cols-[2rem_1fr] gap-x-3 border-b border-edge py-4">
                <span className="kicker pt-1 text-acc/70">0{i + 1}</span>
                <div>
                  <p className="font-d font-bold uppercase">{n}</p>
                  <p className="mt-1 text-sm text-dim">{d}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={src}
            download="cubbie-universe-shapes.jpg"
            className="kicker mt-8 inline-block border border-white/30 px-6 py-4 transition hover:border-acc hover:text-acc active:border-acc"
          >
            Save the asset ↓
          </a>
        </div>
      </div>
    </section>
  );
}
