import { ImageResponse } from "@vercel/og";
import { getPostBySlug } from "./default";
import OgImage from "@/components/ogimage";

// const InterRegular = fetch(
//   new URL("../../../../public/fonts/Inter.ttf", import.meta.url)
// ).then(res => res.arrayBuffer());


export default async function handler({ params }) {
  const post = await getPostBySlug(params.slug);

  
  return new ImageResponse(<OgImage post={post} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: fontData,
        style: "normal"
      }
      // {
      //   name: "Inter",
      //   data: interBoldFont,
      //   style: "normal",
      //   weight: 700
      // }
    ]
  });
}
