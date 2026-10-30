import { links, projects, socials } from "../data/projects";

const nav = [
  ["World", "#top"],
  ["Collectibles", "#collectibles"],
  ["Story", "#cubbie-story"],
  ["About", "#story"],
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-edge">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 md:px-10 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-6">
          <p className="display text-[clamp(3.5rem,9vw,8rem)]">
            Cub<span className="text-acc">bie</span>
          </p>
          <p className="mt-5 max-w-sm text-sm text-dim">Open to job opportunities and collaborations.</p>
          <a
            href={links.email}
            className="kicker mt-8 inline-block bg-acc px-6 py-4 text-bg transition hover:bg-ink"
          >
            Email me
          </a>
        </div>
        
        <div className="grid content-start text-sm text-dim lg:col-span-2 lg:col-start-8">
          <p className="kicker mb-1 text-acc">Navigate</p>
          {nav.map(([n, h]) => (
            <a key={n} href={h} className="py-3 transition hover:text-acc">{n}</a>
          ))}
        </div>
        <div className="grid content-start text-sm text-dim lg:col-span-3 lg:col-start-10">
          <p className="kicker mb-1 text-acc">Elsewhere</p>
          {[...projects, ...socials].map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="py-3 transition hover:text-acc">
              {p.name}
            </a>
          ))}
        </div>
        
      </div>
      <p className="kicker border-t border-edge px-5 py-6 text-center text-dim">
        &copy; {new Date().getFullYear()} Cubbie World. All rights reserved.
      </p>
    </footer>
  );
}
