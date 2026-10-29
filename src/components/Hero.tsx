import { heroImage } from "../data/characters";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden md:flex md:min-h-[85vh] md:items-center">
      <div className="mx-auto w-full max-w-6xl px-5 pt-10 md:py-20">
        <div className="max-w-xl">
          <h1 className="font-d text-5xl font-bold uppercase leading-[0.98] sm:text-6xl lg:text-7xl">
            A Little Character.
            <br />
            <span className="text-acc">A Bigger Universe.</span>
          </h1>
          <p className="mt-5 text-xl text-dim">Collect your vibe. Build your Cubbie.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#crew" className="rounded-full bg-acc px-6 py-3 text-sm font-bold uppercase text-bg hover:brightness-110">Meet the Cubbies</a>
            <a href="#story" className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase hover:border-acc">Explore the world</a>
          </div>
        </div>
      </div>
      <img
        src={heroImage}
        alt="Cubbie waving in a black hoodie with glowing green details"
        className="mt-8 h-[55vh] w-full object-cover object-[85%_center] md:absolute md:inset-0 md:-z-10 md:mt-0 md:h-full"
      />
    </section>
  );
}
