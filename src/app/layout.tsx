import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Provider as JotaiProvider } from "jotai";
import { SessionProvider } from "next-auth/react";
import { JotaiHydrator } from "@/lib/jotai/JotaiHydrator";
import { Navigation } from "@/components/Navigation";
import { env } from "@/env";

export const metadata: Metadata = {
  title: "Shared Workshop",
  description: "Frontend Workshop platform for sharing coding exercises",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body suppressHydrationWarning={process.env.NODE_ENV !== "production"}>
        <SessionProvider>
          <JotaiProvider>
            <JotaiHydrator
              envVars={{
                NODE_ENV: env.NODE_ENV,
                REMOTE_LOGGER: env.REMOTE_LOGGER,
                DEBUG_LOGGER: env.DEBUG_LOGGER,
              }}
            >
              <div className="min-h-screen bg-gradient-to-b from-[#18181b] to-[#1b1b1c]">
                <Navigation />
                {children}
              </div>
            </JotaiHydrator>
          </JotaiProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
