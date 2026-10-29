const src = `${import.meta.env.BASE_URL}images/characters/crew.jpg`;

const crew = [
  { no: "01", name: "Tech Hoodie", x: "0%", text: "Black hoodie with glowing lime pockets and sneakers that light up." },
  { no: "02", name: "Utility Jacket", x: "50%", text: "Zip jacket with cargo pockets, a crossbody bag and sturdy boots." },
  { no: "03", name: "Tactical Vest", x: "100%", text: "Layered vest over a black top, with a smartwatch on the wrist." },
];

export default function Crew() {
  return (
    <section id="crew" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <h2 className="font-d text-4xl font-bold">Cubbie Crew</h2>
      <p className="mt-3 max-w-lg text-dim">Same soul, three styles. Meet the crew.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {crew.map((m) => (
          <article key={m.no} className="rv overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] p-2">
            <div
              role="img"
              aria-label={m.name}
              className="aspect-[459/768] w-full rounded-xl bg-black"
              style={{ backgroundImage: `url(${src})`, backgroundSize: "300% 100%", backgroundPosition: `${m.x} 0` }}
            />
            <div className="px-2 pb-2 pt-3">
              <p className="text-xs text-acc">Crew {m.no}</p>
              <h3 className="font-d text-lg font-bold">{m.name}</h3>
              <p className="mt-1 text-sm text-dim">{m.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
