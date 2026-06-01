import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { ThemeProvider } from "next-themes";
import { cx } from "../utils/all";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import  {urlForImage} from "../sanity/clients"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

async function sharedMetaData(params) {
  const image = {
    asset: {
      url: 'https://cdn.sanity.io/images/ufypgguq/production/7f9d9cdf30041e4d8ab4dbf71830e2922d6f2076-612x612.png/'
    },
    alt: "Sancharika Debnath"
  }

  return {
    metadataBase: new URL("https://sancharika.github.io/"),
    title: {
      default:
        "Sancharika Debnath | Data Scientist",
      template: "%s | Sancharika"
    },
    description:
      "A Data Scientist who LOVES to explore!",
    keywords: [
      "Data Science",
      "Machine Learning",
      "Python",
      "Artificial Intelligence",
      "Portfolio",
      "Sancharika Debnath"
    ],
    authors: [{ name: "Sancharika" }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      siteName: "Sancharika Debnath",
      images: [
        {
          url: urlForImage(image).src,
            // "/7f9d9cdf30041e4d8ab4dbf71830e2922d6f2076-612x612.png",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: "Sancharika Debnath | Data Scientist",
      card: "summary_large_image",
      site: "@_Sancharika",
      creator: "@_Sancharika"
    },
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: "/",
    },
    verification: {
      google: "googlea5a49d979d05d87f",
    },
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      suppressHydrationWarning
      className={cx(geistSans.variable, geistMono.variable)}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body
        className={`antialiased text-gray-800 dark:bg-black dark:text-gray-400`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Sancharika Debnath",
              "url": "https://sancharika.github.io/",
              "jobTitle": "Data Scientist",
              "sameAs": [
                "https://twitter.com/_Sancharika/",
                "https://github.com/sancharika/",
                "https://www.linkedin.com/in/sancharika-debnath/",
                "https://huggingface.co/sancharikadebnath/"
              ]
            }),
          }}
        />
        <GoogleTagManager gtmId="G-X9L170K86G" />
      <Navbar/>
        <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
    <Footer/>
      </body>
    </html>
  );
}
