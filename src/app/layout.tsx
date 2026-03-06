import type { Metadata } from "next";
import { Nunito, Caveat_Brush, Bebas_Neue, Montserrat } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seu Chico Botequim – Cardápio Digital",
  description:
    "Cardápio digital do Seu Chico Botequim. Bebidas, porções, drinks e muito mais.",
  keywords: ["cardápio", "botequim", "seu chico", "petiscos", "drinks", "bar"],
  openGraph: {
    title: "Seu Chico Botequim",
    description: "Cardápio digital do Seu Chico Botequim",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Seu Chico Botequim",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${bebas.variable} ${montserrat.variable} ${nunito.variable} ${caveatBrush.variable} font-body antialiased bg-botequim-bg text-botequim-text`}>
        <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
          <Image
            src="/images/Backgroud-cardapio.png"
            alt=""
            fill
            className="object-cover object-[85%_center] md:object-center opacity-20"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
