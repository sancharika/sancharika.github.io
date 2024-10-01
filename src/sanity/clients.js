import {createClient} from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url";
  import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: 'ufypgguq',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true
})

// export function imageBuilder(source) {
//     return ImageUrlBuilder(client).image(source);
//   }

//   import { dataset, projectId } from "@/lib/sanity/config";
  
  const imageBuilder = createImageUrlBuilder(client);
  
  export const urlForImage = source => {
    if (!source || !source.asset || !source.asset.url) {
      console.error("Invalid source or missing URL:", source);
      return null;
    }
  
    const url = source.asset.url;
    console.log("url: ", url);
    
    
    // Extract dimensions from the URL (e.g., "-275x183" part)
    const regex = /-(\d+)x(\d+)\./; // Regex to capture dimensions before the file extension
    const match = url.match(regex);
  
    if (!match) {
      console.error("Invalid dimensions in URL:", url);
      return {
        src: url,
        width: 'auto',
        height: 'auto'
      }; // Return default dimensions if not found
    }
  
    const width = parseInt(match[1], 10);
    const height = parseInt(match[2], 10);
  
    // console.log(`Extracted dimensions: ${width}x${height}`);
  
    return {
      src: url,
      width: width,
      height: height
    };
  };
  