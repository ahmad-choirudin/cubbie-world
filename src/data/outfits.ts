export type Group = "Street" | "Soft" | "Chaos";
export type Outfit = { name: string; group: Group; description: string; image: string };

export const groups: Group[] = ["Street", "Soft", "Chaos"];

const img = (n: number) => `/images/characters/outfit-${n}.jpg`;

export const outfits: Outfit[] = [
  { name: "Streetwear", group: "Street", description: "Black hoodie, crossbody bag and lime-soled sneakers for everyday wear.", image: img(1) },
  { name: "Urban Cargo", group: "Street", description: "Puffer jacket, cargo pants and a shoulder strap bag.", image: img(5) },
  { name: "Luxury", group: "Soft", description: "A long coat and waistcoat with a lime tie.", image: img(3) },
  { name: "Limited Edition", group: "Soft", description: "Varsity jacket and cap with lime details.", image: img(8) },
  { name: "Cyberpunk", group: "Chaos", description: "Layered tech jacket with glowing lime trim and utility straps.", image: img(2) },
  { name: "Space Explorer", group: "Chaos", description: "White and black flight suit with a clear helmet dome.", image: img(4) },
  { name: "Gamer Edition", group: "Chaos", description: "Headset, bomber jacket and a game controller at the hip.", image: img(6) },
  { name: "Shadow Ninja", group: "Chaos", description: "Face wrap, hooded scarf and a utility belt.", image: img(7) },
];
