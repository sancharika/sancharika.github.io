// app/blogs/page.js
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
