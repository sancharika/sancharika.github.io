import "../../styles/tailwind.css";
import  {urlForImage} from "../../sanity/clients"
async function sharedMetaData(params) {
  const image = {
    asset: {
      url: 'https://cdn.sanity.io/images/ufypgguq/production/7f9d9cdf30041e4d8ab4dbf71830e2922d6f2076-612x612.png'
    },
    alt: "Sancharika Debnath"
  }

  return {
    metadataBase: new URL("https://sancharika.github.io"),
    title: {
      default:
        "Blogs | From Data to Life",
      template: "%s | Sancharika"
    },
    description: 
    "Explore blogs on Data Science, AI, Machine Learning, and life experiences that inspire and inform. | Sancharika Debnath",
    keywords: ["ML", "AI", "Data Science", "Blogs", "Sancharika Debnath"],
    authors: [{ name: "Sancharika" }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://sancharika.github.io/blogs",
      siteName: "Sancharika Debnath Blogs",
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
      card: "summary_large_image",
      site: "@_Sancharika",
      creator: "@_Sancharika"
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
