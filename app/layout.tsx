import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Galactic Corp",
  description: "Un pequeño paso para Galactic Corp, un gran paso para la humanidad",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
