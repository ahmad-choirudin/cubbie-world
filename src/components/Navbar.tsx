const items = [
  ["Explore", "#sheet"],
  ["Characters", "#crew"],
  ["About", "#story"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a href="#top" className="display text-2xl leading-none">
          Cub<span className="text-acc">bie</span>
        </a>
        <div className="hidden gap-10 md:flex">
          {items.map(([n, h], i) => (
            <a key={n} href={h} className="kicker text-ink/70 transition hover:text-acc">
              <span className="mr-2 text-acc/70">0{i + 1}</span>
              {n}
            </a>
          ))}
        </div>
        <a
          href="#universe"
          className="kicker border border-acc bg-acc px-4 py-2.5 text-bg transition hover:bg-transparent hover:text-acc"
        >
          Enter Universe
        </a>
      </nav>
      <div className="no-bar flex gap-6 overflow-x-auto px-5 pb-3 md:hidden">
        {items.map(([n, h]) => (
          <a key={n} href={h} className="kicker shrink-0 text-dim">
            {n}
          </a>
        ))}
      </div>
    </header>
  );
}
