import { useEffect, useState } from "react";
import { copyText } from "../hooks";
import { DISCORD_URL, SERVER_IP } from "../data";
import { IconCopy, IconDiscord, IconPin } from "./icons";

/* ---------- pixel-flavoured icons ---------- */

export function GrassIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="7" fill="#7bd94a" />
      <rect x="3" y="8" width="18" height="2" fill="#4e9e2d" />
      <rect x="3" y="10" width="18" height="11" fill="#7a5230" />
      <rect x="6" y="13" width="2" height="2" fill="#5e3d22" />
      <rect x="13" y="16" width="2" height="2" fill="#5e3d22" />
      <rect x="17" y="12" width="2" height="2" fill="#5e3d22" />
      <rect x="9" y="18" width="2" height="2" fill="#5e3d22" />
      <rect x="3" y="3" width="18" height="18" fill="none" stroke="#04110b" strokeWidth="2" />
    </svg>
  );
}

export function IconPick({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="m4 20 9-9" />
      <path d="M7 5c4-2.4 9-1.6 12.5 2 1 .9 1.6 1.8 2 2.6-3.8-1.3-7.5-1.3-11 .3C7.6 8.3 7.2 6.6 7 5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconEye({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5 16.5 12 12 16.5 7.5 12 12 7.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconEmerald({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M8 3h8l4.5 5.5L12 21.5 3.5 8.5 8 3Z"
        fill="currentColor"
        stroke="#04110b"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8 3 12 8.5 16 3M3.5 8.5 12 8.5l8.5 0M12 8.5v13" stroke="rgba(255,255,255,0.5)" strokeWidth="1.1" fill="none" />
    </svg>
  );
}

export function IconHeart({ className, dim }: { className?: string; dim?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 20.5S4.8 16 2.6 11.7C1.2 8.9 2.7 5.5 6 5.5c2 0 3.6 1.1 4.6 2.6.4.6 1.4.6 1.8 0 1-1.5 2.6-2.6 4.6-2.6 3.3 0 4.8 3.4 3.4 6.2C19.2 16 12 20.5 12 20.5Z"
        fill={dim ? "#26413370" : "var(--color-redstone)"}
        stroke="#04110b"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconBook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z" />
      <path d="M5 17a3 3 0 0 1 3-3h11" />
    </svg>
  );
}

/* ---------- chrome ---------- */

export function TopBar({ onToast }: { onToast: (m: string) => void }) {
  const copyIp = async () => {
    const ok = await copyText(SERVER_IP);
    onToast(ok ? `${SERVER_IP} copied — see you in game` : SERVER_IP);
  };
  return (
    <>
    <div className="credit-bar" aria-label="Created by Akshat, directed by Huzaifa">
      <span className="cred-sep star">✦</span>
      <span>CREATED BY</span>
      <span className="cred-name cred-gold" title="Created by Akshat">
        {"AKSHAT".split("").map((ch, i) => (
          <span key={i} style={{ "--i": i, "--base": "250ms" } as React.CSSProperties}>
            {ch}
          </span>
        ))}
      </span>
      <span className="cred-sep dia">◆</span>
      <span>DIRECTED BY</span>
      <span className="cred-name cred-mint" title="Directed by Huzaifa">
        {"HUZAIFA".split("").map((ch, i) => (
          <span key={i} style={{ "--i": i, "--base": "700ms" } as React.CSSProperties}>
            {ch}
          </span>
        ))}
      </span>
      <span className="cred-sep star">✦</span>
    </div>
    <header className="topbar">
      <a href="#forge" className="flex items-center gap-3">
        <GrassIcon className="h-8 w-8" />
        <span className="h-anton text-[20px] tracking-[0.06em] text-ink">
          FLUX<span style={{ color: "var(--color-emerald)" }}>HOST</span>
        </span>
        <span className="pix mt-1 hidden text-[8.5px] text-faint md:inline">SMP · JAVA + BEDROCK</span>
      </a>
      <div className="flex items-center gap-3">
        <button
          onClick={copyIp}
          className="group flex items-center gap-2.5 rounded-md border-2 border-[#04110b] bg-[linear-gradient(180deg,#10251a,#0b1a12)] px-3.5 py-2.5 font-mono text-[12px] text-dim transition-all hover:text-ink"
          title="Copy server IP"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full rounded-full" style={{ background: "var(--color-emerald)", animation: "kf-pulse 1.8s ease-out infinite" }} />
            <span className="relative h-2 w-2 rounded-full" style={{ background: "var(--color-emerald)" }} />
          </span>
          <span className="hidden sm:inline">{SERVER_IP}</span>
          <span className="sm:hidden">IP</span>
          <IconCopy className="h-3.5 w-3.5 text-faint transition-colors group-hover:text-emerald" />
        </button>
        <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="btn-block btn-emerald px-3.5! py-2.5! text-[10px]">
          <IconDiscord className="h-4 w-4" />
          <span className="hidden sm:inline">DISCORD</span>
        </a>
      </div>
    </header>
    </>
  );
}

export function XPBar() {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="xpbar" aria-hidden>
      <div className="xp-fill" style={{ width: `${prog * 100}%` }} />
    </div>
  );
}

const NAV = [
  { id: "forge", label: "Spawn", icon: GrassIcon },
  { id: "build", label: "The Build", icon: IconPick },
  { id: "eyes", label: "Agent", icon: IconEye },
  { id: "realm", label: "Realms", icon: IconEmerald },
  { id: "biomes", label: "Biomes", icon: IconPin },
  { id: "chat", label: "Chat", icon: IconBook },
];

export function Hotbar({ onToast }: { onToast: (m: string) => void }) {
  const [active, setActive] = useState("forge");

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.42;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyIp = async () => {
    const ok = await copyText(SERVER_IP);
    onToast(ok ? `${SERVER_IP} copied` : SERVER_IP);
  };

  return (
    <nav className="hotbar" aria-label="Section hotbar">
      {NAV.map((n) => (
        <a key={n.id} href={`#${n.id}`} className={`slot ${active === n.id ? "active" : ""}`}>
          <n.icon className="h-5 w-5" />
          <span className="tip">{n.label}</span>
        </a>
      ))}
      <button className="slot" onClick={copyIp} aria-label="Copy server IP">
        <IconCopy className="h-5 w-5" />
        <span className="tip">Copy IP</span>
      </button>
      <a className="slot" href={DISCORD_URL} target="_blank" rel="noreferrer" aria-label="Discord">
        <IconDiscord className="h-5 w-5" />
        <span className="tip">Discord</span>
      </a>
    </nav>
  );
}

export function ToastView({ id, msg }: { id: number; msg: string }) {
  return (
    <div className="toast" key={id} role="status">
      <span style={{ color: "var(--color-emerald)" }}>✔</span>
      {msg}
    </div>
  );
}

/* ---------- footer ---------- */

const PAYMENTS = [
  { label: "UPI", g: "◈" },
  { label: "GPAY", g: "G" },
  { label: "PAYTM", g: "P" },
  { label: "PHONEPE", g: "Pe" },
  { label: "CRYPTO", g: "₿" },
];

export function Footer({ onToast }: { onToast: (m: string) => void }) {
  const copyIp = async () => {
    const ok = await copyText(SERVER_IP);
    onToast(ok ? `${SERVER_IP} copied — see you in game` : SERVER_IP);
  };

  return (
    <footer className="relative border-t-2 border-[#04110b]">
      {/* CTA slab */}
      <div className="relative overflow-hidden">
        <img
          src="images/hero-datacenter.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          aria-hidden
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--color-void), rgba(7,16,13,0.55), var(--color-void))" }} aria-hidden />
        <div className="relative mx-auto max-w-[1240px] px-5 py-20 text-center md:px-8 md:py-28">
          <p className="kick justify-center" style={{ display: "inline-flex" }}>READY WHEN YOU ARE</p>
          <h2 className="h-anton mx-auto mt-5 text-[clamp(2.6rem,7.4vw,5.6rem)] text-ink">
            SEE YOU <span style={{ color: "var(--color-emerald)", textShadow: "0 0 40px rgba(56,224,123,0.45)" }}>IN GAME.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-[15px] leading-relaxed text-dim">
            Sixty seconds from UPI payment to a live world on the fastest Ryzen silicon in India.
            Bring the friends — we'll hold the TPS.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button onClick={copyIp} className="btn-block btn-emerald">
              <IconCopy className="h-4 w-4" />
              {SERVER_IP}
            </button>
            <a className="btn-block btn-amberline" href={DISCORD_URL} target="_blank" rel="noreferrer">
              <IconDiscord className="h-4 w-4" />
              discord.gg/4jM9mqvtnZ
            </a>
          </div>
        </div>
      </div>

      {/* footer body */}
      <div className="border-t-2 border-[#04110b] bg-abyss">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:px-8">
          <div>
            <a href="#forge" className="flex items-center gap-3">
              <GrassIcon className="h-8 w-8" />
              <span className="h-anton text-[20px] text-ink">
                FLUX<span style={{ color: "var(--color-emerald)" }}>HOST</span>
              </span>
            </a>
            <p className="mt-4 max-w-[38ch] text-[13.5px] leading-relaxed text-dim">
              India's premier Minecraft server hosting — bare-metal AMD EPYC &amp; Ryzen 9 nodes in
              Mumbai and Bangalore, watched over by an AI agent on MCP.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {PAYMENTS.map((p) => (
                <span key={p.label} className="pay-chip">
                  <span style={{ color: "var(--color-gold)" }}>{p.g}</span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="pix text-[9.5px] text-faint">NAVIGATE</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                ["The Build", "#build"],
                ["The Agent", "#eyes"],
                ["Realms & pricing", "#realm"],
                ["Biomes we power", "#biomes"],
                ["Server chat", "#chat"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-[13.5px] text-dim transition-colors hover:text-emerald">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="pix text-[9.5px] text-faint">SUPPORT</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {["Discord — 24/7", "Open a ticket", "Node status", "Refund policy"].map((label) => (
                <li key={label}>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13.5px] text-dim transition-colors hover:text-emerald"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="pix text-[9.5px] text-faint">SERVER</h4>
            <button
              onClick={copyIp}
              className="bevel group mt-4 flex w-full items-center justify-between gap-3 px-4 py-3.5 transition-colors hover:border-edge2"
            >
              <span className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-emerald)", boxShadow: "0 0 8px var(--color-emerald)" }} />
                <span className="font-mono text-[13px] text-ink">{SERVER_IP}</span>
              </span>
              <IconCopy className="h-4 w-4 text-faint transition-colors group-hover:text-emerald" />
            </button>
            <p className="mt-3 font-mono text-[10.5px] leading-relaxed tracking-[0.08em] text-faint">
              JAVA 1.21+ · BEDROCK CROSS-PLAY
              <br />
              ONLINE 24/7 · 99.9% SLA
            </p>
          </div>
        </div>
        <div className="border-t border-edge">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-5 py-6 md:px-8">
            <p className="font-mono text-[11px] tracking-[0.1em] text-faint">
              © 2026 FLUX HOST · <span className="pix text-[8px]" style={{ color: "var(--color-gold)" }}>CREATED BY AKSHAT</span>
              <span className="mx-1.5" style={{ color: "var(--color-edge2)" }}>◆</span>
              <span className="pix text-[8px]" style={{ color: "var(--color-emerald)" }}>DIRECTED BY HUZAIFA</span>
            </p>
            <p className="font-mono text-[10.5px] tracking-[0.08em] text-faint">Not affiliated with Mojang Studios or Microsoft.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
