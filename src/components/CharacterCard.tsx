import type { Character } from "../data/characters";

type Props = { character: Character; onOpen: (c: Character) => void };

export default function CharacterCard({ character, onOpen }: Props) {
  return (
    <button
      onClick={() => onOpen(character)}
      aria-label={`View ${character.name}`}
      className="rv overflow-hidden rounded-2xl bg-slab text-left ring-1 ring-white/10 transition hover:ring-acc"
    >
      <img src={character.image} alt={character.name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      <div className="flex items-center justify-between gap-2 p-4">
        <h3 className="font-d text-lg font-bold">{character.name}</h3>
        <span className="shrink-0 rounded-full border border-acc/60 px-3 py-0.5 text-xs text-acc">{character.label}</span>
      </div>
    </button>
  );
}
