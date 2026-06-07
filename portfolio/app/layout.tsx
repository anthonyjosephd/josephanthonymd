import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Joseph Anthony Duran — Full Stack Developer & Creative Technologist",
  description:
    "Full Stack Developer, AI Engineer, and Creative Technologist building premium digital systems end-to-end. Based in the US.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Creative Technologist",
    "Web Development",
    "React",
    "Next.js",
    "Joseph Anthony Duran",
  ],
  authors: [{ name: "Joseph Anthony Duran" }],
  creator: "Joseph Anthony Duran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://josephanthony.dev",
    title: "Joseph Anthony Duran — Full Stack Developer & Creative Technologist",
    description:
      "Full Stack Developer, AI Engineer, and Creative Technologist building premium digital systems end-to-end.",
    siteName: "Joseph Anthony Duran",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Anthony Duran — Full Stack Developer",
    description: "Full Stack Developer, AI Engineer, and Creative Technologist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
