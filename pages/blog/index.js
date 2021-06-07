import ContentfulApi from '@utils/ContentfulApi'
import { Config } from '@utils/Config'
import PageMeta from '@components/PageMeta'
import PostList from '@components/PostList'
import MainLayout from '@layouts/main'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'
import { useEffect, useState } from 'react'

export default function BlogIndex(props) {
  const { postSummaries, currentPage, totalPages, pageContent, preview } = props

  /**
   * This provides some fallback values to PageMeta so that a pageContent
   * entry is not required for /blog
   */
  const pageTitle = pageContent ? pageContent.title : 'Blog'
  const pageDescription = pageContent
    ? pageContent.description
    : 'Articles | Next.js Contentful blog starter'

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        url={Config.pageMeta.blogIndex.url}
      />

      {/* {pageContent.heroBanner !== null && (
        <HeroBanner data={pageContent.heroBanner} />
      )} */}

      {/* {pageContent.body && (
          <PageContentWrapper>
            <RichTextPageContent richTextBodyField={pageContent.body} />
          </PageContentWrapper>
        )} */}
      <PostList
        posts={postSummaries}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </MainLayout>
  )
}

export async function getStaticProps({ preview = false }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1)
  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    }
  )

  const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize)

  // console.log(postSummaries);

  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: '1',
      pageContent: pageContent || null,
    },
  }
}
