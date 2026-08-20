export const SERVER_IP = "play.fluxsmp.fun";
export const DISCORD_URL = "https://discord.gg/4jM9mqvtnZ";
export const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1538170952884686909/oMIlmqcvLWdJlGpNwC5km6dhIGrfEWt_vRGaAvanyFeDprTfunWVaET82shSTyyscfA7";

export const OFFER = { code: "FLUXLAUNCH", pct: 15 };

/* ================= PLAN DATA ================= */

export type Tier = {
  name: string;
  ram: string;
  vcores: string;
  storage: string;
  slots: string;
  jar?: string;
  note?: string;
  price: number;
  popular?: boolean;
  popTag?: string;
};

export type Series = {
  id: string;
  badge: string;
  name: string;
  cpu: string;
  desc: string;
  color: string;
  bullets: string[];
  includes: string[];
  warn?: string;
  tiers: Tier[];
};

export const SERIES: Series[] = [
  {
    id: "budget",
    badge: "Budget Series",
    name: "FLUX BUDGET",
    cpu: "Powered by Flux Noida DC",
    desc: "Perfect for testing, friend servers & development — unbeatable prices for getting started.",
    color: "var(--color-emerald)",
    bullets: ["Powered by Flux Noida DC", "Basic DDoS Protection", "1Gbps Network", "Instant Setup"],
    includes: [
      "24/7 Support",
      "Full FTP Access",
      "MySQL Database",
      "One-Click Modpack Installer",
      "Daily Backups",
      "Full Mod Support",
      "Cracked/Offline Mode",
    ],
    warn: "Budget servers run on best-effort uptime. For 24/7 production servers, check the EPYC 7763 Premium series.",
    tiers: [
      { name: "FLUX STONE", ram: "2GB", vcores: "2 vCores", storage: "4GB SSD", slots: "5 Players", price: 150 },
      { name: "FLUX IRON", ram: "4GB", vcores: "4 vCores", storage: "8GB SSD", slots: "10 Players", price: 250 },
      { name: "FLUX COPPER", ram: "6GB", vcores: "6 vCores", storage: "16GB SSD", slots: "15 Players", price: 350 },
      { name: "FLUX REDSTONE", ram: "8GB", vcores: "8 vCores", storage: "32GB SSD", slots: "20 Players", price: 450 },
      { name: "FLUX GOLD", ram: "12GB", vcores: " 12 vCores", storage: "48GB SSD", slots: "30 Players", price: 600 },
      { name: "FLUX GHAST", ram: "16GB", vcores: "16 vCores", storage: "64GB SSD", slots: "35 Players", price: 800 },
      { name: "FLUX DIAMOND", ram: "24GB", vcores: "16 vCores", storage: "96GB SSD", slots: "45 Players", price: 1000 },
      { name: "FLUX TITAN", ram: "32GB", vcores: "16 vCores", storage: "128 GB SSD", slots: "50+ Players", price: 1200 },
    ],
  },
  {
    id: "epyc",
    badge: "Premium · EPYC 7763",
    name: "FLUX EPYC",
    cpu: "AMD EPYC 7763 · Enterprise-Grade 64-Core",
    desc: "Enterprise-grade 64-core processor with advanced DDoS and a 1Gbps premium network. Servers located in Delhi, India.",
    color: "var(--color-diamond)",
    bullets: [
      "Enterprise-Grade 64-Core Processor",
      "Advanced DDoS Protection",
      "1Gbps Premium Network",
      "Instant Setup After Payment",
    ],
    includes: [
      "24/7 Discord Support",
      "Pterodactyl Control Panel",
      "FTP File Access",
      "MySQL Database",
      "Free Subdomain",
      "One-Click Modpack Installer",
      "Daily Backups",
      "99.9% Uptime Guarantee",
      "Full Mod Support",
      "Cracked/Offline Mode",
      "Free Migration",
    ],
    tiers: [
      {
        name: "FLUX BASIC",
        ram: "2GB DDR4",
        vcores: "1 vCore",
        storage: "12GB NVMe",
        slots: "25 Players",
        jar: "Vanilla / Paper / Spigot / Forge",
        note: "50% faster chunk loading",
        price: 279,
      },
      {
        name: "FLUX PRO",
        ram: "4GB DDR4",
        vcores: "2 vCores",
        storage: "18GB NVMe",
        slots: "50 Players",
        jar: "All JARs + Heavy Modpacks",
        note: "Optimized for RLCraft / ATM / SkyFactory",
        price: 499,
        popular: true,
        popTag: "MOST POPULAR FOR MODDED",
      },
      {
        name: "FLUX ELITE",
        ram: "8GB DDR4",
        vcores: "3 vCores",
        storage: "25GB NVMe",
        slots: "100 Players",
        jar: "All JARs + Heavy Modpacks",
        note: "3 vCores for maximum performance",
        price: 899,
      },
      {
        name: "FLUX ULTIMATE",
        ram: "16GB DDR4",
        vcores: "4 vCores",
        storage: "35GB NVMe",
        slots: "150+ Players",
        jar: "All JARs + Custom Modpacks",
        note: "Ultimate performance for large communities",
        price: 1699,
      },
      {
        name: "FLUX TITAN",
        ram: "24GB DDR4",
        vcores: "6 vCores",
        storage: "45GB NVMe",
        slots: "Unlimited",
        jar: "All JARs + Custom Modpacks",
        note: "Maximum power for professional servers",
        price: 2199,
      },
    ],
  },
  {
    id: "ryzen5900x",
    badge: "VPS · Ryzen 9 5900X",
    name: "FLUX RYZEN VPS",
    cpu: "AMD Ryzen 9 5900X · DDR4 3200MT/s",
    desc: "Max-performance VPS line with a 100% uptime guarantee and L3/L4 + Layer-7 DDoS mitigation. Location: India.",
    color: "var(--color-amber)",
    bullets: [
      "Powered by AMD Ryzen 9 5900X",
      "Advanced DDoS Protection",
      "1Gbps Premium Network",
      "Instant Setup After Payment",
    ],
    includes: [
      "100% Uptime Guarantee",
      "L3/L4 + Layer 7 DDoS Mitigation",
      "No Data Loss Guarantee",
      "24/7 Support",
      "Pterodactyl Control Panel",
      "Free Subdomain",
    ],
    tiers: [
      {
        name: "FLUX RYZEN 4GB",
        ram: "4GB DDR4 3200MT/s",
        vcores: "1 vCore",
        storage: "15GB NVMe",
        slots: "25 Players",
        jar: "Vanilla / Paper / Spigot / Forge",
        price: 399,
      },
      {
        name: "FLUX RYZEN 8GB",
        ram: "8GB DDR4 3200MT/s",
        vcores: "2 vCores",
        storage: "30GB NVMe",
        slots: "50 Players",
        jar: "All JARs + Light Modpacks",
        price: 799,
        popular: true,
        popTag: "MOST POPULAR",
      },
      {
        name: "FLUX RYZEN 16GB",
        ram: "16GB DDR4 3200MT/s",
        vcores: "4 vCores",
        storage: "60GB NVMe",
        slots: "100 Players",
        jar: "All JARs + Heavy Modpacks",
        price: 1600,
      },
      {
        name: "FLUX RYZEN 32GB",
        ram: "32GB DDR4 3200MT/s",
        vcores: "8 vCores",
        storage: "120GB NVMe",
        slots: "200+ Players",
        jar: "All JARs + Custom Modpacks",
        price: 3000,
      },
      {
        name: "FLUX RYZEN 64GB",
        ram: "64GB DDR4 3200MT/s",
        vcores: "16 vCores",
        storage: "250GB NVMe",
        slots: "Unlimited",
        jar: "All JARs + Custom Modpacks",
        price: 5200,
      },
    ],
  },
  {
    id: "ryzen9950x",
    badge: "Premium · Ryzen 9 9950X",
    name: "FLUX RYZEN 9950X",
    cpu: "Ryzen 9 9950X · 4.50 GHz Base / 6.80 GHz Turbo · DDR5",
    desc: "The flagship — DDR5 ultra-low-latency memory and 6.80 GHz turbo boost. Zero CPU steal time.",
    color: "var(--color-gold)",
    bullets: [
      "4.50 GHz Base / 6.80 GHz Turbo",
      "Advanced DDoS Protection",
      "1Gbps Premium Network",
      "DDR5 Memory — Ultra Low Latency",
    ],
    includes: [
      "24/7 Discord Support",
      "Pterodactyl Control Panel",
      "FTP File Access",
      "MySQL Database",
      "Free Subdomain",
      "One-Click Modpack Installer",
      "Daily Backups",
      "99.9% Uptime Guarantee",
      "Full Mod Support",
      "Cracked/Offline Mode",
      "Free Migration",
    ],
    tiers: [
      {
        name: "FLUX RYZEN 4GB",
        ram: "4GB DDR5",
        vcores: "1 vCore",
        storage: "20GB NVMe",
        slots: "50 Players",
        jar: "All JARs + Light Modpacks",
        note: "6.80 GHz Turbo Boost",
        price: 1299,
      },
      {
        name: "FLUX RYZEN 8GB",
        ram: "8GB DDR5",
        vcores: "2 vCores",
        storage: "40GB NVMe",
        slots: "100 Players",
        jar: "All JARs + Heavy Modpacks",
        note: "Zero CPU steal time",
        price: 1999,
        popular: true,
        popTag: "MOST POPULAR",
      },
      {
        name: "FLUX RYZEN 16GB",
        ram: "16GB DDR5",
        vcores: "4 vCores",
        storage: "80GB NVMe",
        slots: "200+ Players",
        jar: "All JARs + Custom Modpacks",
        note: "Maximum performance",
        price: 2999,
      },
      {
        name: "FLUX RYZEN 32GB",
        ram: "32GB DDR5",
        vcores: "6 vCores",
        storage: "120GB NVMe",
        slots: "Unlimited",
        jar: "All JARs + Custom Modpacks",
        note: "Enterprise-grade power",
        price: 5499,
      },
    ],
  },
];

/* ================= WORLDS / BIOMES ================= */

export type WorldCase = {
  title: string;
  tag: string;
  series: string;
  color: string;
  img: string;
  desc: string;
  stats: [string, string][];
};

export const CASES: WorldCase[] = [
  {
    title: "Vanilla & SMP",
    tag: "Community worlds",
    series: "FLUX EPYC",
    color: "var(--color-diamond)",
    img: "images/mc-smp.jpg",
    desc: "Long-lived survival worlds with land claims, economies and weekly events. EPYC 7763 cores keep render distance high while your community farms at 20 TPS.",
    stats: [
      ["50–150", "players"],
      ["4–16 GB", "RAM"],
      ["20", "TPS always"],
    ],
  },
  {
    title: "Modpack Servers",
    tag: "Forge · Fabric · NeoForge",
    series: "FLUX RYZEN 9950X",
    color: "var(--color-gold)",
    img: "images/mc-modded.jpg",
    desc: "RLCraft, All The Mods, SkyFactory — the heavy stuff. 6.80 GHz turbo plus NVMe chews through mod init while the one-click installer handles the pack.",
    stats: [
      ["200+", "mods"],
      ["8–32 GB", "RAM"],
      ["1-click", "pack install"],
    ],
  },
  {
    title: "Skyblock Networks",
    tag: "Island economies",
    series: "FLUX RYZEN VPS",
    color: "var(--color-amber)",
    img: "images/mc-skyblock.jpg",
    desc: "Thousands of concurrent islands with MySQL-backed progression, minion timers and cross-island leaderboards that update without a stutter.",
    stats: [
      ["1,000+", "islands"],
      ["16–64 GB", "RAM"],
      ["MySQL", "included"],
    ],
  },
  {
    title: "PvP & Minigames",
    tag: "Competitive networks",
    series: "FLUX RYZEN 9950X",
    color: "var(--color-emerald)",
    img: "images/mc-pvp.jpg",
    desc: "BedWars, KitPvP and duels where hit registration is everything. High single-thread clocks plus low Indian ping mean your combos actually land.",
    stats: [
      ["100+", "in arena"],
      ["8–16 GB", "RAM"],
      ["L7", "DDoS shield"],
    ],
  },
];

/* ================= REVIEWS ================= */

export type Testimonial = {
  quote: string;
  name: string;
  server: string;
  meta: string;
  hue: string;
  stars: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Moved our 150-player SMP to the EPYC TITAN tier. Delhi node took our ping from 180ms to 14ms and TPS hasn't dipped below 19.8 since.",
    name: "Aarav M.",
    server: "CraftLegacy SMP",
    meta: "FLUX TITAN · 24GB",
    hue: "var(--color-gold)",
    stars: 5,
  },
  {
    quote:
      "The MCP agent quarantined a sketchy plugin jar at 3 AM before any of us even woke up. That alone paid for the year.",
    name: "Ishaan R.",
    server: "PixelNation",
    meta: "FLUX ELITE · 8GB",
    hue: "var(--color-diamond)",
    stars: 5,
  },
  {
    quote:
      "Paid with UPI at 11:58 PM, server was live with our modpack at 12:00 AM. I timed it. The one-click installer is not marketing.",
    name: "Kabir S.",
    server: "RedstoneRajas",
    meta: "FLUX PRO · 4GB",
    hue: "var(--color-emerald)",
    stars: 5,
  },
  {
    quote:
      "Support answered on Discord in under a minute during a griefing incident and rolled our daily backup back from the panel themselves.",
    name: "Ananya P.",
    server: "SkyBlock India",
    meta: "FLUX RYZEN 16GB",
    hue: "var(--color-amber)",
    stars: 5,
  },
  {
    quote:
      "We run chunky pregeneration on the 9950X 16GB tier — 12k chunks overnight without a single lag spike for players online.",
    name: "Rohan V.",
    server: "VanillaVibes",
    meta: "FLUX RYZEN 16GB · DDR5",
    hue: "var(--color-gold)",
    stars: 4,
  },
];

/* ================= MCP CONSOLE ================= */

export type McpLine = { t: "cmd" | "ok" | "warn" | "info"; text: string };

export const MCP_LINES: McpLine[] = [
  { t: "cmd", text: "flux-mcp connect --node delhi-01" },
  { t: "ok", text: "handshake ok · MCP v1.2 · context synced (plugins · logs · tps)" },
  { t: "cmd", text: "agent.security.sweep --deep" },
  { t: "info", text: "scanning 214 jars · 38 plugins · region files…" },
  { t: "ok", text: "0 malware signatures · 0 backdoors · 0 exposed ports" },
  { t: "warn", text: "quarantined legacy-auth.jar (heuristic hit 0.87)" },
  { t: "cmd", text: "agent.tps.tune --target 20" },
  { t: "ok", text: "pre-generated 12,400 chunks · MSPT 3.4 → 1.8" },
  { t: "ok", text: "agent on watch · median support reply 42s" },
];
