import Container from 'components/Container'
import Link from 'next/link'
import { getSession } from '@auth0/nextjs-auth0'
import axios from 'axios'
import { PrismaClient } from '@prisma/client'
import { processPayment } from 'utils/payment'
import Player from 'react-player/lazy'
import MainLayout from '@layouts/main'

const LessonPage = ({
  lesson: { title, videoUrl, courseId, description },
  user,
}) => {
  return (
    <MainLayout>
      <div className="bg-white">
        <div className="space-y-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Lesson
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {title}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {description}
            </p>
          </div>

          <div className="mt-8 flex justify-center w-full">
            {videoUrl ? (
              <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' }}>
                <Player
                  className="absolute inset-0"
                  width="100%"
                  height="100%"
                  url={videoUrl}
                  controls={true}
                />
              </div>
            ) : user ? (
              <>
                <div className="inline-flex rounded-md shadow">
                  <Link href="/pricing">
                    <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      Subscribe
                    </a>
                  </Link>
                </div>
                <div className="ml-3 inline-flex">
                  <button
                    onClick={() => processPayment(courseId)}
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                  >
                    Buy Course
                  </button>
                </div>
              </>
            ) : (
              <Link href="/api/auth/login">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Login
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = async ({ req, res, params }) => {
  const { slug } = params
  const session = await getSession(req, res)
  const email = session?.user?.email

  const prisma = new PrismaClient()

  const lesson = await prisma.lesson.findUnique({
    where: {
      slug,
    },
    include: {
      course: true,
    },
  })

  let user = null
  if (email) {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        courses: true,
      },
    })
  }

  await prisma.$disconnect()

  const userAllowedCourse =
    lesson.course.price === 0 ||
    user?.isSubscribed ||
    user?.courses.find((course) => course.id === lesson.course.id)

  if (!userAllowedCourse) {
    lesson.videoUrl = null
  }

  return {
    props: {
      lesson: JSON.parse(JSON.stringify(lesson)),
      user: session?.user || null,
    },
  }
}

export default LessonPage
