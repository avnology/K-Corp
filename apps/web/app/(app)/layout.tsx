import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "K.CORP - Beyond Investment",
  description: "K.CORP is a leading investment company dedicated to providing innovative financial solutions and exceptional service to our clients worldwide.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Toaster 
          position="bottom-right" 
          expand={false}
          duration={4000}
          closeButton
          toastOptions={{
            style: {
              background: '#002569',
              border: '1px solid #FFFFFF33',
              color: '#FFFFFF',
              fontFamily: 'var(--font-geist-sans)',
            },
            className: 'font-alexandria',
          }}
        />
      </body>
    </html>
  );
}
