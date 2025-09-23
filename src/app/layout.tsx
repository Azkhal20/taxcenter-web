import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tax Center Gunadarma",
    template: "%s | Tax Center",
  },
  description: "Tax Center Gunadarma",
  icons: {
    icon: "/assets/images/favicon.ico",
  }
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
