import { links, projects, socials } from "../data/projects";

const nav = [
  ["World", "#top"],
  ["Outfit Lab", "#outfits"],
  ["Collection", "#collection"],
  ["Story", "#story"],
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-d text-3xl font-bold">CUBBIE</p>
          <p className="mt-3 max-w-sm text-sm text-dim">Open to job opportunities and collaborations.</p>
          <a href={links.email} className="mt-5 inline-block rounded-full bg-acc px-5 py-2 text-sm font-bold uppercase text-bg">Email me</a>
        </div>
        <div className="grid content-start gap-2 text-sm text-dim">
          {nav.map(([n, h]) => (
            <a key={n} href={h} className="hover:text-acc">{n}</a>
          ))}
        </div>
        <div className="grid content-start gap-2 text-sm text-dim">
          {[...projects, ...socials].map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="hover:text-acc">{p.name}</a>
          ))}
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-6 text-center text-xs text-dim">
        &copy; {new Date().getFullYear()} Cubbie World. All rights reserved.
      </p>
    </footer>
  );
}
