import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
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
  title: "Pratiksha Naik | Senior Full-Stack Engineer & Creative UI/UX Designer",
  description:
    "Award-winning Bento Grid portfolio for Pratiksha Naik. Specializing in high-performance web applications, React 19, Next.js 15, scalable backend architectures, and fluid creative design systems.",
  keywords: [
    "Pratiksha Naik",
    "Full-Stack Developer",
    "Creative Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React 19",
    "Tailwind CSS",
    "Framer Motion",
    "Bento Grid Portfolio",
    "Frontend Engineer",
  ],
  authors: [{ name: "Pratiksha Naik" }],
  openGraph: {
    title: "Pratiksha Naik | Full-Stack Engineer & Creative UI/UX Designer",
    description:
      "Award-winning Bento Grid portfolio showcasing scalable web architectures, design systems, and interactive digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratiksha Naik | Full-Stack Engineer & Creative UI/UX Designer",
    description:
      "Award-winning Bento Grid portfolio showcasing scalable web architectures and fluid design systems.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070c] text-slate-100 selection:bg-purple-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
