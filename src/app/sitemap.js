import { client } from '../sanity/clients';

export default async function sitemap() {
  const baseUrl = 'https://sancharika.github.io/';

  let blogUrls = [];

  try {
    // Fetch all post slugs and their published/updated dates from Sanity
    const blogs = await client.fetch(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt, _updatedAt }`);
    blogUrls = blogs.map((post) => ({
      url: `${baseUrl}blogs/${post.slug}/`,
      lastModified: new Date(post.publishedAt || post._updatedAt || Date.now()).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}blogs/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}about/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}experience/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}projects/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}skills/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}publications/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}contact/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...blogUrls,
  ];
}