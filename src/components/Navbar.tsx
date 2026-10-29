const items = [
  ["World", "#top"],
  ["Outfit Lab", "#outfits"],
  ["Collection", "#collection"],
  ["Story", "#story"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-bg/80 px-5 py-3 backdrop-blur">
        <a href="#top" className="font-d text-xl font-bold tracking-tight">CUBBIE</a>
        <div className="hidden gap-8 text-sm uppercase text-ink/80 md:flex">
          {items.map(([n, h]) => (
            <a key={n} href={h} className="hover:text-acc">{n}</a>
          ))}
        </div>
        <a href="#outfits" className="rounded-full bg-acc px-5 py-2 text-sm font-bold uppercase text-bg hover:brightness-110">Dress up</a>
      </nav>
      <div className="no-bar mx-auto mt-2 flex max-w-6xl gap-5 overflow-x-auto px-3 text-xs uppercase text-dim md:hidden">
        {items.map(([n, h]) => (
          <a key={n} href={h} className="shrink-0">{n}</a>
        ))}
      </div>
    </header>
  );
}
