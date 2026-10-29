import { heroImage } from "../data/characters";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-6 px-5 pt-12 md:min-h-[88vh] md:grid-cols-2 md:pt-0">
      <div>
        <h1 className="font-d text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
          A Small Character. A Whole Universe.
        </h1>
        <p className="mt-5 max-w-md text-lg text-dim">
          Cubbie is a 3D character in black and lime, built to wear a different style every time.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#outfits" className="rounded-full bg-acc px-6 py-3 font-semibold text-bg hover:brightness-110">Explore Cubbie</a>
          <a href="#about" className="rounded-full border border-white/25 px-6 py-3 font-semibold hover:border-acc">View My Work</a>
        </div>
      </div>
      <img
        src={heroImage}
        alt="Cubbie in a black hoodie with headphones, standing in green light"
        className="fade-l mx-auto max-h-[80vh] w-full object-contain object-right md:ml-auto"
      />
    </section>
  );
}
