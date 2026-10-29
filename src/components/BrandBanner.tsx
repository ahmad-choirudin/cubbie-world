import { socials } from "../data/projects";

const src = `${import.meta.env.BASE_URL}images/characters/banner.jpg`;

const colors = [
  ["#090A09", "Void"],
  ["#C4F56A", "Lime"],
  ["#ECEFE8", "Mist"],
];

export default function BrandBanner() {
  return (
    <section id="brand" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
        <img
          src={src}
          alt="A masked Cubbie in black tactical gear, standing in front of a glowing green ring"
          className="h-60 w-full object-cover object-[85%_center] md:aspect-[2.36/1] md:h-auto md:object-center"
        />
        <div className="p-6 md:absolute md:inset-y-0 md:left-0 md:flex md:w-1/2 md:flex-col md:justify-center md:p-12">
          <p className="text-sm text-acc">Cubbie World</p>
          <h2 className="mt-2 font-d text-5xl font-bold uppercase leading-none sm:text-6xl">
            Cub<span className="text-acc">bie</span>
          </h2>
          <p className="mt-4 max-w-xs text-ink/80">Same soul. Different styles. Always Cubbie.</p>
          <div className="mt-6 flex gap-4">
            {colors.map(([hex, name]) => (
              <div key={hex} className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full ring-1 ring-white/30" style={{ background: hex }} />
                <span className="text-xs text-dim">{name} {hex}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-4 py-1.5 text-sm hover:border-acc hover:text-acc">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
