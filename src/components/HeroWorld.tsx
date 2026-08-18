import { DISCORD_URL, SERVER_IP } from "../data";
import { copyText, useCountUp, useReveal } from "../hooks";
import { GrassIcon } from "./Chrome";
import { IconCopy, IconDiscord } from "./icons";

const EMBERS = [
  { left: "6%", t: "9s", dl: "0s", dx: "30px" },
  { left: "14%", t: "12s", dl: "2.4s", dx: "-24px" },
  { left: "24%", t: "10s", dl: "4.1s", dx: "18px" },
  { left: "37%", t: "13s", dl: "1.2s", dx: "-30px" },
  { left: "48%", t: "9.5s", dl: "5.3s", dx: "22px" },
  { left: "58%", t: "11.5s", dl: "0.8s", dx: "-18px" },
  { left: "67%", t: "10.5s", dl: "3.2s", dx: "34px" },
  { left: "76%", t: "12.5s", dl: "6s", dx: "-26px" },
  { left: "85%", t: "9.8s", dl: "1.9s", dx: "20px" },
  { left: "93%", t: "11s", dl: "4.6s", dx: "-20px" },
];

const MOTD: [string, string][][] = [
  [
    ["mc-white", "FLUX HOST SMP"],
    ["mc-dim", " — "],
    ["mc-gold", SERVER_IP],
    ["mc-dim", " · "],
    ["mc-aqua", "AMD EPYC + Ryzen 9 9950X"],
    ["mc-dim", " · "],
    ["mc-green", "99.9% uptime"],
    ["mc-dim", " · "],
    ["mc-red", "anti-DDoS armed"],
    ["mc-dim", " · "],
    ["mc-amber", "UPI · GPay · Paytm · PhonePe · Crypto"],
    ["mc-dim", " · "],
    ["mc-green", "MCP agent on watch"],
    ["mc-dim", " · "],
    ["mc-gold", "FLUXLAUNCH = 15% OFF"],
    ["mc-dim", " · "],
    ["mc-aqua", "Delhi + Noida DCs"],
    ["mc-dim", " · "],
  ],
];

export default function HeroWorld({ onToast }: { onToast: (m: string) => void }) {
  const title = useReveal<HTMLDivElement>(0.2);
  const online = useCountUp(1284, 0, 2200);

  const copyIp = async () => {
    const ok = await copyText(SERVER_IP);
    onToast(ok ? `${SERVER_IP} copied — see you in game` : SERVER_IP);
  };

  return (
    <>
      <section id="forge" className="hero">
        <div className="hero-img" style={{ backgroundImage: "url(images/mc-smp.jpg)" }} aria-hidden />
        <div className="hero-scrim" aria-hidden />
        {EMBERS.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={{ left: e.left, "--t": e.t, "--dl": e.dl, "--dx": e.dx } as React.CSSProperties}
            aria-hidden
          />
        ))}

        <div ref={title} className="relative z-10 grid w-full max-w-[1240px] items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* left: headline */}
          <div>
            <p className="kick">Survival · SMP · Lifesteal · Creative</p>
            <h1 className="h-anton mt-6 text-[clamp(3rem,8.6vw,6.8rem)] text-ink">
              <span className="mask-line">
                <span style={{ "--d": "0.05s" } as React.CSSProperties}>YOUR WORLD,</span>
              </span>
              <span className="mask-line">
                <span style={{ "--d": "0.18s" } as React.CSSProperties}>BUILT ON</span>
              </span>
              <span className="mask-line">
                <span
                  style={{ "--d": "0.31s", color: "var(--color-emerald)", textShadow: "0 0 44px rgba(56,224,123,0.4)" } as React.CSSProperties}
                >
                  REAL SILICON.
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-dim">
              FLUX HOST runs India's fastest Minecraft nodes — AMD EPYC &amp; Ryzen&nbsp;9&nbsp;9950X bare metal,
              NVMe Gen4, 3.2&nbsp;Tbps anti-DDoS and an AI agent on MCP that never logs off.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={copyIp} className="btn-block btn-emerald">
                <IconCopy className="h-4 w-4" />
                {SERVER_IP}
              </button>
              <a className="btn-block btn-amberline" href={DISCORD_URL} target="_blank" rel="noreferrer">
                <IconDiscord className="h-4 w-4" />
                JOIN DISCORD
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
              <span>v1.21+ · cross-play</span>
              <span style={{ color: "var(--color-edge2)" }}>|</span>
              <span>Delhi · Noida DCs</span>
              <span style={{ color: "var(--color-edge2)" }}>|</span>
              <span>instant setup</span>
            </div>
          </div>

          {/* right: server-list card */}
          <div className="server-card p-5">
            <div className="flex items-center justify-between border-b border-edge pb-3">
              <span className="pix text-[9px] text-faint">MULTIPLAYER — SERVER LIST</span>
              <span className="pix text-[9px]" style={{ color: "var(--color-gold)" }}>★ INDIA #1</span>
            </div>
            <div className="mt-4 flex gap-4">
              <GrassIcon className="h-14 w-14 flex-none" />
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate font-semibold text-[15px] text-ink">FLUX HOST SMP</p>
                  <span className="ping" aria-label="Excellent connection">
                    {[7, 10, 12, 15, 17].map((h, i) => (
                      <i key={i} style={{ height: h, animationDelay: `${i * 0.12}s` }} />
                    ))}
                  </span>
                </div>
                <p className="mt-1.5 truncate font-mono text-[12px]">
                  <span className="mc-gold">◆ India's premier hosting</span>
                </p>
                <p className="truncate font-mono text-[12px]">
                  <span className="mc-aqua">AMD EPYC</span>
                  <span className="mc-dim"> · </span>
                  <span className="mc-green">20 TPS always</span>
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-md border-2 border-[#04110b] bg-[#08130d] px-4 py-3">
              <span className="flex items-center gap-2.5 font-mono text-[12.5px] text-dim">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full rounded-full" style={{ background: "var(--color-emerald)", animation: "kf-pulse 1.8s ease-out infinite" }} />
                  <span className="relative h-2 w-2 rounded-full" style={{ background: "var(--color-emerald)" }} />
                </span>
                <b className="text-ink">
                  <span ref={online.ref}>{Number(online.display).toLocaleString("en-IN")}</span>
                </b>
                / 5,000 online
              </span>
              <span className="pix text-[8.5px] text-faint">99.9% SLA</span>
            </div>
            <button onClick={copyIp} className="btn-block btn-emerald mt-4 w-full justify-center">
              JOIN — COPY IP
            </button>
          </div>
        </div>

        <div className="cue" aria-hidden>
          <span className="pix text-[9px]">SCROLL TO EXPLORE</span>
          <span className="text-[13px]" style={{ color: "var(--color-emerald)" }}>▼</span>
        </div>
      </section>

      {/* MOTD ticker */}
      <div className="motd" aria-hidden>
        <div className="motd-track">
          {[0, 1].map((k) => (
            <div key={k} className="flex">
              {MOTD[0].map(([cls, text], i) => (
                <span className="motd-item" key={`${k}-${i}`}>
                  <span className={cls}>{text}</span>
                  <span className="sep">▮</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
