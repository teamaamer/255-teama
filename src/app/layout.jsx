import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/contexts/LanguageContext";
import localFont from 'next/font/local';

const madaniArabic = localFont({
  src: [
    {
      path: '../../public/Madani-Arabic-Font-Family/Madani Arabic Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Madani-Arabic-Font-Family/Madani Arabic Extra Bold.ttf',
      weight: '700 800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-Madani-Arabic-Font-Family',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  title: "255 Agency - Creative Digital Solutions & Interactive Installations",
  description:
    "255 Agency is a Palestine-based digital advertising agency offering comprehensive services including design, social media management, photography, video production, and interactive digital installations.",
  keywords: "digital agency, advertising, design, social media, photography, video production, Palestine, creative agency",
  icons: {
    icon: [
      { url: '/255-logo.svg', type: 'image/svg+xml' },
      { url: '/255-logo-primary.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/255-logo.svg',
    apple: '/255-logo.svg',
  },
  openGraph: {
    title: "255 Agency - Creative Digital Solutions",
    description: "Transform your ideas into exceptional experiences with our multidisciplinary team of designers, strategists, and innovators.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/255-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </head>
      <body className={`${madaniArabic.className} ${madaniArabic.variable} relative w-full flex flex-col justify-between min-h-screen overflow-x-hidden`}>
        <LanguageProvider>
          <CustomCursor />
          <SmoothScroll />
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="w-full flex-col gap-40 mx-auto overflow-x-clip">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <div className="elfsight-app-67db9a95-53da-41a2-be50-fbc68847f55c" data-elfsight-app-lazy></div>
        </LanguageProvider>
      </body>
    </html>
  );
}
