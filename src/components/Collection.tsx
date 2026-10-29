import { useState } from "react";
import { characters, type Character } from "../data/characters";
import CharacterCard from "./CharacterCard";
import CharacterModal from "./CharacterModal";

export default function Collection() {
  const [active, setActive] = useState<Character | null>(null);

  return (
    <section id="collection" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <h2 className="font-d text-4xl font-bold">Collection</h2>
      <p className="mt-3 max-w-lg text-dim">Digital artworks you can swipe through. They are not minted as NFTs yet.</p>
      <div className="no-bar -mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-4">
        {characters.map((c, i) => (
          <CharacterCard key={c.id} character={c} no={String(i + 1).padStart(3, "0")} onOpen={setActive} />
        ))}
      </div>
      {active && <CharacterModal character={active} onClose={() => setActive(null)} />}
    </section>
  );
}
