const items = [
  ["Universe", "#top"],
  ["Outfits", "#outfits"],
  ["Collectibles", "#collectibles"],
  ["About", "#about"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-d text-xl font-bold">
          Cubbie<span className="text-acc">.</span>
        </a>
        <div className="flex gap-5 overflow-x-auto text-sm text-dim">
          {items.map(([n, h]) => (
            <a key={n} href={h} className="hover:text-ink">{n}</a>
          ))}
          <a href="#contact" className="text-acc">Contact</a>
        </div>
      </nav>
    </header>
  );
}
