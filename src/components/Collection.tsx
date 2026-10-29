import { useState } from "react";
import { characters, type Character } from "../data/characters";
import CharacterCard from "./CharacterCard";
import CharacterModal from "./CharacterModal";

export default function Collection() {
  const [active, setActive] = useState<Character | null>(null);

  return (
    <section id="collectibles" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
      <h2 className="font-d text-4xl font-bold">Collectibles</h2>
      <p className="mt-3 max-w-lg text-dim">Cubbie characters as digital artworks. They are not minted as NFTs yet.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((c) => (
          <CharacterCard key={c.id} character={c} onOpen={setActive} />
        ))}
      </div>
      {active && <CharacterModal character={active} onClose={() => setActive(null)} />}
    </section>
  );
}
