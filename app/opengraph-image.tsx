import { ImageResponse } from "next/og";
import { personal } from "@/content/site";

export const runtime = "edge";
export const alt = `${personal.name}: data, AI and automation portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0618",
          color: "#f2eefc",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 6,
            color: "#22d3ee",
          }}
        >
          <div style={{ width: 16, height: 16, background: "#22d3ee" }} />
          HARISH PRABHU · SINGAPORE
        </div>
        <div style={{ display: "flex", fontSize: 74, lineHeight: 1.1, maxWidth: 980 }}>
          I turn messy operations into automated, measurable systems.
        </div>
        <div
          style={{
            display: "flex",
            gap: 48,
            fontSize: 24,
            color: "#a79fc7",
            borderTop: "1px solid #2a1f4d",
            paddingTop: 28,
          }}
        >
          <span>SLA 75 to 98%</span>
          <span>50,000+ interactions/mo</span>
          <span>40% less manual triage</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
