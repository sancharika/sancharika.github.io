import "../../styles/tailwind.css";

async function sharedMetaData(params) {
  // const settings = await getSettings();
console.log("params: ", params);

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        "Blogs | Sancharika",
      template: "%s | sancharika"
    },
    description:
      "Blogs | Sancharika",
    keywords: ["ML", "AI", "Data Science"],
    authors: [{ name: "Sancharika" }],
    // canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            "/images/sancharika.png",
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
