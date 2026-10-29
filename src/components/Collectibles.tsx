import { characters } from "../data/characters";
import { projects } from "../data/projects";

const labels = [
  { name: "Original", text: "The first Cubbie designs." },
  { name: "Cyberpunk", text: "Glowing lime tech wear." },
  { name: "Limited Edition", text: "Special pieces made for collectors." },
];

const piece = characters.find((c) => c.id === "collectibles")!;

export default function Collectibles() {
  return (
    <section
      id="collectibles"
      className="mx-auto max-w-[90rem] scroll-mt-20 px-5 py-24 md:px-10 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <figure className="rv lg:col-span-5">
          <div className="relative bg-coal p-3 ring-1 ring-edge sm:p-4">
            <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-acc" />
            <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-acc" />
            <img
              src={piece.image}
              alt="A Cubbie in a black utility jacket standing on a round pedestal"
              width={928}
              height={1152}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          <figcaption className="kicker mt-4 flex justify-between gap-4 text-dim">
            <span>{piece.name}</span>
            <span className="text-acc">{piece.label}</span>
          </figcaption>
        </figure>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-28">
          <p className="kicker text-acc">NFT minting: coming soon</p>
          <h2 className="display mt-5 text-[clamp(2.2rem,4.6vw,4.25rem)]">Collectibles</h2>
          <p className="mt-6 max-w-md text-dim">
            Cubbie characters as digital artworks, made to be collected. They are not minted as NFTs yet.
          </p>

          <ul className="mt-10 border-t border-edge">
            {labels.map((l, i) => {
              const n = characters.filter((c) => c.label === l.name).length;
              return (
                <li
                  key={l.name}
                  className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-4 border-b border-edge py-5"
                >
                  <span className="kicker text-acc/70">0{i + 1}</span>
                  <div>
                    <p className="font-d text-xl font-bold uppercase">{l.name}</p>
                    <p className="mt-1 text-sm text-dim">{l.text}</p>
                  </div>
                  <span className="kicker text-dim">
                    {n} {n === 1 ? "artwork" : "artworks"}
                  </span>
                </li>
              );
            })}
          </ul>

          <a
            href={projects[0].url}
            target="_blank"
            rel="noreferrer"
            className="kicker mt-10 inline-block bg-acc px-6 py-4 text-bg transition hover:bg-ink"
          >
            {projects[0].name} →
          </a>
        </div>
      </div>
    </section>
  );
}
