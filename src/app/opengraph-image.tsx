import { ImageResponse } from "next/og";

export const alt = "Salta QR — Historia en la calle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 56,
          background: "linear-gradient(135deg, #4a121f 0%, #6b1c2c 45%, #9a3540 100%)",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#fff5e6",
            textAlign: "center",
            lineHeight: 1.12,
          }}
        >
          Historia en la calle
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 34,
            fontWeight: 700,
            color: "#e4c76b",
            textAlign: "center",
          }}
        >
          Salta QR
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            fontWeight: 600,
            color: "rgba(255,245,230,0.9)",
            textAlign: "center",
          }}
        >
          Primera ruta: monumento a Güemes · Más lugares en la ciudad
        </div>
      </div>
    ),
    { ...size },
  );
}
