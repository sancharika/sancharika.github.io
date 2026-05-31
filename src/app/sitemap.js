export default async function sitemap() {
  const baseUrl = 'https://sancharika.github.io';

  // Note: For a fully dynamic sitemap, you would fetch all blog slugs from Sanity here.
  // Example:
  // const blogs = await client.fetch(`*[_type == "post"]{ "slug": slug.current, publishedAt }`);
  // const blogUrls = blogs.map((post) => ({
  //   url: `${baseUrl}/blogs/${post.slug}`,
  //   lastModified: post.publishedAt || new Date(),
  // }));

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
  ];
}