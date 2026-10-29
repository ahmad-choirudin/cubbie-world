export type Character = {
  id: string;
  name: string;
  label: "Original" | "Cyberpunk" | "Limited Edition";
  description: string;
  image: string;
};

const dir = `${import.meta.env.BASE_URL}images/characters/`;

export const characters: Character[] = [
  { id: "main-character", name: "Main Character", label: "Original", description: "The face of Cubbie World, in a black tech hoodie with glowing green circuitry.", image: dir + "main-character.jpg" },
  { id: "character-sheet", name: "Character Sheet", label: "Original", description: "Front, side and back views of a Cubbie in a puffer vest and cargo pants.", image: dir + "front.jpg" },
  { id: "crew", name: "Cubbie Crew", label: "Cyberpunk", description: "Three Cubbies, three outfits: a hoodie, a utility jacket and a tactical vest.", image: dir + "crew.jpg" },
  { id: "collectibles", name: "The Collectibles", label: "Limited Edition", description: "A Cubbie in a black utility jacket on a round pedestal, made for collectors.", image: dir + "collectibles.jpg" },
  { id: "poster", name: "Iconic Poster", label: "Limited Edition", description: "A Cubbie in a varsity jacket on a faceted throne, framed by a neon ring.", image: dir + "poster.jpg" },
  { id: "universe", name: "Cubbie Universe", label: "Original", description: "A lone explorer looks at a glowing portal in a world of floating black monoliths.", image: dir + "universe.jpg" },
];

export const heroImage = dir + "hero.jpg";
export const abstractImage = dir + "abstract.jpg";
