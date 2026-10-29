import { characters } from "../data/characters";

const poster = characters.find((c) => c.id === "poster")!;

export default function IconicPoster() {
  return (
    <section id="poster" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="rv mx-auto w-full max-w-md lg:mx-0">
          <img
            src={poster.image}
            alt="A Cubbie in a varsity jacket sitting on a faceted throne, framed by a glowing ring"
            className="aspect-[4/5] w-full rounded-2xl object-cover ring-1 ring-acc/40 shadow-[0_0_60px_-10px_rgba(196,245,106,0.35)]"
          />
        </div>
        <div>
          <span className="rounded-full border border-acc/60 px-3 py-1 text-xs text-acc">{poster.label}</span>
          <h2 className="mt-4 font-d text-4xl font-bold uppercase sm:text-5xl">Iconic Poster</h2>
          <p className="mt-3 max-w-md text-dim">{poster.description}</p>
          <p className="mt-2 max-w-md text-sm text-dim">One pose that sums up Cubbie: calm, sharp and a little bit legendary.</p>
          <a
            href={poster.image}
            download="cubbie-iconic-poster.jpg"
            className="mt-8 inline-block rounded-full bg-acc px-6 py-3 text-sm font-bold uppercase text-bg hover:brightness-110"
          >
            Save the poster
          </a>
        </div>
      </div>
    </section>
  );
}
