import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tushartuteja.xyz'),
  title: {
    default: "Tushar Tuteja - Software Engineer Portfolio",
    template: "%s | Tushar Tuteja"
  },
  description: "Professional portfolio of Tushar Tuteja - Backend Developer specializing in AI integrations, blockchain applications, and real-time systems. Experienced with Node.js, React, Docker, AWS, and Solidity.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Blockchain Developer",
    "AI Integration",
    "React Developer",
    "Node.js Developer",
    "Tushar Tuteja",
    "Web3",
    "Solidity",
    "FastAPI",
    "Docker",
    "AWS",
    "GenAI",
    "LLM",
    "Real-time Systems"
  ],
  authors: [{ name: "Tushar Tuteja", url: "https://tushartuteja.xyz" }],
  creator: "Tushar Tuteja",
  publisher: "Tushar Tuteja",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tushartuteja.xyz",
    siteName: "Tushar Tuteja Portfolio",
    title: "Tushar Tuteja - Software Engineer",
    description: "Backend Developer | AI Integrations | Blockchain Applications | Building scalable systems with Node.js, React, Docker & AWS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tushar Tuteja - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Tuteja - Software Engineer",
    description: "Backend Developer | AI Integrations | Blockchain Applications",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon.ico' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: "https://tushartuteja.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tushar Tuteja",
    "url": "https://tushartuteja.xyz",
    "email": "tushartuteja19@gmail.com",
    "jobTitle": "Software Engineer",
    "description": "Backend Developer specializing in AI integrations, blockchain applications, and real-time systems",
    "sameAs": [
      "https://www.linkedin.com/in/tushar-tuteja",
      "https://github.com/tushartuteja",
      "https://x.com/0xtushartuteja"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sonipat",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Deenbandhu Chotu Ram University of Science and Technology"
    },
    "knowsAbout": [
      "Node.js",
      "React",
      "JavaScript",
      "Python",
      "C++",
      "Solidity",
      "Web3",
      "Docker",
      "AWS",
      "MongoDB",
      "MySQL",
      "FastAPI",
      "Express.js",
      "Socket.IO",
      "WebRTC",
      "Blockchain Development",
      "AI Integration",
      "GenAI",
      "LLM",
      "RAG"
    ],
    "workExample": [
      {
        "@type": "SoftwareApplication",
        "name": "MeetNow",
        "description": "Real-time video conferencing app with MediaSoup and WebRTC",
        "applicationCategory": "Web Application",
        "operatingSystem": "Web Browser"
      },
      {
        "@type": "SoftwareApplication",
        "name": "CodeSphere",
        "description": "Cloud IDE for developers with Docker containerization",
        "applicationCategory": "Developer Tool",
        "operatingSystem": "Web Browser"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Blockchain Telegram Bot",
        "description": "Telegram bot for USDT/USDC subscription payments on BSC and Base network",
        "applicationCategory": "Financial Application",
        "operatingSystem": "Telegram"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#00f5ff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
