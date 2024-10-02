import Image from "next/image";
import Link from "next/link";
import { cx } from "../utils/all";
import { urlForImage } from "../sanity/clients";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function PostList({
  post,
  aspect,
  minimal,
  preloadImage,
  fontWeight
}) {
  const imageProps = post?.mainImage
    ? urlForImage(post.mainImage)
    : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;
  // console.log(post.author.image);
  
  return (
    <>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cx(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
          )}>
          <Link
            className={cx(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            href={`/blogs/${post.slug}`}>
            {imageProps ? (
              <Image
                src={imageProps.src}
                {...(post.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: post.mainImage.blurDataURL
                })}
                alt={post.mainImage.alt || "Thumbnail"}
                priority={preloadImage ? true : false}
                className="object-cover transition-all"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div className={cx(minimal && "flex items-center")}>
          <div>
            <h2
              className={cx(
               
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}>
              <Link
               href={`/blogs/${post.slug}`}>
                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_5px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_5px]
      dark:from-purple-800 dark:to-purple-900">
                  {post.title}
                </span>
              </Link>
            </h2>

            <div className="hidden">
              {post.excerpt && (
                <p className="mt-2 line-clamp-3 text-gray-500 dark:text-gray-400">
                  <Link
                    href={`/blogs/${post.slug}`}>
                    {post.excerpt}
                  </Link>
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <Link href={`/`} className="author-link">
                <div className="flex items-center gap-3">
                  <div className="relative h-12
                   w-12
                   flex-shrink-0">
                    {post?.author?.image && (
                      <Image
                        src={AuthorimageProps.src}
                        alt={post?.author?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="20px"
                      />
                    )}
                  </div>
                  <span className="truncate text-2xl">
                    {post?.author?.name}
                  </span>
                </div>
              </Link>
              <span className=" text-gray-300 dark:text-gray-600">
                &bull;
              </span>
                
              
              
              <time
    className="truncate text-2xl"
    dateTime={post?.publishedAt || post?._createdAt || new Date().toISOString()}>
    {post?.publishedAt || post?._createdAt ? (
      format(
        parseISO(post.publishedAt || post._createdAt),
        "MMMM dd, yyyy"
      )
    ) : (
      "October 1, 2024" // Fallback text if no date is available
    )}
  </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
