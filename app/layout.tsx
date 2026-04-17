import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import WhatsAppButton from "@/components/whatsapp-button";
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mafhhtechnologies.com"),

  title: {
    default: "MAFHH Technologies | ERP Software Company in India | Custom Business Automation",
    template: "%s | MAFHH Technologies",
  },

  description:
    "MAFHH Technologies is a leading ERP software company in India offering custom ERP development, inventory management systems, dashboards, and SaaS solutions to automate and scale businesses.",

  keywords: [
    "ERP software company India",
    "custom ERP development",
    "inventory management software India",
    "business automation company",
    "dashboard development services",
    "SaaS development company India",
    "ERP for manufacturing",
    "ERP for small business India",
    "warehouse management system",
    "custom business software solutions"
  ],

  authors: [{ name: "MAFHH Technologies" }],
  creator: "MAFHH Technologies",
  publisher: "MAFHH Technologies",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "MAFHH Technologies | ERP Software & Business Automation Company",
    description:
      "We build custom ERP systems, dashboards, and automation software for manufacturing, sales, and operations teams.",
    url: "https://mafhhtechnologies.com",
    siteName: "MAFHH Technologies",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png", // create this (1200x630)
        width: 1200,
        height: 630,
        alt: "MAFHH Technologies ERP Software",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MAFHH Technologies | ERP & Automation Solutions",
    description:
      "Custom ERP, inventory systems, and dashboards for modern businesses.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
