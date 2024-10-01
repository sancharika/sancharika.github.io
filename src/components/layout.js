import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { urlForImage } from "../sanity/clients";
import Navbar from "./navbar";
import { cx } from "../utils/all";
// import defaultOG from "../public/img/og-default.jpg";

import Footer from "./footer";
// import PopupWidget from "../components/popupWidget";

export default function Layout(props) {
  const { children } = props;
  const ogimage = urlForImage(props?.openGraphImage) ?? "";
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
        twitter={{
          handle: "@_Sancharika",
          site: "@_Sancharika",
          cardType: "summary_large_image"
        }}
      />

      <div
        className={cx(
          props?.fontStyle,
          "antialiased text-gray-800 dark:bg-black dark:text-gray-400"
        )}>
        
          <Navbar />
       

        <div>{children}</div>

        <Footer />
      </div>
    </>
  );
}