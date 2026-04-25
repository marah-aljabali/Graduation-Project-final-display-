import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AI-Based Marah Graduation Project",
  description:
    "Portfolio showcasing AI projects in Equivalence Systems and AI Assistants for Universities, built as graduation projects in Computer Engineering.",
  keywords: [
    "AI",
    "Portfolio",
    "Computer Engineering",
    "Equivalence System",
    "AI Assistant",
    "Machine Learning",
    "Graduation Project",
  ],
  icons: {
    icon: "🎓",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
