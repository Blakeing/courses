import { getCourses, getCourseBySlug } from 'utils/db'
import Container from 'components/Container'
import Link from 'next/link'
import MainLayout from '@layouts/main'

const messages = [
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  // More messages...
]

const CoursePage = ({ course: { title, price, description, lessons } }) => {
  const isFree = price === 0

  return (
    <MainLayout>
      <div className="bg-white ">
        <div className="max-w-7xl space-y-10 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Course
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {title}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {description}
            </p>
          </div>
          <div>
            <ul className="divide-y divide-gray-200">
              {lessons.map((lesson, i) => (
                <li
                  key={lesson.id}
                  className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                >
                  <div className="flex justify-between space-x-3">
                    <span className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                      {i + 1}.
                    </span>
                    <div className="min-w-0 flex-1">
                      <Link href={`/lesson/${lesson.slug}`}>
                        <a className="block focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {lesson.title}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {lesson.description}
                          </p>
                        </a>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticPaths = async () => {
  const courses = await getCourses()

  const paths = courses.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  console.log(slug)

  const course = await getCourseBySlug(slug)

  return {
    props: {
      course: JSON.parse(JSON.stringify(course)),
    },
  }
}

export default CoursePage
