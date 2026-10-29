import { useEffect } from "react";
import type { Character } from "../data/characters";

type Props = { character: Character; onClose: () => void };

export default function CharacterModal({ character, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={character.name}>
      <div className="sw relative max-h-full w-full max-w-3xl overflow-auto rounded-2xl bg-slab ring-1 ring-white/10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full bg-bg/80 px-3 py-1 text-sm hover:text-acc">Close</button>
        <img src={character.image} alt={character.name} className="max-h-[65vh] w-full bg-black object-contain" />
        <div className="p-5">
          <div className="flex items-center gap-3">
            <h3 className="font-d text-2xl font-bold">{character.name}</h3>
            <span className="rounded-full border border-acc/60 px-3 py-0.5 text-xs text-acc">{character.label}</span>
          </div>
          <p className="mt-2 max-w-prose text-dim">{character.description}</p>
        </div>
      </div>
    </div>
  );
}
