const base = import.meta.env.BASE_URL;

// Add more chapters here: copy one block and use story-2.jpg, story-3.jpg, and so on.
const chapters = [
  {
    no: "01",
    title: "The Quiet Corridor",
    image: `${base}images/characters/story-1.jpg`,
    alt: "A small Cubbie in a long coat stands in a corridor of black monoliths lit by green light",
    quote: "Every universe starts with one small step.",
    text: [
      "Cubbie did not walk into the city of black stone because it was brave. It walked in because it was curious.",
      "Somewhere ahead, past the glowing lines and the drifting sparks, something was waiting to be found.",
    ],
  },
];

export default function CubbieStory() {
  return (
    <section id="cubbie-story" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <p className="text-sm text-acc">Editorial</p>
      <h2 className="mt-2 font-d text-4xl font-bold uppercase sm:text-6xl">Cubbie Story</h2>
      <div className="mt-12 grid gap-20">
        {chapters.map((c, i) => (
          <article key={c.no} className="grid items-end gap-6 md:grid-cols-12">
            <figure className={`rv md:col-span-8 ${i % 2 ? "md:order-2" : ""}`}>
              <img src={c.image} alt={c.alt} className="aspect-video w-full rounded-2xl object-cover ring-1 ring-white/10" />
              <figcaption className="mt-2 text-xs text-dim">Fig. {c.no}</figcaption>
            </figure>
            <div className={`rv md:col-span-4 ${i % 2 ? "md:order-1" : ""}`}>
              <p className="text-sm text-acc">Chapter {c.no}</p>
              <h3 className="mt-1 font-d text-2xl font-bold">{c.title}</h3>
              <blockquote className="mt-4 border-l-2 border-acc pl-4 font-d text-xl leading-snug">“{c.quote}”</blockquote>
              {c.text.map((p) => (
                <p key={p} className="mt-4 text-dim">{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
