import "../../styles/tailwind.css";
import  {urlForImage} from "../../sanity/clients"
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
        "Blogs | Sancharika",
      template: "%s | sancharika"
    },
    description:
      "Blogs on Machine Learning Topics that might help! | Sancharika",
    keywords: ["ML", "AI", "Data Science"],
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

export default async function Layout({ children, params }) {
  
  return (
    <>
      
      <div>{children}</div>

      
    </>
  );
}
// // enable revalidate for all pages in this layout
// // export const revalidate = 60;
