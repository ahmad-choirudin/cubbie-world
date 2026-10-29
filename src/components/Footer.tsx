import { abstractImage } from "../data/characters";
import { links, projects, socials } from "../data/projects";

export default function Footer() {
  return (
    <>
      <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden border-t border-white/10">
        <img src={abstractImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg/70 to-bg" />
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="font-d text-4xl font-bold">Let us work together</h2>
          <p className="mt-3 max-w-md text-ink/80">Open to job opportunities and collaborations. Get in touch, or explore the Cubbie ecosystem.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="rounded-2xl bg-slab/90 p-5 font-d text-lg font-bold ring-1 ring-white/10 hover:ring-acc">
                {p.name}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.email} className="rounded-full bg-acc px-5 py-2 text-sm font-semibold text-bg">Email me</a>
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-5 py-2 text-sm font-semibold hover:border-acc hover:text-acc">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-dim">
        <p>Cubbie World is a character universe with Web3 tools built around it.</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Cubbie World. All rights reserved.</p>
      </footer>
    </>
  );
}
