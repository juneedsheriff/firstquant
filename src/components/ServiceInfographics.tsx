"use client";

import { useId } from "react";

/**
 * Infographics for the three core-service tracks, drawn as SVG in the site's
 * blueprint style. Each animates in once `shown` turns true (the track has
 * scrolled into view). Reduced motion collapses the transitions via globals.css.
 */

const SIGNAL = "var(--color-signal)";
const ICE = "var(--color-ice)";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Stroke that draws itself in. Needs pathLength={1} on the element. */
const draw = (shown: boolean, delay = 0, duration = 900): React.CSSProperties => ({
  strokeDasharray: 1,
  strokeDashoffset: shown ? 0 : 1,
  transition: `stroke-dashoffset ${duration}ms ${EASE} ${delay}ms`,
});

/** Fade and rise for groups. */
const rise = (shown: boolean, delay = 0, y = 8): React.CSSProperties => ({
  opacity: shown ? 1 : 0,
  transform: shown ? "none" : `translateY(${y}px)`,
  transition: `opacity 500ms ${EASE} ${delay}ms, transform 500ms ${EASE} ${delay}ms`,
});

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  const grid = `grid-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} className="block size-full" fontFamily="inherit">
      <defs>
        <pattern id={grid} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke={ICE} strokeOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#${grid})`} />
      {children}
    </svg>
  );
}

const Caption = ({ x, y, children, anchor = "start" }: { x: number; y: number; children: React.ReactNode; anchor?: "start" | "middle" | "end" }) => (
  <text x={x} y={y} fontSize="10" fill={ICE} fillOpacity="0.6" textAnchor={anchor} letterSpacing="0.02em">
    {children}
  </text>
);

/** Site plan and elevation, with the six stages from land to construction. */
export function ArchitectureGraphic({ shown }: { shown: boolean }) {
  const stages = ["Land", "Concept", "Efficiency", "Design", "Documents", "Construction"];
  const floors = 10;
  return (
    <Frame label="Blueprint of a site plan and building elevation, above six stages from land to construction">
      {/* Site plan */}
      <Caption x={28} y={26}>Site plan</Caption>
      <path d="M30 48 L172 36 L188 160 L40 172 Z" pathLength={1} fill="none" stroke={ICE} strokeOpacity="0.55" strokeWidth="1.2" style={draw(shown, 0, 1100)} />
      <path d="M30 48 L172 36 L188 160 L40 172 Z" fill="none" stroke={ICE} strokeOpacity="0.25" strokeDasharray="3 4" transform="translate(6 6) scale(0.94)" style={rise(shown, 300, 0)} />
      <g style={rise(shown, 450)}>
        <rect x="72" y="74" width="78" height="60" rx="2" fill={SIGNAL} fillOpacity="0.18" stroke={SIGNAL} strokeWidth="1.2" />
        <path d="M72 66 H150 M72 62 V70 M150 62 V70" stroke={ICE} strokeOpacity="0.5" />
        <text x="111" y="108" fontSize="10" fill="var(--color-white)" textAnchor="middle">Footprint</text>
      </g>
      {/* North arrow */}
      <g style={rise(shown, 600)} transform="translate(166 64)">
        <path d="M0 -10 L5 6 L0 2 L-5 6 Z" fill={ICE} fillOpacity="0.7" />
        <text x="0" y="-14" fontSize="8" fill={ICE} fillOpacity="0.7" textAnchor="middle">N</text>
      </g>

      {/* Elevation */}
      <Caption x={216} y={26}>Elevation</Caption>
      <path d="M212 186 H378" pathLength={1} stroke={ICE} strokeOpacity="0.6" style={draw(shown, 150)} />
      {Array.from({ length: floors }).map((_, i) => (
        <rect
          key={i}
          x="262"
          y={186 - (i + 1) * 13}
          width="80"
          height="12"
          rx="1.5"
          fill={i === floors - 1 ? SIGNAL : "#ffffff"}
          fillOpacity={i === floors - 1 ? 0.9 : 0.05}
          stroke={i === floors - 1 ? SIGNAL : ICE}
          strokeOpacity={i === floors - 1 ? 1 : 0.45}
          style={rise(shown, 250 + i * 60, 6)}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x="222" y={186 - (i + 1) * 13} width="40" height="12" rx="1.5" fill="var(--color-white)" fillOpacity="0.04" stroke={ICE} strokeOpacity="0.35" style={rise(shown, 250 + i * 60, 6)} />
      ))}
      <path d="M352 186 V56 M348 186 H356 M348 56 H356" stroke={ICE} strokeOpacity="0.4" pathLength={1} style={draw(shown, 900)} />

      {/* Stages */}
      <path d="M30 236 H370" pathLength={1} stroke={SIGNAL} strokeWidth="1.5" style={draw(shown, 700, 1200)} />
      {stages.map((s, i) => {
        const x = 30 + i * 68;
        return (
          <g key={s} style={rise(shown, 800 + i * 110, 4)}>
            <circle cx={x} cy="236" r="6" fill="var(--color-midnight-2)" stroke={SIGNAL} strokeWidth="1.5" />
            <circle cx={x} cy="236" r="2.5" fill={SIGNAL} />
            {/* Labels alternate below and above the line so long words never collide. */}
            <text x={x} y={i % 2 === 0 ? 258 : 222} fontSize="10" fill="var(--color-white)" fillOpacity="0.85" textAnchor={i === 0 ? "start" : i === stages.length - 1 ? "end" : "middle"} dx={i === 0 ? -6 : i === stages.length - 1 ? 6 : 0}>
              {s}
            </text>
          </g>
        );
      })}
      <Caption x={30} y={284}>From land to construction</Caption>
    </Frame>
  );
}

/** Positioning map: competitors around the fair-value line, the project moved above it. */
export function StrategyGraphic({ shown }: { shown: boolean }) {
  const competitors: [number, number][] = [
    [112, 196], [150, 210], [168, 176], [206, 186], [214, 150], [252, 168], [288, 128], [322, 116],
  ];
  return (
    <Frame label="Positioning map of price against perceived value, with the project repositioned above competitors">
      {/* Axes */}
      <path d="M44 250 H372 M44 250 V34" pathLength={1} stroke={ICE} strokeOpacity="0.55" style={draw(shown, 0, 800)} />
      <path d="M366 246 L372 250 L366 254 M40 40 L44 34 L48 40" fill="none" stroke={ICE} strokeOpacity="0.55" style={rise(shown, 500, 0)} />
      <Caption x={372} y={268} anchor="end">Price</Caption>
      <Caption x={52} y={40}>Perceived value</Caption>

      {/* Fair-value line */}
      <path d="M52 240 L360 64" pathLength={1} stroke={ICE} strokeOpacity="0.35" strokeDasharray="4 5" style={rise(shown, 300, 0)} />
      <text x="356" y="84" fontSize="9" fill={ICE} fillOpacity="0.5" textAnchor="end" transform="rotate(-29.7 356 84)" style={rise(shown, 400, 0)}>
        Fair value
      </text>

      {/* Competitors */}
      {competitors.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={ICE} fillOpacity="0.28" stroke={ICE} strokeOpacity="0.35" style={rise(shown, 400 + i * 60, 4)} />
      ))}

      {/* Repositioning move */}
      <path d="M182 170 C 186 140, 172 116, 156 102" pathLength={1} fill="none" stroke={SIGNAL} strokeWidth="1.5" style={draw(shown, 1000, 800)} />
      <circle cx="182" cy="170" r="5" fill="none" stroke={SIGNAL} strokeOpacity="0.6" strokeDasharray="2 2" style={rise(shown, 900, 0)} />
      <g style={rise(shown, 1500, 6)}>
        <circle cx="150" cy="96" r="16" fill={SIGNAL} fillOpacity="0.15" className="motion-safe:animate-pulse" />
        <circle cx="150" cy="96" r="9" fill={SIGNAL} />
        <text x="168" y="92" fontSize="11" fontWeight="600" fill="var(--color-white)">Your project</text>
        <text x="168" y="106" fontSize="9" fill={ICE} fillOpacity="0.7">More value for its price</text>
      </g>

      {/* Legend */}
      <g style={rise(shown, 700)}>
        <circle cx="52" cy="280" r="4" fill={ICE} fillOpacity="0.35" />
        <Caption x={62} y={284}>Competing projects</Caption>
        <circle cx="168" cy="280" r="4" fill={SIGNAL} />
        <Caption x={178} y={284}>Positioned by First Quant</Caption>
      </g>
    </Frame>
  );
}

/** Sales funnel with the Sowparnika portfolio figures, FY23–24 and FY24–25. */
export function ExecutionGraphic({ shown }: { shown: boolean }) {
  const bands = [
    { points: "20,34 220,34 196,88 44,88", opacity: 0.22, value: "99,423+", label: "Qualified leads", cy: 61 },
    { points: "48,96 192,96 168,150 72,150", opacity: 0.42, value: "7,287", label: "Site visits", cy: 123 },
    { points: "76,158 164,158 140,212 100,212", opacity: 0.68, value: "867", label: "Gross bookings", cy: 185 },
    { points: "104,220 136,220 136,258 104,258", opacity: 1, value: "₹179.35 Cr", label: "Marketing-influenced sales", cy: 239 },
  ];
  return (
    <Frame label="Sales funnel: 99,423+ qualified leads, 7,287 site visits, 867 gross bookings and ₹179.35 Cr in marketing-influenced sales">
      {bands.map((b, i) => (
        <g key={b.label}>
          <polygon
            points={b.points}
            fill={SIGNAL}
            fillOpacity={b.opacity}
            stroke={SIGNAL}
            strokeOpacity="0.9"
            style={{
              ...rise(shown, i * 160, 10),
              transformOrigin: "120px 0",
            }}
          />
          <path
            d={`M${i === 3 ? 140 : 206 - i * 28} ${b.cy} H222`}
            stroke={ICE}
            strokeOpacity="0.35"
            strokeDasharray="2 3"
            style={rise(shown, 200 + i * 160, 0)}
          />
          <g style={rise(shown, 260 + i * 160, 6)}>
            <text x="230" y={b.cy + 2} fontSize="20" fontWeight="600" fill="var(--color-white)" style={{ fontVariantNumeric: "tabular-nums" }}>
              {b.value}
            </text>
            <text x="230" y={b.cy + 16} fontSize="10" fill={ICE} fillOpacity="0.7">
              {b.label}
            </text>
          </g>
        </g>
      ))}
      <Caption x={20} y={286}>Sowparnika portfolio, FY23–24 and FY24–25</Caption>
    </Frame>
  );
}
