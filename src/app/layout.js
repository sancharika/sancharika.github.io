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
      url: 'https://cdn.sanity.io/images/ufypgguq/production/7f9d9cdf30041e4d8ab4dbf71830e2922d6f2076-612x612.png'
    },
    alt: "Sancharika Debnath"
  }
  // const settings = await getSettings();
// console.log("params: ", urlForImage(image).src);

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        "Sancharika Debnath | Data Scientist",
      template: "%s | Sancharika"
    },
    description:
      "A Data Scientist who LOVES to explore!",
    keywords: ["Data Science", "Machine Learning", "Python", "Artificial Intelligence"],
    authors: [{ name: "Sancharika" }],
    // canonical: settings?.url,
    openGraph: {
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
      title: "Blogs | Sancharika",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
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
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Favicon --> */}
<link rel="icon" href="/images/favicon.ico" />

{/* <!-- PNG Icons --> */}
<link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16" />

{/* <!-- Apple Touch Icon --> */}
<link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

{/* <!-- Android Icons --> */}
<link rel="icon" type="image/png" href="/images/android-chrome-192x192.png" sizes="192x192" />
<link rel="icon" type="image/png" href="/images/android-chrome-512x512.png" sizes="512x512" />

      </head>
    <GoogleTagManager gtmId="G-X9L170K86G" />
      <body
        className={`antialiased text-gray-800 dark:bg-black dark:text-gray-400`}
      >
      <Navbar/>
        <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
    <Footer/>
      </body>
    </html>
  );
}
