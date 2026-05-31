import { client } from '../sanity/clients';

export default async function sitemap() {
  const baseUrl = 'https://sancharika.github.io';

  let blogUrls = [];

  try {
    // Fetch all post slugs and their published/updated dates from Sanity
    const blogs = await client.fetch(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt, _updatedAt }`);
    blogUrls = blogs.map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: post.publishedAt || post._updatedAt || new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...blogUrls,
  ];
}