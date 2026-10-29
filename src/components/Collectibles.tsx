import { characters } from "../data/characters";
import { projects } from "../data/projects";

const base = import.meta.env.BASE_URL;

const labels = [
  { name: "Original", text: "The first Cubbie designs." },
  { name: "Cyberpunk", text: "Glowing lime tech wear." },
  { name: "Limited Edition", text: "Special pieces made for collectors." },
];

export default function Collectibles() {
  return (
    <section id="collectibles" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img
          src={`${base}images/characters/collectibles.jpg`}
          alt="A suited Cubbie displayed in a glass case"
          className="rv aspect-square w-full rounded-2xl object-cover ring-1 ring-white/10"
        />
        <div>
          <span className="rounded-full border border-acc/60 px-3 py-1 text-xs text-acc">NFT minting: coming soon</span>
          <h2 className="mt-4 font-d text-4xl font-bold">Collectibles</h2>
          <p className="mt-3 max-w-md text-dim">
            Cubbie characters as digital artworks, made to be collected. They are not minted as NFTs yet.
          </p>
          <div className="mt-8 grid gap-3">
            {labels.map((l) => {
              const n = characters.filter((c) => c.label === l.name).length;
              return (
                <div key={l.name} className="flex items-center justify-between gap-4 rounded-xl bg-slab p-4 ring-1 ring-white/10">
                  <div>
                    <p className="font-d font-bold">{l.name}</p>
                    <p className="text-sm text-dim">{l.text}</p>
                  </div>
                  <span className="shrink-0 text-sm text-acc">{n} {n === 1 ? "artwork" : "artworks"}</span>
                </div>
              );
            })}
          </div>
          <a
            href={projects[0].url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-acc px-6 py-3 text-sm font-bold uppercase text-bg hover:brightness-110"
          >
            {projects[0].name}
          </a>
        </div>
      </div>
    </section>
  );
}
