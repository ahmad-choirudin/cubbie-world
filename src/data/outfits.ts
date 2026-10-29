export type Outfit = { name: string; category: string; description: string; image: string };

const img = (n: number) => `/images/characters/outfit-${n}.jpg`;

export const outfits: Outfit[] = [
  { name: "Streetwear", category: "Street", description: "Black hoodie, crossbody bag and lime-soled sneakers for everyday wear.", image: img(1) },
  { name: "Cyberpunk", category: "Sci-fi", description: "Layered tech jacket with glowing lime trim and utility straps.", image: img(2) },
  { name: "Luxury", category: "Formal", description: "A long coat and waistcoat with a lime tie.", image: img(3) },
  { name: "Space Explorer", category: "Adventure", description: "White and black flight suit with a clear helmet dome.", image: img(4) },
  { name: "Urban Cargo", category: "Street", description: "Puffer jacket, cargo pants and a shoulder strap bag.", image: img(5) },
  { name: "Gamer Edition", category: "Gaming", description: "Headset, bomber jacket and a game controller at the hip.", image: img(6) },
  { name: "Shadow Ninja", category: "Stealth", description: "Face wrap, hooded scarf and a utility belt.", image: img(7) },
  { name: "Limited Edition", category: "Limited", description: "Varsity jacket and cap with lime details.", image: img(8) },
];
