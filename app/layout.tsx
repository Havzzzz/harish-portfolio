import type { Metadata } from "next";
import { Sora, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { personal } from "@/content/site";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Harish Prabhu · Solutions & Delivery Engineer",
  description: personal.thesis,
  openGraph: {
    title: "Harish Prabhu",
    description: personal.thesis,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.fullName,
  email: `mailto:${personal.email}`,
  url: personal.linkedin,
  address: { "@type": "PostalAddress", addressLocality: "Singapore" },
  alumniOf: "Nanyang Technological University",
  knowsAbout: [
    "Solutions Engineering",
    "Technical Delivery",
    "Systems Integration",
    "Workflow Automation",
    "Vendor Management",
    "Data Analytics",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${instrumentSans.variable} ${plexMono.variable}`}>
      <body>
        <div className="aurora" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
