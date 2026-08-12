import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coefficient",
  description: "Human potential, multiplied by AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
