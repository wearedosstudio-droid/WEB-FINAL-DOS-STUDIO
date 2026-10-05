import { ImageResponse } from "next/og";

export const alt = "Dos Studio — Agencia de marketing digital en Barcelona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen para redes sociales, con la misma estética que la portada del Portfolio. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#14122A",
          color: "#F6F4EE",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -4 }}>
          Dos Studio<span style={{ color: "#5430FF" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: "#8C74FF", lineHeight: 1.15 }}>
            Construimos y hacemos crecer tu ecosistema digital.
          </div>
          <div style={{ marginTop: 28, fontSize: 22, letterSpacing: 6, color: "rgba(255,255,255,0.55)" }}>
            DIGITAL MARKETING · BARCELONA
          </div>
        </div>
      </div>
    ),
    size
  );
}
