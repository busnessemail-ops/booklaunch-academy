import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "BookLaunch Academy", template: "%s | BookLaunch Academy" }, description: "A practical learning path to create, publish and launch your book." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }