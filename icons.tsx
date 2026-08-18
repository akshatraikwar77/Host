type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <path
        d="M20 2 35 10.6v17.2L20 36.4 5 27.8V10.6L20 2Z"
        stroke="url(#lg1)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M23 8 12.5 21.5H19l-2.6 10L27.5 17.5H20L23 8Z" fill="url(#lg2)" />
      <defs>
        <linearGradient id="lg1" x1="5" y1="2" x2="35" y2="37">
          <stop stopColor="#2fd6ff" />
          <stop offset="1" stopColor="#9b6bff" />
        </linearGradient>
        <linearGradient id="lg2" x1="12" y1="8" x2="28" y2="28">
          <stop stopColor="#2fd6ff" />
          <stop offset="1" stopColor="#9b6bff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconChip({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" />
    </svg>
  );
}

export function IconPulse({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 12h4l2.5-6 4 12L16 12h5" />
      <circle cx="12" cy="12" r="10" opacity="0.35" />
    </svg>
  );
}

export function IconShieldWave({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 5 5.8v5.4c0 4.4 2.9 7.6 7 9.3 4.1-1.7 7-4.9 7-9.3V5.8L12 3Z" />
      <path d="M8.5 11.5c1.2-1.4 2.3-1.4 3.5 0s2.3 1.4 3.5 0" opacity="0.8" />
    </svg>
  );
}

export function IconScan({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" opacity="0.5" />
      <circle cx="12" cy="12" r="4.5" opacity="0.8" />
      <path d="M12 12 18 6" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13 2 5 13.5h5.5L10 22l8.5-12H13l1.5-8H13Z" />
    </svg>
  );
}

export function IconDrive({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="8" width="18" height="8" rx="2" />
      <path d="M7 12h.01M10.5 12h.01" strokeWidth="2.4" />
      <path d="M6 8V6.5M18 8V6.5M6 16v1.5M18 16v1.5" opacity="0.7" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.8" r="2.2" />
    </svg>
  );
}

export function IconAi({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="5.5" cy="6" r="2" />
      <circle cx="18.5" cy="6" r="2" />
      <circle cx="12" cy="17.5" r="2.4" />
      <path d="M7.2 7.2 10.4 15M16.8 7.2 13.6 15M7.5 6h9" opacity="0.85" />
    </svg>
  );
}

export function IconTerminal({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="m7 9.5 3 2.5-3 2.5M12.5 15H17" />
    </svg>
  );
}

export function IconKey({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8.5" r="4.5" />
      <circle cx="8" cy="8.5" r="1.6" />
      <path d="m11.5 12 8 8M17 17.5l2-2M14.5 15l1.6-1.6" />
    </svg>
  );
}

export function IconSword({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 3.5 20 3l-.5 5.5L8.5 19.5" />
      <path d="m6 14 4 4M4.5 20.5l2.6-2.6M5 16.5 3.5 15M8.5 20l1.5 1.5" />
    </svg>
  );
}

export function IconCrown({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m4 8 4 3.5L12 5l4 6.5L20 8l-1.5 10h-13L4 8Z" />
      <path d="M5.5 14.5h13" opacity="0.6" />
    </svg>
  );
}

export function IconGem({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 4h10l4 5.5L12 20.5 3 9.5 7 4Z" />
      <path d="M3 9.5h18M12 20.5 8.5 9.5 12 4l3.5 5.5L12 20.5Z" opacity="0.7" />
    </svg>
  );
}

export function IconStar({ className, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="m12 3 2.7 5.8 6.3.8-4.6 4.3 1.2 6.1L12 17l-5.6 3 1.2-6.1L3 9.6l6.3-.8L12 3Z" />
    </svg>
  );
}

export function IconCopy({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5.5 14.5A2 2 0 0 1 4 12.7V6a2 2 0 0 1 2-2h6.7a2 2 0 0 1 1.8 1.5" opacity="0.8" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
    </svg>
  );
}

export function IconDiscord({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.3 5.6A16.9 16.9 0 0 0 15.1 4.3l-.55 1.13a15.6 15.6 0 0 0-5.1 0L8.9 4.3a16.9 16.9 0 0 0-4.2 1.3C2.2 9.6 1.5 13.5 1.85 17.35A17 17 0 0 0 7 20l1.05-1.7a10.4 10.4 0 0 1-1.7-.82l.4-.32a12 12 0 0 0 10.5 0l.4.32c-.54.33-1.1.6-1.7.82L17 20a17 17 0 0 0 5.15-2.65c.42-4.45-.7-8.3-2.85-11.75ZM8.7 14.9c-1 0-1.85-.93-1.85-2.08S7.65 10.7 8.7 10.7s1.85.94 1.85 2.1S9.75 14.9 8.7 14.9Zm6.6 0c-1.05 0-1.85-.93-1.85-2.08s.8-2.12 1.85-2.12 1.85.94 1.85 2.1-.8 2.1-1.85 2.1Z" />
    </svg>
  );
}
