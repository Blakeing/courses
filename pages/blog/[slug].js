import ContentfulApi from '@utils/ContentfulApi'
import Post from '@components/Post'
import { Config } from '@utils/Config'
import PageMeta from '@components/PageMeta'
import MainLayout from '@layouts/main'

export default function PostWrapper(props) {
  const { post, preview } = props

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
        canonical={post.externalUrl ? post.externalUrl : false}
      />
      <div className=" max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
        <Post post={post} />
      </div>
    </MainLayout>
  )
}

export async function getStaticPaths() {
  const blogPostSlugs = await ContentfulApi.getAllPostSlugs()

  const paths = blogPostSlugs.map((slug) => {
    return { params: { slug } }
  })

  // Using fallback: "blocking" here enables preview mode for unpublished blog slugs
  // on production
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params, preview = false }) {
  const post = await ContentfulApi.getPostBySlug(params.slug, {
    preview: preview,
  })

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      preview,
      post,
    },
  }
}
