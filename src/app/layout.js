import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { ThemeProvider } from "next-themes";
import { cx } from "../utils/all";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

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

export const metadata = {
  title: "Sancharika Debnath | Data Scientist",
  description: "A Data Scientist who LOVES to explore!",
  keywords: ["Data Science", "Machine Learning", "Python", "Artificial Intelligence"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    suppressHydrationWarning
    className={cx(geistSans.variable, geistMono.variable)}>
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
