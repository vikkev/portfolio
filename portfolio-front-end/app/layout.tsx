import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Vinicius M. Ibaraki",
  description: "Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-br" suppressHydrationWarning>
        <head />
          <body>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </body>
      </html>
    </>
  );
}
