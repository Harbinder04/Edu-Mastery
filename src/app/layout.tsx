import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'sonner';
import SessionProviderWrapper from "./SessionProviderWrapper";

export const metadata: Metadata = {
  title: "EduMastery",
  description: "Your Path to Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary`}>
        <SessionProviderWrapper>
          {children}
          <Toaster />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}