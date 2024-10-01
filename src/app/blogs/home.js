import Link from "next/link";
import Container from "../../components/container";  // Corrected path
import PostList from "../../components/postlist";
import { cx } from "../../utils/all";

export default function HomePage({ posts }) {
  return (
    <>
      {posts && (
        <Container className={cx("padding-top:100px")}>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10" style={{ paddingTop: '80px' }}>

            {posts.slice(0, 2).map(post => (
              <PostList
                key={post.slug.current}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post.slug.current} post={post} aspect="square" />
            ))}
          </div>
          {/* <div className="mt-10 flex justify-center">
            <Link
              href="/blogs"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div> */}
        </Container>
      )}
    </>
  );
}
