import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";

const futura = localFont({
  src: "../fonts/Futura.otf",
  variable: "--font-futura",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Hands Down Martial Arts, Boxing, Kickboxing in Cobham & Epsom",
  description:
    "Hands Down martial arts, boxing and kickboxing in Cobham and Epsom, Surrey. Classes suitable for all ages. Great way to get fit & learn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${futura.variable} ${montserrat.variable} ${openSans.variable}`}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
