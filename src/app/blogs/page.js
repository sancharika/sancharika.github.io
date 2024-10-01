import React from 'react';
import HomePage from './home';  // Import the HomePage component
import { client } from '../../sanity/clients';

export default async function Home() {
  const stories = await fetchStories(); // Fetch stories directly in the component
  return <HomePage posts={stories} />;
}

// Function to fetch stories (can still remain separate)
async function fetchStories() {
  try {
    const stories = await client.fetch(`
      *[_type == "post"]{
        title,
        "slug": slug.current,
          author->{
            image{
          asset->{
            url
          },
          alt
        },
  name
          },
        mainImage {
          asset->{
            url
          },
          alt
        },
        publishedAt
      } | order(publishedAt desc)
    `);

    return stories; // Return the fetched stories
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
}


  // return (
  //   <div className="blogs-container">
  //     {/* Next.js Head component for SEO */}
  //     <Head>
  //       <meta charSet="utf-8" />
  //       <title>Blog - Sancharika</title>
  //       <meta name="description" content="Blogs - Sancharika" />
  //       <meta name="keyword" content="Blogs" />
  //       {/* <link rel="canonical" href="https://leapon.tech/blogs" /> */}
  //     </Head>

  //     <div className="recent-blogs">
  //       <p className="recent-blogs-title">RECENTLY POSTED</p>

  //       {/* Display a message when no blogs are available */}
  //       {stories.length === 0 ? <p className="no-blog">No Blog Available</p> : ""}

  //       <div className="blogs-features-card">
  //         <div className="row" style={{ width: "100%" }}>
  //           <div className="col-12">
  //             <div className="row">
  //               {stories.map((story, index) => (
  //                 <Link href={`/blogs/${story.slug}`} key={index}>
  //                   <div className="blogs-features-card-item2 col-12 col-lg-4">
  //                     <div className="blogs-features-card-img-con2">
  //                       {story.mainImage && story.mainImage.asset.url ? (
  //                         <Image
  //                           src={story.mainImage.asset.url}
  //                           alt={story.mainImage.alt || "Blog Image"}
  //                           width={500}
  //                           height={300}
  //                           loading="lazy"
  //                           className="blogs-features-card-img"
  //                         />
  //                       ) : (
  //                         <Image
  //                           src="/default-image.jpg" // Add a default image here
  //                           alt="featured"
  //                           loading="lazy"
  //                           width={500}
  //                           height={300}
  //                         />
  //                       )}
  //                     </div>

  //                     <p className="blogs-features-card-title">{story.title}</p>

  //                     <div className="blogs-features-details-con">
  //                       <div>
  //                         {/* <i className="fa-solid fa-circle"></i>
  //                         <p className="blogs-features-details-title">
  //                           {story.name} Author's name
  //                         </p> */}
  //                       </div>
  //                       <div>
  //                         <i className="fa-regular fa-calendar"></i>
  //                         <p className="blogs-features-details-title">
  //                           {story.publishedAt} {/* Published Date */}
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </Link>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );


