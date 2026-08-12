import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Coefficient — Human potential, multiplied by AI",
  description: "The intelligence layer for measuring and improving your human + AI workforce.",
  openGraph: {
    title: "Coefficient",
    description: "Human potential, multiplied by AI.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coefficient",
    description: "Human potential, multiplied by AI.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
