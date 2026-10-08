import type { Metadata, Viewport } from "next";
import { Newsreader, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alloice-biochem.vercel.app"),
  title: "Alloice Alloice Otieno | Living Plant Biochemistry & Cellular Vitality",
  description:
    "Alloice Alloice Otieno is a biochemist from Moi University devoted to quantitative spectrophotometry, natural product extraction, and elucidating phytochemical pathways against oxidative stress.",
  keywords: [
    "Alloice Alloice Otieno",
    "Biochemistry",
    "Moi University",
    "Phytochemistry",
    "Antioxidant Capacity",
    "Spectrophotometry",
    "Kenyan Flora",
    "Enzymology",
    "Natural Products Research",
    "Western Kenya",
    "Eldoret",
    "Cleome gynandra",
    "Amaranthus",
    "Solanum nigrum",
  ],
  authors: [{ name: "Alloice Alloice Otieno" }],
  creator: "Alloice Alloice Otieno",
  openGraph: {
    title: "Alloice Alloice Otieno | Living Plant Biochemistry & Cellular Vitality",
    description:
      "Decoding the living chemistry of African botanicals through quantitative spectrophotometry and antioxidant defense profiling.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/alloice-portrait.jpg",
        width: 1024,
        height: 1024,
        alt: "Alloice Alloice Otieno - Biochemist & Botanical Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alloice Alloice Otieno | Living Plant Biochemistry & Cellular Vitality",
    description:
      "Decoding the living chemistry of African botanicals through quantitative spectrophotometry and antioxidant defense profiling.",
    images: ["/images/alloice-portrait.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#00110c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} scroll-smooth dark h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#00110c] text-leaf font-sans antialiased selection:bg-primary selection:text-surface-dim relative">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
