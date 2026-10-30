const dir = `${import.meta.env.BASE_URL}images/collection/`;

export type Label = "Original" | "Cyberpunk" | "Limited Edition";

// What each label means. Change `label` on a piece below to move it between labels.
export const labels: { name: Label; text: string }[] = [
  { name: "Original", text: "The regular collection." },
  { name: "Cyberpunk", text: "Futuristic designs." },
  { name: "Limited Edition", text: "Special collectibles." },
];

export type Piece = {
  id: string;
  name: string;
  /** Theme of the piece, for example Music or Fitness. */
  category: string;
  /** Collection label. */
  label: Label;
  description: string;
  image: string;
  /** Optional CSS aspect-ratio for the card, for example "1 / 1". Defaults to 4 / 5. */
  ratio?: string;
};

export const collection: Piece[] = [
  {
    id: "dj",
    name: "CUBBIE DJ",
    category: "Music",
    label: "Original",
    description: "The rhythm never stops. CUBBIE brings music to life with futuristic headphones and DJ energy.",
    image: dir + "cubbie-dj.jpg",
  },
  {
    id: "fighter",
    name: "CUBBIE Fighter",
    category: "Martial Arts",
    label: "Original",
    description: "Discipline, strength, and determination. A little warrior with an unstoppable spirit.",
    image: dir + "cubbie-fighter.jpg",
  },
  {
    id: "coder",
    name: "CUBBIE Coder",
    category: "Programming",
    label: "Cyberpunk",
    description: "Turning ideas into code, one line at a time. Built for the digital world.",
    image: dir + "cubbie-coder.jpg",
  },
  {
    id: "web3",
    name: "CUBBIE Web3",
    category: "Blockchain",
    label: "Cyberpunk",
    description: "Exploring decentralized worlds, blockchain technology, and the future of Web3.",
    image: dir + "cubbie-web3.jpg",
  },
  {
    id: "ai-trainer",
    name: "CUBBIE AI Trainer",
    category: "Artificial Intelligence",
    label: "Cyberpunk",
    description: "Teaching machines to think smarter through data, language, and human intelligence.",
    image: dir + "cubbie-ai-trainer.jpg",
  },
  {
    id: "skater",
    name: "CUBBIE Skater",
    category: "Street Culture",
    label: "Original",
    description: "No rules, just creativity. A streetwear-inspired CUBBIE made for the ride.",
    image: dir + "cubbie-skater.jpg",
  },
  {
    id: "mechanic",
    name: "CUBBIE Mechanic",
    category: "Automotive",
    label: "Original",
    description: "Built to fix, driven to create. A tribute to mechanical skills and automotive passion.",
    image: dir + "cubbie-mechanic.jpg",
  },
  {
    id: "community",
    name: "CUBBIE Community",
    category: "Digital Creator",
    label: "Cyberpunk",
    description: "Connecting people, building communities, and creating digital experiences.",
    image: dir + "cubbie-community.jpg",
  },
  {
    id: "athlete",
    name: "CUBBIE Athlete",
    category: "Fitness",
    label: "Original",
    description: "Strength comes from consistency. A fitness-inspired collectible built for progress.",
    image: dir + "cubbie-athlete.jpg",
  },
];
