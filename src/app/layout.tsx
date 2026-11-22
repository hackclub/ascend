import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = { title: "Ascend" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
