import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import OutfitLab from "./components/OutfitLab";
import CharacterSheet from "./components/CharacterSheet";
import Crew from "./components/Crew";
import Collectibles from "./components/Collectibles";
import Collection from "./components/Collection";
import Universe from "./components/Universe";
import IconicPoster from "./components/IconicPoster";
import AbstractAsset from "./components/AbstractAsset";
import BrandBanner from "./components/BrandBanner";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <OutfitLab />
        <CharacterSheet />
        <Crew />
        <Collectibles />
        <Collection />
        <AbstractAsset />
        <IconicPoster />
        <Universe />
        <BrandBanner />
        <About />
      </main>
      <Footer />
    </>
  );
}
