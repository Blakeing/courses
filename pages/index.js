import { getCourses } from 'utils/db'
import { useUser } from '@auth0/nextjs-auth0'
import Container from 'components/Container'
import Link from 'next/link'
import MainLayout from '@layouts/main'
import Image from 'next/image'
import HeroBanner from '@components/HeroBanner'

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const Index = ({ courses }) => {
  const { user } = useUser()

  return (
    // <MainLayout>
    //   <Container>
    //     <div>
    //       <div className="flex flex-wrap">
    //         {courses.map(({ title, slug, price }) => {
    //           const isFree = price === 0

    //           return (
    //             <Link href={`/course/${slug}`} key={slug}>
    //               <a className="bg-white mx-2 my-2 text-gray-600 w-56 px-8 pt-8 pb-8 rounded-md relative">
    //                 <h1 className="">{title}</h1>
    //                 <span
    //                   className={`${
    //                     isFree ? 'bg-green-200' : 'bg-pink-200'
    //                   } absolute bottom-1 right-1 rounded-md py-2 px-4 text-xs`}
    //                 >
    //                   {isFree ? 'Free' : `$${price / 100}`}
    //                 </span>
    //               </a>
    //             </Link>
    //           )
    //         })}
    //       </div>
    //     </div>
    //   </Container>
    // </MainLayout>
    <MainLayout>
      <HeroBanner />
      <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Courses
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="my-16 container mx-auto px-8">
            <ul
              role="list"
              className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {courses.map((course) => {
                const isFree = course.price === 0
                return (
                  <li key={course.slug} className="relative space-y-5">
                    <div className="focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 group block w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                      <Image
                        className="group-hover:opacity-75 object-cover "
                        layout="fill"
                        src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      />
                      <Link href={`/course/${course.slug}`}>
                        <a className="focus:outline-none absolute inset-0" />
                      </Link>
                    </div>
                    <div>
                      <p className=" block text-sm font-medium text-gray-900 truncate pointer-events-none">
                        {course.title}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`${
                          isFree ? 'bg-green-200' : 'bg-pink-200'
                        }  rounded-md py-2 px-4 text-xs`}
                      >
                        {isFree ? 'Free' : `$${course.price / 100}`}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const data = await getCourses()

  return {
    props: {
      courses: JSON.parse(JSON.stringify(data)),
    },
  }
}

export default Index
