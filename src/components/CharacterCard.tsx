import type { Character } from "../data/characters";

type Props = { character: Character; no: string; onOpen: (c: Character) => void };

export default function CharacterCard({ character, no, onOpen }: Props) {
  return (
    <button
      onClick={() => onOpen(character)}
      aria-label={`View ${character.name}`}
      className="rv w-64 shrink-0 snap-start rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] p-2 text-left transition-colors hover:border-acc"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img src={character.image} alt={character.name} loading="lazy" className="aspect-[3/4] w-full object-cover" />
        <span className="absolute right-2 top-2 rounded bg-bg/70 px-2 py-0.5 text-[10px]">{no}</span>
      </div>
      <div className="px-2 pb-2 pt-3">
        <p className="font-d text-sm font-bold uppercase">Cubbie {no} — {character.name}</p>
        <p className="mt-1 line-clamp-2 text-xs text-dim">{character.description}</p>
        <span className="mt-3 inline-block rounded-full border border-acc/60 px-3 py-0.5 text-xs text-acc">{character.label}</span>
      </div>
    </button>
  );
}
