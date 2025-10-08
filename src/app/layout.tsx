import type { Metadata } from "next";
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coaching Mastermind - Become an AI-first leader",
  description: "Find people, content & credits to integrate AI into your work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${playfair.variable} antialiased bg-black font-normal`}
      >
        <div className="flex min-h-screen bg-black">
          {/* Desktop Sidebar - Hidden on mobile */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          
          {/* Main Content - responsive margin for sidebar */}
          <main className="flex-1 w-full transition-all duration-300 pb-16 md:pb-0 md:ml-[var(--sidebar-width,0px)]">
            {children}
          </main>

          {/* Mobile Bottom Nav - Only on mobile */}
          <div className="md:hidden">
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
