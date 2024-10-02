import Image from "next/image";
import Link from "next/link";
import Container from "../../../components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../sanity/clients";
import { parseISO, format } from "date-fns";

const SampleImageComponent = ({ value, isInline }) => {
  const { url, width, height } = urlForImage(value);
  console.log("value", value);
  
  const imageUrl = urlBuilder(client)
    .image(value)
    .width(isInline ? 100 : 800)
    .fit('max')
    .auto('format')
    .url();

  return (
    <div style={{
      display: isInline ? 'inline-block' : 'block',
      marginBottom: '20px',
      aspectRatio: width / height,
      position: 'relative',
      width: isInline ? '100px' : '800px',
      height: isInline ? `${(height / width) * 100}px` : `${(height / width) * 800}px`,
    }}>
      <Image
        src={imageUrl}
        alt={value.alt || ' '}
        layout="fill"
        objectFit="contain"
        sizes={isInline ? '100px' : '800px'}
      />
    </div>
  );
};

const components = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    h1: ({ children }) => {
      const textContent = children && typeof children[0] === 'string' ? children[0] : '';
      const id = textContent.replace(/\s+/g, "-").toLowerCase();
      return <h1 id={id}>{children}</h1>;
    },
    h2: ({ children }) => {
      const textContent = children && typeof children[0] === 'string' ? children[0] : '';
      const id = textContent.replace(/\s+/g, "-").toLowerCase();
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }) => {
      const textContent = children
        .map(child => {
          if (typeof child === 'string') {
            return child;
          }
          return child?.props?.text || '';
        })
        .join('');
      const id = textContent.replace(/\s+/g, "-").toLowerCase();
      return <h3 className="h3" id={id}>{children}</h3>;
    },
    h4: ({ children }) => {
      const textContent = children && typeof children[0] === 'string' ? children[0] : '';
      const id = textContent.replace(/\s+/g, "-").toLowerCase();
      return <h4 id={id}>{children}</h4>;
    },
    blockquote: ({ children }) => (
      <blockquote className="custom-blockquote">
        {children}
      </blockquote>
    ),
    default: ({ children }) => (
      <div style={{ marginBottom: '15px' }}>{children}</div>
    ),
    normal: ({ children }) => <p style={{ marginBottom: '20px' }}>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#';
      return (
        <a
          href={href}
          style={{
            textDecoration: 'none',
            borderBottom: '2px solid',
            borderBottomColor: '#bd9ada',
            position: 'relative',
          }}
        >
          {children}
        </a>
      );
    },
  },
};

export default function Post(props) {
  const { post } = props;

  const slug = post?.slug;
  // console.log("props:", post.author);

  if (!slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;

  const AuthorimageProps = post?.author?.mainImage
    ? urlForImage(post.author.mainImage)
    : null;

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          
        
        <h1 className="heading-primary" style={{
  textAlign: "center", 
  paddingTop: "60px" 
}}>
              <span>{post.title}</span>
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 flex-shrink-0">
                {AuthorimageProps && (
                  <Link href={`/`}>
                    <Image
                      src={AuthorimageProps.src}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      height={400}
                      width={500}
                      sizes="(max-width: 768px) 100vw, 700px" // Responsive sizes
                    />
                  </Link>
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <Link href={`/`}>
                    {post.author.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post._createdAt}>
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <span>· {post.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600"
           style={{ color: '#e9dfec' }}>
            {post.body && <PortableText 
            value={post.body}
            components={components} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/blogs"
              className="bg-brand-secondary/20 rounded-full px-5 py-2" 
              style={{ color: '#924eca' , fontSize: "25px"}}>

              ← View all posts
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
}

// const MainImage = ({ image }) => {
//   return (
//     <div className="mb-12 mt-12 ">
//       <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
//       <figcaption className="text-center ">
//         {image.caption && (
//           <span className="text-sm italic text-gray-600 dark:text-gray-400">
//             {image.caption}
//           </span>
//         )}
//       </figcaption>
//     </div>
//   );
// };
