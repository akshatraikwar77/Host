import { useEffect, useState } from "react";
import { MCP_LINES, TESTIMONIALS } from "../data";
import { useCountUp, useReveal } from "../hooks";
import { IconAi, IconBolt, IconChip, IconDrive, IconPin, IconPulse, IconScan, IconShieldWave, IconStar } from "./icons";
import { IconHeart } from "./Chrome";

/* ================= 01 · THE BUILD (features) ================= */

function ForgeCard({
  span,
  color,
  icon,
  title,
  body,
  delay,
  children,
}: {
  span: string;
  color: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  delay: number;
  children?: React.ReactNode;
}) {
  return (
    <div className={`bevel forge-card rv ${span}`} style={{ "--i": delay } as React.CSSProperties}>
      <div
        className="ficon"
        style={{
          color,
          background: `color-mix(in srgb, ${color} 12%, #0b1a12)`,
        }}
      >
        {icon}
      </div>
      <h3 className="h-anton text-[19px] tracking-[0.03em] text-ink">{title}</h3>
      <p className="mt-2.5 text-[13.5px] leading-relaxed text-dim">{body}</p>
      {children}
    </div>
  );
}

export function TheBuild() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  const uptime = useCountUp(99.982, 3, 1800);
  const players = useCountUp(18400, 0, 1800);

  return (
    <section id="build" className="relative mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
      <div ref={head} className="reveal mb-14 flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="kick">01 — The Build</p>
          <h2 className="h-anton mt-5 text-[clamp(2.4rem,6vw,4.6rem)] text-ink">
            FORGED FOR
            <br />
            <span style={{ color: "var(--color-emerald)" }}>TWENTY TPS.</span>
          </h2>
        </div>
        <p className="max-w-[46ch] text-[14px] leading-relaxed text-dim">
          Every node is bare metal — no oversold VPS slices, no noisy neighbours. Just silicon,
          cooling and an obsessive uptime record.
        </p>
      </div>

      <div ref={grid} className="forge-grid reveal-group">
        <div className="bevel forge-card fspan-4 rv" style={{ "--i": 0 } as React.CSSProperties}>
          <img className="forge-img" src="images/chip-macro.jpg" alt="" loading="lazy" aria-hidden />
          <div className="ficon" style={{ color: "var(--color-emerald)", background: "color-mix(in srgb, var(--color-emerald) 12%, #0b1a12)" }}>
            <IconChip className="h-6 w-6" />
          </div>
          <h3 className="h-anton text-[19px] tracking-[0.03em] text-ink">AMD EPYC &amp; RYZEN 9 PROCESSORS</h3>
          <p className="mt-2.5 max-w-[44ch] text-[13.5px] leading-relaxed text-dim">
            EPYC 7543 server chips for headroom, Ryzen 9 5900X and 9950X for raw single-thread TPS.
            Minecraft lives on one core — we give it the fastest ones on Earth.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["5.7 GHz BOOST", "ZEN 5", "DDR5 ECC", "16C / 32T"].map((c) => (
              <span key={c} className="pix rounded border-2 border-[#04110b] bg-[#08130d] px-2.5 py-1.5 text-[8.5px] text-dim">
                {c}
              </span>
            ))}
          </div>
        </div>

        <ForgeCard
          span="fspan-2"
          color="var(--color-redstone)"
          delay={1}
          icon={<IconPulse className="h-6 w-6" />}
          title="99.9% UPTIME"
          body="Redundant power, dual uplinks and a live status page. Ten hearts, never half a one."
        >
          <div className="mt-5 flex items-center gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <IconHeart key={i} className="heart h-5 w-5" dim={i === 9} />
            ))}
            <span className="ml-3 font-mono text-[15px] font-bold text-ink">
              <span ref={uptime.ref}>{uptime.display}%</span>
            </span>
          </div>
        </ForgeCard>

        <ForgeCard
          span="fspan-2"
          color="var(--color-diamond)"
          delay={2}
          icon={<IconShieldWave className="h-6 w-6" />}
          title="CREEPER-PROOF WALLS"
          body="3.2 Tbps always-on DDoS scrubbing with Minecraft-aware fingerprinting. Attacks hiss at the edge, never at your spawn."
        />

        <ForgeCard
          span="fspan-2"
          color="var(--color-amber)"
          delay={3}
          icon={<IconScan className="h-6 w-6" />}
          title="WARDEN-GRADE SCANS"
          body="Every jar, plugin and world file is hashed and swept on upload, then re-scanned hourly. Threats get quarantined before they load."
        />

        <ForgeCard
          span="fspan-2"
          color="var(--color-emerald)"
          delay={4}
          icon={<IconAi className="h-6 w-6" />}
          title="MCP AI AGENT"
          body="A Model-Context-Protocol agent wired into your panel — security sweeps, TPS tuning and support replies on autopilot."
        >
          <a
            href="#eyes"
            className="pix mt-5 inline-flex items-center gap-2 text-[9px] text-emerald transition-all hover:gap-4"
          >
            MEET THE AGENT <span aria-hidden>▶</span>
          </a>
        </ForgeCard>

        <ForgeCard
          span="fspan-3"
          color="var(--color-gold)"
          delay={5}
          icon={<IconBolt className="h-6 w-6" />}
          title="SPAWN IN 60 SECONDS"
          body="Pay over UPI, pick a version, and the panel provisions your node, downloads the build and boots the world before your chai gets cold."
        >
          <div className="mt-6 flex items-center gap-2">
            {[40, 72, 100].map((w, i) => (
              <div key={i} className="h-2 flex-1 overflow-hidden rounded-sm border border-[#04110b] bg-[#08130d]">
                <div
                  className="h-full"
                  style={{
                    width: `${w}%`,
                    background: i === 2 ? "linear-gradient(90deg, var(--color-emerald), var(--color-xp))" : "var(--color-edge2)",
                  }}
                />
              </div>
            ))}
            <span className="pix ml-2 text-[8.5px] text-faint">60S AVG</span>
          </div>
        </ForgeCard>

        <ForgeCard
          span="fspan-3"
          color="var(--color-diamond)"
          delay={6}
          icon={<IconPin className="h-6 w-6" />}
          title="MUMBAI <9MS · BLR <14MS"
          body="7 GB/s NVMe Gen4 for chunk-heavy worlds, hosted in Mumbai and Bangalore. Most Indian players see single-digit ping."
        >
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-dim">
              <span className="contents" style={{ color: "var(--color-diamond)" }}>
                <IconDrive className="h-4 w-4" />
              </span>{" "}
              NVMe GEN4
            </span>
            <span className="font-mono text-[11px] tracking-[0.12em] text-faint">
              <span className="text-ink">
                <span ref={players.ref}>{players.display}</span>+
              </span>{" "}
              PLAYERS HOSTED
            </span>
          </div>
        </ForgeCard>
      </div>
    </section>
  );
}

/* ================= 02 · THE EYES (MCP agent) ================= */

const STEPS = [
  { n: "01", t: "CONNECT", b: "The agent joins your panel through MCP — the Model Context Protocol — with live read on console, plugins, timings and backups." },
  { n: "02", t: "SWEEP", b: "Every upload is checked against exploit signatures and heuristics. Suspicious jars are quarantined instantly, with a Discord ping explaining why." },
  { n: "03", t: "TUNE", b: "TPS dipping at 3 AM? It pre-generates chunks, trims view distance and rolls back bad configs before a single player notices." },
  { n: "04", t: "REPORT", b: "Median reply time: 42 seconds. The agent answers tickets with your actual server context — not a canned macro." },
];

export function TheEyes() {
  const head = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>();
  const [pos, setPos] = useState({ li: 0, ch: 0 });

  useEffect(() => {
    let t: number;
    if (pos.li >= MCP_LINES.length) {
      t = window.setTimeout(() => setPos({ li: 0, ch: 0 }), 3600);
      return () => window.clearTimeout(t);
    }
    const line = MCP_LINES[pos.li];
    const typing = pos.ch < line.text.length;
    t = window.setTimeout(
      () => {
        if (typing) setPos((p) => ({ ...p, ch: p.ch + (line.t === "cmd" ? 2 : 3) }));
        else setPos((p) => ({ li: p.li + 1, ch: 0 }));
      },
      typing ? (line.t === "cmd" ? 40 : 13) : 340
    );
    return () => window.clearTimeout(t);
  }, [pos]);

  const tone = (t: string) =>
    t === "cmd" ? "var(--color-emerald)" : t === "ok" ? "var(--color-xp)" : t === "warn" ? "var(--color-gold)" : "var(--color-dim)";
  const glyph = (t: string) => (t === "cmd" ? "$ " : t === "ok" ? "✓ " : t === "warn" ? "! " : "· ");

  return (
    <section id="eyes" className="relative border-y-2 border-[#04110b] bg-abyss">
      <img
        src="images/ai-core.jpg"
        alt=""
        loading="lazy"
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-1/2 w-[min(640px,54vw)] -translate-y-1/2 opacity-15"
        style={{ maskImage: "radial-gradient(closest-side, #000 30%, transparent 76%)", WebkitMaskImage: "radial-gradient(closest-side, #000 30%, transparent 76%)" }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
        <div ref={head} className="reveal mb-14">
          <p className="kick" style={{ color: "var(--color-xp)" }}>02 — The Eyes</p>
          <h2 className="h-anton mt-5 max-w-[22ch] text-[clamp(2.4rem,6vw,4.6rem)] text-ink">
            AN AGENT THAT <span style={{ color: "var(--color-xp)" }}>NEVER LOGS OFF.</span>
          </h2>
        </div>

        <div ref={body} className="reveal-group grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="rv lg:sticky lg:top-28" style={{ "--i": 0 } as React.CSSProperties}>
            <div className="console">
              <div className="console-bar">
                <span className="h-3 w-3 rounded-sm" style={{ background: "var(--color-redstone)" }} />
                <span className="h-3 w-3 rounded-sm" style={{ background: "var(--color-amber)" }} />
                <span className="h-3 w-3 rounded-sm" style={{ background: "var(--color-emerald)" }} />
                <span className="pix ml-3 text-[8.5px] text-faint">FLUX-MCP — AGENT@MUMBAI-01</span>
                <span
                  className="pix ml-auto rounded border px-2 py-1 text-[8px]"
                  style={{ borderColor: "rgba(56,224,123,0.45)", color: "var(--color-emerald)", background: "rgba(56,224,123,0.08)" }}
                >
                  ● LIVE
                </span>
              </div>
              <div className="console-body">
                {MCP_LINES.slice(0, Math.min(pos.li + 1, MCP_LINES.length)).map((line, i) => {
                  const isCurrent = i === pos.li && pos.li < MCP_LINES.length;
                  const text = isCurrent ? line.text.slice(0, pos.ch) : line.text;
                  return (
                    <p key={i} style={{ color: tone(line.t) }}>
                      <span style={{ opacity: 0.75 }}>{glyph(line.t)}</span>
                      {text}
                      {isCurrent && <span className="term-cursor" />}
                    </p>
                  );
                })}
                {pos.li >= MCP_LINES.length && (
                  <p style={{ color: "var(--color-emerald)" }}>
                    $ <span className="term-cursor" />
                  </p>
                )}
              </div>
            </div>
            <p className="pix mt-4 text-[8.5px] text-faint">REPLAY · REAL AGENT SESSION · NODE MUMBAI-01</p>
          </div>

          <div>
            <p className="rv text-[15px] leading-relaxed text-dim" style={{ "--i": 1 } as React.CSSProperties}>
              MCP gives the FLUX agent a live, read-and-act connection to your server. Not a
              chatbot — <b className="text-ink">an operator</b> with root-adjacent instincts and
              zero sleep schedule.
            </p>
            <div className="mt-8 flex flex-col">
              {STEPS.map((s, i) => (
                <div key={s.n} className="step-row rv flex gap-6 border-b-2 border-edge py-6" style={{ "--i": i + 2 } as React.CSSProperties}>
                  <span className="step-num w-[74px] flex-none">{s.n}</span>
                  <div>
                    <h3 className="pix text-[11px] text-emerald">{s.t}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-dim">{s.b}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rv mt-9 flex items-center gap-3" style={{ "--i": 6 } as React.CSSProperties}>
              {["YOUR SERVER", "MCP BRIDGE", "FLUX AGENT"].map((n, i) => (
                <div key={n} className="flex flex-1 items-center gap-3">
                  <span
                    className="pix whitespace-nowrap rounded border-2 border-[#04110b] bg-[#08130d] px-3 py-2.5 text-[8px] text-dim"
                    style={i === 2 ? { color: "var(--color-emerald)", borderColor: "rgba(56,224,123,0.5)" } : undefined}
                  >
                    {n}
                  </span>
                  {i < 2 && <span className="flow-line" aria-hidden />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STATS SLAB ================= */

function Stat({ to, decimals = 0, suffix, label, delay }: { to: number; decimals?: number; suffix: string; label: string; delay: number }) {
  const c = useCountUp(to, decimals, 1600);
  return (
    <div className="rv flex flex-col items-center gap-2.5 py-2 text-center" style={{ "--i": delay } as React.CSSProperties}>
      <p className="h-anton text-[clamp(2rem,4vw,3.4rem)] leading-none text-ink">
        <span ref={c.ref}>{c.display}</span>
        <span style={{ color: "var(--color-xp)" }}>{suffix}</span>
      </p>
      <p className="pix text-[8.5px] text-dim">{label}</p>
    </div>
  );
}

export function StatsSlab() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="stat-band">
      <img src="images/server-rack.jpg" alt="" data-plx="0.14" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,16,13,0.94), rgba(7,16,13,0.7) 40%, rgba(7,16,13,0.7) 60%, rgba(7,16,13,0.94)), linear-gradient(180deg, rgba(7,16,13,0.88), transparent 30%, transparent 70%, rgba(7,16,13,0.88))",
        }}
        aria-hidden
      />
      <div ref={ref} className="reveal-group relative mx-auto grid max-w-[1240px] grid-cols-2 gap-y-10 px-5 py-16 md:px-8 lg:grid-cols-4">
        <Stat to={1.2} decimals={1} suffix="M+" label="DDoS ATTACKS ABSORBED" delay={0} />
        <Stat to={18400} suffix="+" label="PLAYERS HOSTED NIGHTLY" delay={1} />
        <Stat to={42} suffix="S" label="MEDIAN AGENT REPLY" delay={2} />
        <Stat to={60} suffix="S" label="AVERAGE PROVISIONING" delay={3} />
      </div>
    </div>
  );
}

/* ================= 04 · SERVER CHAT (reviews) ================= */

const STAMPS = ["21:47", "22:03", "22:31", "23:12", "23:58"];

export function ServerChat() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="chat" className="relative mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
      <div ref={head} className="reveal mb-14">
        <p className="kick" style={{ color: "var(--color-diamond)" }}>04 — Server Chat</p>
        <h2 className="h-anton mt-5 text-[clamp(2.4rem,6vw,4.6rem)] text-ink">
          DON'T TAKE <span style={{ color: "var(--color-diamond)" }}>OUR WORD FOR IT.</span>
        </h2>
      </div>

      <div ref={grid} className="reveal-group grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="chatbox rv" style={{ "--i": 0 } as React.CSSProperties}>
          <div className="flex items-center justify-between border-b border-edge pb-3">
            <span className="pix text-[8.5px] text-faint">#FLUX-REVIEWS · LIVE</span>
            <span className="pix text-[8.5px]" style={{ color: "var(--color-emerald)" }}>620+ MESSAGES</span>
          </div>
          <div className="mt-2">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="chat-line" style={{ "--hc": t.hue } as React.CSSProperties}>
                <span className="stamp">[{STAMPS[i % STAMPS.length]}]</span>
                <span className="font-semibold" style={{ color: t.hue }}>
                  &lt;{t.name.split(" ")[0]}&gt;
                </span>{" "}
                {t.quote}
                <span className="mt-1 block pl-[70px] font-mono text-[10.5px] tracking-[0.1em] text-faint uppercase">
                  {t.server} · {t.meta}
                </span>
              </div>
            ))}
            <p className="px-2.5 pt-2 font-mono text-[13px] text-faint">
              &lt;Server&gt; <span className="term-cursor" />
            </p>
          </div>
        </div>

        <div className="rv flex flex-col gap-6" style={{ "--i": 1 } as React.CSSProperties}>
          <div className="bevel p-7 text-center">
            <p className="h-anton text-[64px] leading-none text-ink">
              4.9<span className="text-[28px]" style={{ color: "var(--color-gold)" }}>/5</span>
            </p>
            <div className="mt-3 flex justify-center gap-1.5" style={{ color: "var(--color-gold)" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-5 w-5" />
              ))}
            </div>
            <p className="pix mt-3 text-[8.5px] text-dim">ACROSS 620+ DISCORD REVIEWS</p>
          </div>
          <div className="bevel p-7">
            {[
              ["5★", 92],
              ["4★", 6],
              ["3★", 1.4],
              ["2★", 0.4],
              ["1★", 0.2],
            ].map(([label, w], i) => (
              <div key={String(label)} className="mb-3 flex items-center gap-3 last:mb-0">
                <span className="pix w-8 text-[9px] text-dim">{label}</span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-sm border border-[#04110b] bg-[#08130d]">
                  <div
                    className="h-full"
                    style={{
                      width: `${w}%`,
                      background: i === 0 ? "linear-gradient(90deg, var(--color-emerald), var(--color-xp))" : "var(--color-edge2)",
                      transition: "width 1s ease",
                    }}
                  />
                </div>
                <span className="w-10 text-right font-mono text-[10.5px] text-faint">{w}%</span>
              </div>
            ))}
            <p className="pix mt-5 text-[8.5px] text-faint">VERIFIED · DISCORD TICKET EXPORTS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
