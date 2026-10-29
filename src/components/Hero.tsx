import { heroImage } from "../data/characters";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-6 px-5 pt-10 md:min-h-[78vh] md:grid-cols-[1.1fr_0.9fr] md:pt-0">
      <div>
        <h1 className="font-d text-5xl font-bold uppercase leading-[0.98] sm:text-6xl lg:text-7xl">
          Small creatures.
          <br />
          <span className="text-acc">Big energy.</span>
        </h1>
        <p className="mt-5 text-xl text-dim">Collect your vibe. Build your Cubbie.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#collection" className="rounded-full bg-acc px-6 py-3 text-sm font-bold uppercase text-bg hover:brightness-110">Meet the Cubbies</a>
          <a href="#story" className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase hover:border-acc">Explore the world</a>
        </div>
      </div>
      <div className="relative">
        <img src={heroImage} alt="Cubbie in a black hoodie with headphones, standing in green light" className="fade-l mx-auto max-h-[75vh] w-full object-contain object-right" />
        <p className="absolute left-2 top-1/3 border border-white/30 bg-bg/70 p-2 text-[10px] uppercase leading-tight">
          001<br />The Originals<br />Active form
        </p>
      </div>
    </section>
  );
}
