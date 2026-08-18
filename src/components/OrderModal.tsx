import { useEffect, useState } from "react";
import { DISCORD_URL, OFFER, WEBHOOK_URL } from "../data";
import type { Series, Tier } from "../data";
import { IconCheck } from "./icons";

type Props = {
  series: Series;
  tier: Tier;
  onClose: () => void;
  onToast: (m: string) => void;
};

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="lbl flex items-baseline justify-between">
        {label}
        {hint && <em className="normal-case tracking-normal text-faint">{hint}</em>}
      </span>
      {children}
      {error && <span className="err">✖ {error}</span>}
    </label>
  );
}

export default function OrderModal({ series, tier, onClose, onToast }: Props) {
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [ign, setIgn] = useState("");
  const [coupon, setCoupon] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const couponOk = coupon.trim().toUpperCase() === OFFER.code;
  const price = couponOk ? Math.round(tier.price * (1 - OFFER.pct / 100)) : tier.price;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      errs.email = "Enter a valid email (e.g. you@gmail.com)";
    if (!/^\d{17,20}$/.test(discord.trim()))
      errs.discord = "17–20 digits · Developer Mode → right-click profile → Copy User ID";
    if (!/^[A-Za-z0-9_]{3,16}$/.test(ign.trim()))
      errs.ign = "3–16 characters · letters, numbers, underscores";
    if (coupon.trim() && !couponOk) errs.coupon = `Invalid code — try ${OFFER.code}`;
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    const id = `FLX-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const payload = {
      username: "FLUX HOST — Orders",
      embeds: [
        {
          title: `New Order — ${tier.name}`,
          description: `**Order ID:** \`${id}\``,
          color: 0x38e07b,
          fields: [
            { name: "📦 Plan", value: `${series.badge} — **${tier.name}**`, inline: false },
            {
              name: "🧠 Specs",
              value: `${tier.ram} RAM · ${tier.vcores} · ${tier.storage} · ${tier.slots}`,
              inline: false,
            },
            {
              name: "💸 Price",
              value: couponOk
                ? `₹${price.toLocaleString("en-IN")}/mo *(₹${tier.price.toLocaleString("en-IN")} − ${OFFER.pct}% ${OFFER.code})*`
                : `₹${price.toLocaleString("en-IN")}/mo`,
              inline: true,
            },
            { name: "📧 Email", value: email.trim(), inline: true },
            { name: "🎮 Discord", value: `<@${discord.trim()}>`, inline: true },
            { name: "⛏️ Minecraft Name", value: `\`${ign.trim()}\``, inline: true },
          ],
          footer: { text: "FLUX HOST · play.fluxsmp.fun · UPI / GPay / Paytm / PhonePe / Crypto" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
      setOrderId(id);
      setStatus("ok");
      onToast(`Order ${id} sent — we'll DM you on Discord`);
    } catch {
      setStatus("fail");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Place order">
      <div className="bevel modal-panel" onClick={(e) => e.stopPropagation()}>
        {status === "ok" ? (
          <div className="py-6 text-center">
            <p className="pix text-[9px] text-faint">ORDER TRANSMITTED</p>
            <p className="mx-auto mt-5 grid h-16 w-16 place-items-center rounded-md border-2 border-[#04110b]" style={{ background: "rgba(56,224,123,0.12)" }}>
              <IconCheck className="h-8 w-8 text-emerald" />
            </p>
            <h3 className="h-anton mt-5 text-[28px] text-ink">ORDER {orderId}</h3>
            <p className="mx-auto mt-3 max-w-[40ch] text-[13.5px] leading-relaxed text-dim">
              Your order for <b className="text-ink">{tier.name}</b> landed in our Discord. We'll DM{" "}
              <b className="text-ink">&lt;@{discord.trim()}&gt;</b> with the UPI payment link — your
              server boots within ~60 seconds of payment.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a className="btn-block btn-emerald" href={DISCORD_URL} target="_blank" rel="noreferrer">
                OPEN DISCORD
              </a>
              <button className="btn-block btn-amberline" onClick={onClose}>
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="pix text-[8.5px]" style={{ color: series.color }}>
                  {series.badge}
                </p>
                <h3 className="h-anton mt-1.5 text-[26px] text-ink">{tier.name}</h3>
              </div>
              <button type="button" onClick={onClose} className="slot !h-9 !w-9 flex-none" aria-label="Close">
                <span className="text-[13px]">✕</span>
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 rounded-md border-2 border-[#04110b] bg-[#08130d] p-4 font-mono text-[11.5px] tracking-[0.03em] text-dim sm:grid-cols-4">
              <span>
                <i className="lbl mb-1 block">RAM</i>
                <b className="text-ink">{tier.ram}</b>
              </span>
              <span>
                <i className="lbl mb-1 block">CPU</i>
                <b className="text-ink">{tier.vcores}</b>
              </span>
              <span>
                <i className="lbl mb-1 block">DISK</i>
                <b className="text-ink">{tier.storage}</b>
              </span>
              <span>
                <i className="lbl mb-1 block">SLOTS</i>
                <b className="text-ink">{tier.slots}</b>
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-md border-2 border-[#04110b] bg-[#08130d] px-4 py-3">
              <span className="pix text-[8.5px] text-faint">TOTAL · FIRST MONTH</span>
              <span className="text-[22px] font-bold" style={{ color: "var(--color-gold)" }}>
                {couponOk && (
                  <s className="mr-2 text-[13px] font-normal text-faint">₹{tier.price.toLocaleString("en-IN")}</s>
                )}
                ₹{price.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <Field label="EMAIL (GMAIL)" error={errors.email}>
                <input
                  className={`inp ${errors.email ? "inp-err" : ""}`}
                  type="email"
                  placeholder="you@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
              </Field>
              <Field label="DISCORD ID" hint="numeric user ID" error={errors.discord}>
                <input
                  className={`inp ${errors.discord ? "inp-err" : ""}`}
                  inputMode="numeric"
                  placeholder="e.g. 213049281958248448"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                />
              </Field>
              <Field label="MINECRAFT NAME" error={errors.ign}>
                <input
                  className={`inp ${errors.ign ? "inp-err" : ""}`}
                  placeholder="Your in-game name"
                  maxLength={16}
                  value={ign}
                  onChange={(e) => setIgn(e.target.value)}
                />
              </Field>
              <Field label={`COUPON — ${OFFER.pct}% OFF FIRST MONTH`} hint="optional" error={errors.coupon}>
                <input
                  className={`inp ${errors.coupon ? "inp-err" : ""}`}
                  placeholder={OFFER.code}
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                {couponOk && (
                  <span className="pix mt-1.5 inline-block text-[8.5px]" style={{ color: "var(--color-xp)" }}>
                    ✓ {OFFER.code} APPLIED — ₹{(tier.price - price).toLocaleString("en-IN")} OFF
                  </span>
                )}
              </Field>
            </div>

            {status === "fail" && (
              <p className="err mt-4">✖ Couldn't reach Discord. Check your connection and try again — or order via the Discord server.</p>
            )}

            <button type="submit" className="btn-block btn-emerald mt-6 w-full justify-center" disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <span className="term-cursor" style={{ background: "#04130a" }} />
                  TRANSMITTING…
                </>
              ) : (
                <>PLACE ORDER — ₹{price.toLocaleString("en-IN")}/MO</>
              )}
            </button>
            <p className="mt-3 text-center font-mono text-[10.5px] leading-relaxed text-faint">
              Payment collected on Discord via UPI / GPay / Paytm / PhonePe / Crypto.
              <br />
              Setup starts the moment payment confirms.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
