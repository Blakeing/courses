import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";
import Tags from "@components/Post/Tags";
import { Config } from "@utils/Config";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import Image from "next/image";

export default function RecentPostList(props) {
  const { posts } = props;
  return (
    <>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Recent publications
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.sys.id}>
                <div>
                  <a className="inline-block">
                    {post.tags !== null && <Tags tags={post.tags} />}
                  </a>
                </div>
                <Link href={`${Config.pageMeta.blogIndex.slug}/${post.slug}`}>
                  <a className="block mt-4">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      <ReactMarkdown
                        children={post.excerpt}
                        renderers={ReactMarkdownRenderers(post.excerpt)}
                      />
                    </p>
                  </a>
                </Link>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a>
                      <span className="sr-only">Blake</span>

                      <Image
                        className="h-10 w-10 rounded-full"
                        // src={`${post.author.image.url}?w=256`}
                        src={post.author.image.url}
                        alt={post.author.image.description}
                        height={40}
                        width={40}
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <PublishedDate date={post.date} />
                      <span aria-hidden="true">&middot;</span>
                      <span>6 read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-12 bg-white px-4 py-3 flex items-center justify-end border-t border-gray-200 sm:px-6"
            aria-label="Pagination"
          >
            <Link href={Config.pageMeta.blogIndex.slug}>
              <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                See more articles
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
