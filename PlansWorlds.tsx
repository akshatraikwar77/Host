import { useEffect, useRef, useState } from "react";
import { CASES, OFFER, SERIES } from "../data";
import type { Series, Tier } from "../data";
import { useReveal } from "../hooks";
import { IconCheck } from "./icons";
import OrderModal from "./OrderModal";

/* ================= 03 · REALMS (pricing + orders) ================= */

export function Realms({ onToast }: { onToast: (m: string) => void }) {
  const head = useReveal<HTMLDivElement>();
  const [si, setSi] = useState(1);
  const [order, setOrder] = useState<{ series: Series; tier: Tier } | null>(null);
  const series = SERIES[si];

  return (
    <section id="realm" className="relative mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
      {/* launch offer */}
      <div
        className="bevel mb-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-4"
        style={{ borderColor: "rgba(255,176,46,0.5)", background: "linear-gradient(180deg, rgba(255,176,46,0.1), rgba(255,176,46,0.03))" }}
      >
        <span className="pix text-[9px]" style={{ color: "var(--color-amber)" }}>
          🔥 LIMITED-TIME LAUNCH OFFER
        </span>
        <span className="font-mono text-[12.5px] text-dim">
          Use code{" "}
          <b className="rounded border border-[#04110b] bg-[#08130d] px-2 py-0.5 tracking-[0.1em]" style={{ color: "var(--color-gold)" }}>
            {OFFER.code}
          </b>{" "}
          for <b style={{ color: "var(--color-gold)" }}>{OFFER.pct}% OFF</b> your first month
        </span>
      </div>

      <div ref={head} className="reveal mb-10">
        <p className="kick" style={{ color: "var(--color-gold)" }}>03 — Realms &amp; Pricing</p>
        <h2 className="h-anton mt-5 text-[clamp(2.4rem,6vw,4.6rem)] text-ink">
          PICK YOUR <span style={{ color: "var(--color-gold)" }}>POWER LEVEL.</span>
        </h2>
      </div>

      {/* series tabs */}
      <div className="scrollbar-none -mx-1 mb-8 flex gap-3 overflow-x-auto px-1 pb-3">
        {SERIES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setSi(i)}
            className={`tab-slot ${i === si ? "active" : ""}`}
            style={{ "--tc": s.color } as React.CSSProperties}
          >
            <span className="h-2 w-2 rounded-sm" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
            {s.badge}
          </button>
        ))}
      </div>

      {/* series header */}
      <div key={`head-${series.id}`} className="bevel swap-in mb-6 p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <h3 className="h-anton text-[clamp(24px,3vw,34px)]" style={{ color: series.color }}>
              {series.name}
            </h3>
            <p className="mt-1.5 font-mono text-[12.5px] tracking-[0.05em] text-ink">{series.cpu}</p>
            <p className="mt-2.5 max-w-[64ch] text-[13.5px] leading-relaxed text-dim">{series.desc}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {series.bullets.map((b) => (
              <span
                key={b}
                className="pix flex items-center gap-2.5 rounded border-2 border-[#04110b] bg-[#08130d] px-3 py-2 text-[8px] text-dim"
              >
                <span style={{ color: series.color }}>┃</span>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {series.warn && (
        <div
          className="swap-in mb-6 flex items-start gap-3 rounded-md border-2 border-[#04110b] px-5 py-4"
          style={{ background: "rgba(255,176,46,0.07)" }}
        >
          <span className="text-[16px]" style={{ color: "var(--color-amber)" }}>⚠</span>
          <p className="font-mono text-[12px] leading-relaxed text-dim">
            <b style={{ color: "var(--color-amber)" }}>JUST SO YOU KNOW —</b> {series.warn}
          </p>
        </div>
      )}

      {/* tiers */}
      <div key={`${series.id}-tiers`} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {series.tiers.map((t, i) => (
          <div
            key={t.name}
            className={`bevel tier-slot swap-in ${t.popular ? "tier-hot glint" : ""}`}
            style={{ "--tc": series.color, animationDelay: `${i * 60}ms` } as React.CSSProperties}
          >
            {t.popular && (
              <span
                className="pix absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border-2 border-[#04110b] px-3 py-1.5 text-[7.5px]"
                style={{ background: "var(--color-amber)", color: "#1c1204", boxShadow: "0 4px 0 rgba(94,58,6,0.9)" }}
              >
                ★ {t.popTag || "MOST POPULAR"}
              </span>
            )}

            <div className="flex items-center justify-between gap-3">
              <h4 className="h-anton text-[20px] tracking-[0.03em] text-ink">{t.name}</h4>
              <span
                className="h-2.5 w-2.5 flex-none rounded-sm"
                style={{ background: series.color, boxShadow: `0 0 10px ${series.color}` }}
              />
            </div>

            <p className="mt-3 text-[30px] font-bold leading-none" style={{ color: "var(--color-gold)" }}>
              ₹{t.price.toLocaleString("en-IN")}
              <span className="pix ml-2 text-[8px] text-faint">/ MONTH</span>
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t-2 border-edge pt-5">
              {(
                [
                  ["RAM", t.ram],
                  ["CPU", t.vcores],
                  ["DISK", t.storage],
                  ["SLOTS", t.slots],
                ] as const
              ).map(([k, v]) => (
                <span key={k}>
                  <i className="lbl mb-1 block">{k}</i>
                  <b className="font-mono text-[12.5px] font-medium text-ink">{v}</b>
                </span>
              ))}
            </div>

            {t.jar && <p className="mt-4 font-mono text-[11px] tracking-[0.02em]" style={{ color: "var(--color-diamond)" }}>📦 {t.jar}</p>}
            {t.note && <p className="mt-1.5 font-mono text-[11px] tracking-[0.02em]" style={{ color: "var(--color-amber)" }}>▲ {t.note}</p>}

            <button onClick={() => setOrder({ series, tier: t })} className="btn-block btn-emerald mt-6 w-full justify-center text-[9.5px]">
              ORDER — ₹{t.price.toLocaleString("en-IN")}
            </button>
          </div>
        ))}
      </div>

      {/* includes */}
      <div className="bevel mt-10 px-6 py-5">
        <span className="pix text-[8.5px] text-faint">ALL {series.name} PLANS INCLUDE</span>
        <div className="mt-3.5 flex flex-wrap gap-x-7 gap-y-2.5">
          {series.includes.map((f) => (
            <span key={f} className="flex items-center gap-2 font-mono text-[12px] tracking-[0.03em] text-dim">
              <IconCheck className="h-3.5 w-3.5 text-emerald" /> {f}
            </span>
          ))}
        </div>
        <p className="mt-4 border-t border-edge pt-3.5 font-mono text-[11px] tracking-[0.05em] text-faint">
          💳 Payments: UPI / GPay / Paytm / PhonePe / Crypto · 📍 Servers located in India · 📩 Instant setup after payment
        </p>
      </div>

      {order && (
        <OrderModal series={order.series} tier={order.tier} onClose={() => setOrder(null)} onToast={onToast} />
      )}
    </section>
  );
}

/* ================= BIOMES (worlds gallery) ================= */

export function Biomes() {
  const head = useReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ down: false, x: 0, left: 0 });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const down = (e: PointerEvent) => {
      drag.current = { down: true, x: e.clientX, left: el.scrollLeft };
    };
    const move = (e: PointerEvent) => {
      if (!drag.current.down) return;
      el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
    };
    const up = () => {
      drag.current.down = false;
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.7, 640), behavior: "smooth" });
  };

  return (
    <section id="biomes" className="relative border-y-2 border-[#04110b] bg-abyss py-24 md:py-32">
      <div ref={head} className="reveal mx-auto mb-12 flex max-w-[1240px] flex-wrap items-end justify-between gap-6 px-5 md:px-8">
        <div>
          <p className="kick" style={{ color: "var(--color-amber)" }}>BIOMES WE POWER</p>
          <h2 className="h-anton mt-5 text-[clamp(2.4rem,6vw,4.6rem)] text-ink">
            EVERY WORLD <span style={{ color: "var(--color-amber)" }}>NEEDS A DIE.</span>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="pix text-[8.5px] text-faint">◀ DRAG ▶</span>
          <button onClick={() => nudge(-1)} className="slot" aria-label="Previous world">
            <span className="text-[16px]">◀</span>
          </button>
          <button onClick={() => nudge(1)} className="slot" aria-label="Next world">
            <span className="text-[16px]">▶</span>
          </button>
        </div>
      </div>

      <div ref={trackRef} className="worlds-track scrollbar-none">
        {CASES.map((c) => (
          <article key={c.title} className="world-card group">
            <img src={c.img} alt={`${c.title} world render`} loading="lazy" />
            <div className="shade" aria-hidden />
            <span
              className="pix absolute left-4 top-4 rounded border-2 border-[#04110b] px-2.5 py-1.5 text-[8px]"
              style={{ color: c.color, background: "rgba(7,16,13,0.72)", backdropFilter: "blur(4px)" }}
            >
              {c.tag}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="h-anton text-[clamp(26px,3vw,40px)] text-ink" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.7)" }}>
                {c.title}
              </h3>
              <p className="mt-2 max-w-[52ch] text-[13px] leading-relaxed text-dim">{c.desc}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                {c.stats.map(([v, k]) => (
                  <span key={k} className="pix text-[8.5px] text-faint">
                    <b className="mr-1.5 text-[10px]" style={{ color: c.color }}>
                      {v}
                    </b>
                    {k}
                  </span>
                ))}
                <a href="#realm" className="pix ml-auto text-[8.5px] transition-all hover:tracking-[0.22em]" style={{ color: c.color }}>
                  BEST ON · {c.series} ▶
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
