'use client';

import { useEffect, useRef, useState } from "react";
import Dashboard from "@/components/dashboard";

const PRELOADER_VIDEO = "https://res.cloudinary.com/dxcsktcxk/video/upload/v1786602687/PRELOADER_c0dpia.mp4";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => undefined);
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            zIndex: 9999,
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setIsLoading(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              background: "#000",
            }}
          >
            <source src={PRELOADER_VIDEO} type="video/mp4" />
          </video>
        </div>
      ) : null}
      <Dashboard />
    </>
  );
}
