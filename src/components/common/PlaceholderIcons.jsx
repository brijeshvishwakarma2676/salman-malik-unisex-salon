const ICON_PROPS = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Scissors(props) {
  return (
    <svg {...ICON_PROPS} {...props}>
      <circle cx="14" cy="14" r="5" />
      <circle cx="14" cy="34" r="5" />
      <path d="M18 17 40 40M18 31 40 8" />
    </svg>
  );
}

function Lipstick(props) {
  return (
    <svg {...ICON_PROPS} {...props}>
      <path d="M18 26h12v14a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2z" />
      <path d="M18 26 22 8h4l4 18" />
      <path d="M14 8h20" />
    </svg>
  );
}

function HairStrand(props) {
  return (
    <svg {...ICON_PROPS} {...props}>
      <path d="M12 8c8 0 4 10 12 10s4-10 12-10" />
      <path d="M12 20c8 0 4 10 12 10s4-10 12-10" />
      <path d="M12 32c8 0 4 8 12 8s4-8 12-8" />
    </svg>
  );
}

function Needle(props) {
  return (
    <svg {...ICON_PROPS} {...props}>
      <path d="M10 38 30 18" />
      <path d="M26 14l8 8" />
      <path d="M32 8l8 8-4 4-8-8z" />
      <circle cx="12" cy="36" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GraduationCap(props) {
  return (
    <svg {...ICON_PROPS} {...props}>
      <path d="M4 18 24 10l20 8-20 8z" />
      <path d="M14 22v9c0 3 5 6 10 6s10-3 10-6v-9" />
      <path d="M40 18v11" />
    </svg>
  );
}

function Frame(props) {
  return (
    <svg {...ICON_PROPS} {...props}>
      <rect x="6" y="10" width="36" height="28" rx="2" />
      <circle cx="17" cy="20" r="3" />
      <path d="M6 32l10-9 8 7 8-6 10 9" />
    </svg>
  );
}

const PLACEHOLDER_ICONS = {
  hair: HairStrand,
  makeup: Lipstick,
  extensions: HairStrand,
  tattoo: Needle,
  piercing: Needle,
  academy: GraduationCap,
  scissors: Scissors,
};

export function PlaceholderIcon({ icon, className }) {
  const Icon = PLACEHOLDER_ICONS[icon] ?? Frame;
  return <Icon className={className} aria-hidden="true" />;
}
