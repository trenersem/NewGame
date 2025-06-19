import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/utils/cn";


import "./globals.css";
import { ThemeProvider } from "./providers";
import { NavBar } from "@/components/ui/navbar";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volodymyr's Portfolio",
  description: "Just my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistMono.className, inter.className)}>
         <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
           <NavBar
              navItems={navItems}
           />
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
