import PostPage from "./default";
import {client} from "../../../sanity/clients"


export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
//   console.log("params slug", post);

  return <PostPage post={post} />;
}

// export const revalidate = 60;

export async function getAllPostsSlugs() {
    const postquery = `
    *[_type == "post"]{
            title,
            "slug": slug.current,
            _createdAt,
            mainImage {
              asset->{
                url
              },
              alt
            },
            publishedAt
          } | order(publishedAt desc)
    `;
    if (client) {
      return (await client.fetch(postquery)) || [];
    }
    return [];
  }

  export async function getPostBySlug(slug) {
    console.log("getPostBySlug: ", slug);
  
    const singlequery = `
      *[slug.current == $slug][0] {
        title,
        body,
        publishedAt,
        _createdAt,
        author->{
             "mainImage": image{
          asset->{
            url
          },
          alt
        },
        name
          },
        "categories": categories[]->title,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        "headings": body[length(style) == 2 && string::startsWith(style, "h")],
        "slug": slug.current,
      }
    `;
    if (client) {
      return (await client.fetch(singlequery, { slug })) || {};
    }
    return {};
  }