import { copyText } from "../hooks";
import { DISCORD_URL, SERVER_IP } from "../data";
import { useReveal } from "../hooks";
import { IconCopy, IconDiscord, LogoMark } from "./icons";

const PAYMENTS = [
  { label: "UPI", glyph: "◈" },
  { label: "GPay", glyph: "G" },
  { label: "Paytm", glyph: "P" },
  { label: "PhonePe", glyph: "Pe" },
  { label: "Crypto", glyph: "₿" },
];

export default function Footer({ onToast }: { onToast: (m: string) => void }) {
  const cta = useReveal<HTMLDivElement>();

  const copyIp = async () => {
    const ok = await copyText(SERVER_IP);
    onToast(ok ? `${SERVER_IP} copied — see you in game` : SERVER_IP);
  };

  return (
    <footer className="relative overflow-hidden border-t border-edge">
      {/* CTA band */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, rgba(47,214,255,0.09), transparent 60%), radial-gradient(700px 420px at 85% 100%, rgba(155,107,255,0.09), transparent 60%)",
        }}
        aria-hidden
      />
      <div ref={cta} className="reveal relative mx-auto max-w-[1340px] px-5 pb-16 pt-24 text-center md:px-8 md:pt-32">
        <p className="kicker justify-center" style={{ display: "inline-flex" }}>
          Ready When You Are
        </p>
        <h2 className="h-display mx-auto mt-5 max-w-[20ch] text-[clamp(2.1rem,5.4vw,4.2rem)] text-ink">
          YOUR WORLD. <span className="outline-word">OUR SILICON.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[58ch] text-[15px] leading-relaxed text-dim">
          Sixty seconds from UPI payment to a live server on the fastest Ryzen silicon in India.
          Bring the friends — we'll bring the TPS.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button onClick={copyIp} className="btn btn-cyan">
            <IconCopy className="h-4 w-4" />
            {SERVER_IP}
          </button>
          <a className="btn btn-ghost" href={DISCORD_URL} target="_blank" rel="noreferrer">
            <IconDiscord className="h-4 w-4 text-[#5865F2]" />
            discord.gg/4jM9mqvtnZ
          </a>
        </div>
      </div>

      {/* footer body */}
      <div className="relative border-t border-edge bg-abyss/70">
        <div className="mx-auto grid max-w-[1340px] gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:px-8">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="h-display text-[17px] tracking-[0.08em] text-ink">
                FLUX<span style={{ color: "var(--color-flux-cyan)" }}>HOST</span>
              </span>
            </a>
            <p className="mt-4 max-w-[38ch] text-[13.5px] leading-relaxed text-dim">
              India's premier Minecraft server hosting — bare-metal AMD EPYC &amp; Ryzen 9 nodes in
              Mumbai and Bangalore, watched over by an AI agent on MCP.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {PAYMENTS.map((p) => (
                <span key={p.label} className="pay-chip">
                  <span className="font-bold text-flux-cyan">{p.glyph}</span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.28em] text-faint uppercase">Network</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                ["Hosting plans", "#plans"],
                ["Features", "#features"],
                ["World types", "#worlds"],
                ["Reviews", "#reviews"],
                ["MCP AI agent", "#mcp"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-[13.5px] text-dim transition-colors hover:text-flux-cyan">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.28em] text-faint uppercase">Support</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13.5px] text-dim transition-colors hover:text-flux-cyan"
                >
                  Discord — 24/7
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13.5px] text-dim transition-colors hover:text-flux-cyan"
                >
                  Open a ticket
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13.5px] text-dim transition-colors hover:text-flux-cyan"
                >
                  Node status
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13.5px] text-dim transition-colors hover:text-flux-cyan"
                >
                  Refund policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.28em] text-faint uppercase">Server</h4>
            <button
              onClick={copyIp}
              className="group mt-4 flex w-full items-center justify-between gap-3 rounded-lg border border-edge bg-panel px-4 py-3.5 transition-colors hover:border-flux-cyan/60"
            >
              <span className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-flux-green)", boxShadow: "0 0 8px var(--color-flux-green)" }} />
                <span className="font-mono text-[13px] text-ink">{SERVER_IP}</span>
              </span>
              <IconCopy className="h-4 w-4 text-faint transition-colors group-hover:text-flux-cyan" />
            </button>
            <p className="mt-3 font-mono text-[10.5px] leading-relaxed tracking-[0.08em] text-faint">
              JAVA 1.21+ · BEDROCK CROSS-PLAY
              <br />
              ONLINE 24/7 · 99.9% SLA
            </p>
          </div>
        </div>

        <div className="border-t border-edge">
          <div className="mx-auto flex max-w-[1340px] flex-wrap items-center justify-between gap-3 px-5 py-6 md:px-8">
            <p className="font-mono text-[11px] tracking-[0.1em] text-faint">
              © 2026 FLUX HOST · Crafted for builders in India
            </p>
            <p className="font-mono text-[10.5px] tracking-[0.08em] text-faint">
              Not affiliated with Mojang Studios or Microsoft.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
