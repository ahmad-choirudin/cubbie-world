import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import CharacterSheet from "./components/CharacterSheet";
import Crew from "./components/Crew";
import Collectibles from "./components/Collectibles";
import Universe from "./components/Universe";
import IconicPoster from "./components/IconicPoster";
import AbstractAsset from "./components/AbstractAsset";
import BrandBanner from "./components/BrandBanner";
import CubbieStory from "./components/CubbieStory";
import About from "./components/About";
import Footer from "./components/Footer";

// Section headers and blocks that fade in on scroll, in addition to the
// elements that already carry the `rv` class. Kept here so no component needs editing.
const revealTargets = [
  "#sheet > :not(:last-child)",
  "#sheet > div:last-child > *",
  "#crew > div:first-child",
  "#collectibles > div:first-child > *",
  "#collectibles > div:nth-child(2)",
  "#poster > div > :not(.rv)",
  "#universe > div > div:first-child",
  "#cubbie-story > p",
  "#cubbie-story > h2",
  "#brand > div:last-child > div",
  "#story > p",
  "#story > div:nth-child(2)",
  "#story > div:last-child",
];

export default function App() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Tag extra targets before first paint so they never flash visible.
    revealTargets.forEach((sel) =>
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (!el.parentElement?.closest(".rv")) el.classList.add("rv");
      })
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            const el = e.target as HTMLElement;
            // Items that enter together appear one after another.
            if (!reduce && i > 0) {
              el.style.transitionDelay = `${Math.min(i, 5) * 80}ms`;
              el.addEventListener(
                "transitionend",
                () => {
                  el.style.transitionDelay = "";
                },
                { once: true }
              );
            }
            el.classList.add("in");
            io.unobserve(el);
          });
      },
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
        <CharacterSheet />
        <Crew />
        <Collectibles />
        <AbstractAsset />
        <IconicPoster />
        <Universe />
        <CubbieStory />
        <BrandBanner />
        <About />
      </main>
      <Footer />
    </>
  );
}
