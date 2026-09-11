import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaStudio",
  description: "A modern frontend experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
