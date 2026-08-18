import { useEffect } from "react";
import { Footer, Hotbar, ToastView, TopBar, XPBar } from "./components/Chrome";
import HeroWorld from "./components/HeroWorld";
import { ServerChat, StatsSlab, TheBuild, TheEyes } from "./components/Sections";
import { Biomes, Realms } from "./components/PlansWorlds";
import { useToast } from "./hooks";

export default function App() {
  const { toast, show } = useToast();

  /* scroll parallax for [data-plx] imagery */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-plx]"));
    if (!els.length) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      for (const el of els) {
        const s = parseFloat(el.dataset.plx || "0.1");
        const r = el.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -s;
        el.style.transform = `scale(1.12) translateY(${off.toFixed(1)}px)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-void text-ink">
      <TopBar onToast={show} />
      <XPBar />

      <main>
        <HeroWorld onToast={show} />
        <TheBuild />
        <TheEyes />
        <StatsSlab />
        <Realms onToast={show} />
        <Biomes />
        <ServerChat />
      </main>

      <Footer onToast={show} />
      <Hotbar onToast={show} />

      <div className="noise" aria-hidden />
      {toast && <ToastView id={toast.id} msg={toast.msg} />}
    </div>
  );
}
