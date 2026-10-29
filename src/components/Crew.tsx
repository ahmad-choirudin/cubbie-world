const src = `${import.meta.env.BASE_URL}images/characters/crew.jpg`;

const crew = [
  { no: "01", name: "Tech Hoodie", x: "0%", text: "Black hoodie with glowing lime pockets and sneakers that light up." },
  { no: "02", name: "Utility Jacket", x: "50%", text: "Zip jacket with cargo pockets, a crossbody bag and sturdy boots." },
  { no: "03", name: "Tactical Vest", x: "100%", text: "Layered vest over a black top, with a smartwatch on the wrist." },
];

export default function Crew() {
  return (
    <section
      id="crew"
      className="mx-auto max-w-[90rem] scroll-mt-20 px-5 py-24 md:px-10 lg:py-32"
    >
      <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
        <h2 className="display text-[clamp(2.4rem,6vw,5.5rem)]">Cubbie Crew</h2>
        <p className="mt-6 max-w-xs text-dim lg:mt-0">Same soul, three styles. Meet the crew.</p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:pb-14">
        {crew.map((m, i) => (
          <article key={m.no} className={`rv ${i === 1 ? "sm:mt-14" : ""}`}>
            <div className="bg-coal p-2 ring-1 ring-edge transition hover:ring-acc/60">
              <div
                role="img"
                aria-label={m.name}
                className="aspect-[459/768] w-full bg-black"
                style={{ backgroundImage: `url(${src})`, backgroundSize: "300% 100%", backgroundPosition: `${m.x} 0` }}
              />
            </div>
            <div className="mt-4">
              <p className="kicker text-acc">Crew {m.no}</p>
              <h3 className="font-d mt-2 text-xl font-bold uppercase">{m.name}</h3>
              <p className="mt-2 text-sm text-dim">{m.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
