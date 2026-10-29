import { socials } from "../data/projects";

const src = `${import.meta.env.BASE_URL}images/characters/banner.jpg`;

const colors = [
  ["#090A09", "Void"],
  ["#C4F56A", "Lime"],
  ["#ECEFE8", "Mist"],
];

export default function BrandBanner() {
  return (
    <section id="brand" className="mx-auto max-w-[90rem] scroll-mt-20 px-5 py-24 md:px-10 lg:py-32">
      <div className="relative overflow-hidden border border-edge bg-black">
        <img
          src={src}
          alt="A masked Cubbie in black tactical gear, standing in front of a glowing green ring"
          width={1584}
          height={672}
          loading="lazy"
          className="h-60 w-full object-cover object-[85%_center] md:aspect-[2.36/1] md:h-auto md:object-center"
        />
        <div className="p-6 md:absolute md:inset-y-0 md:left-0 md:flex md:w-1/2 md:flex-col md:justify-center md:p-10 lg:p-14">
          <p className="kicker text-acc">Cubbie World</p>
          <h2 className="display mt-3 text-[clamp(3.2rem,7vw,7rem)]">
            Cub<span className="text-acc">bie</span>
          </h2>
          <p className="mt-5 max-w-xs text-ink/80">Same soul. Different styles. Always Cubbie.</p>
          <div className="mt-6 flex flex-wrap gap-5">
            {colors.map(([hex, name]) => (
              <div key={hex} className="flex items-center gap-2">
                <span className="h-5 w-5 ring-1 ring-white/30" style={{ background: hex }} />
                <span className="kicker text-dim">
                  {name} {hex}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="kicker border border-white/30 px-4 py-2.5 transition hover:border-acc hover:text-acc"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
