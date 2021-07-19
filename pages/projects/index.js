import { createClient } from 'contentful'
import MainLayout from 'layouts/main'
import ProjectCard from '@components/ProjectCard'
import Breadcrumbs from '@components/Breadcrumbs'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({ content_type: 'project' })

  return {
    props: {
      projects: res.items,
    },
    revalidate: 1,
  }
}

export default function projects({ projects }) {
  return (
    <MainLayout>
      <Breadcrumbs />
      <div className="my-16 container mx-auto px-8">
        <ul
          role="list"
          className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </ul>
      </div>
    </MainLayout>
  )
}
