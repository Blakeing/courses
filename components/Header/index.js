import Link from 'next/link'
// import { useSession, signOut } from "next-auth/client";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'

import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  },
]

const menuItems = [
  {
    title: 'Dashboard',
    slug: '/dashboard',
    requiresAuth: true,
  },
  {
    title: 'Pricing',
    slug: '/pricing',
    requiresAuth: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  // const [session, loading] = useSession();

  // function logoutHandler() {
  //   signOut();
  // }

  const { user, error, isLoading } = useUser()
  const { pathname } = useRouter()

  return (
    <>
      <Popover as="header" className="relative bg-white">
        {({ open }) => (
          <>
            <div
              className="absolute inset-0 z-30 shadow pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-20">
              <div className="container flex items-center justify-between px-4 py-5 mx-auto sm:px-6 lg:px-8 sm:py-4 md:justify-start md:space-x-10">
                <div>
                  <Link href="/">
                    <a className="flex">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="w-auto h-8 sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="-my-2 -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div
                  style={{ minHeight: '42px' }}
                  className="hidden md:flex-1 md:flex md:items-center md:justify-between"
                >
                  <Popover.Group as="nav" className="flex space-x-10">
                    {menuItems.map(({ title, slug, requiresAuth }) => {
                      const showItem = !requiresAuth || (requiresAuth && user)
                      return showItem ? (
                        <Link href={slug} key={slug}>
                          <a
                            className={`text-base font-medium text-gray-500 hover:text-gray-900 ${
                              pathname === slug ? 'text-gray-900' : ''
                            }`}
                          >
                            {title}
                          </a>
                        </Link>
                      ) : null
                    })}
                    <Link href="/gallery">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Gallery
                      </a>
                    </Link>
                    <Link href="/events">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Events
                      </a>
                    </Link>
                    <Link href="/projects">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Projects
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Blog
                      </a>
                    </Link>

                    {/* {session && (
                      <Link href="/blog">
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                          Blog
                        </a>
                      </Link>
                    )} */}
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                            )}
                          >
                            <span>Solutions</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute inset-x-0 z-10 hidden transform bg-white shadow-lg md:block top-full"
                            >
                              <div className="grid px-4 py-6 mx-auto max-w-7xl gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                {solutions.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex md:h-full lg:flex-col">
                                      <div className="flex-shrink-0">
                                        <span className="inline-flex items-center justify-center w-10 h-10 text-white bg-orange-500 rounded-md sm:h-12 sm:w-12">
                                          <item.icon
                                            className="w-6 h-6"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </div>
                                      <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                        <div>
                                          <p className="text-base font-medium text-gray-900">
                                            {item.name}
                                          </p>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {item.description}
                                          </p>
                                        </div>
                                        <p className="mt-2 text-sm font-medium text-orange-600 lg:mt-4">
                                          Learn more{' '}
                                          <span aria-hidden="true">&rarr;</span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="bg-gray-50">
                                <div className="px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                  {callsToAction.map((item) => (
                                    <div key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                                      >
                                        <item.icon
                                          className="flex-shrink-0 w-6 h-6 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-3">
                                          {item.name}
                                        </span>
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                            )}
                          >
                            <span>More</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute inset-x-0 z-10 hidden transform shadow-lg md:block top-full"
                            >
                              <div className="absolute inset-0 flex">
                                <div className="w-1/2 bg-white" />
                                <div className="w-1/2 bg-gray-50" />
                              </div>
                              <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                                <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                  <div>
                                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                      Company
                                    </h3>
                                    <ul className="mt-5 space-y-6">
                                      {company.map((item) => (
                                        <li
                                          key={item.name}
                                          className="flow-root"
                                        >
                                          <a
                                            href={item.href}
                                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                          >
                                            <item.icon
                                              className="flex-shrink-0 w-6 h-6 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span className="ml-4">
                                              {item.name}
                                            </span>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                      Resources
                                    </h3>
                                    <ul className="mt-5 space-y-6">
                                      {resources.map((item) => (
                                        <li
                                          key={item.name}
                                          className="flow-root"
                                        >
                                          <a
                                            href={item.href}
                                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                          >
                                            <item.icon
                                              className="flex-shrink-0 w-6 h-6 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span className="ml-4">
                                              {item.name}
                                            </span>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </nav>
                                <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                  <div>
                                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                      From the blog
                                    </h3>
                                    <ul className="mt-6 space-y-6">
                                      {blogPosts.map((post) => (
                                        <li key={post.id} className="flow-root">
                                          <a
                                            href={post.href}
                                            className="flex p-3 -m-3 rounded-lg hover:bg-gray-100"
                                          >
                                            <div className="flex-shrink-0 hidden sm:block">
                                              <img
                                                className="object-cover w-32 h-20 rounded-md"
                                                src={post.imageUrl}
                                                alt=""
                                              />
                                            </div>
                                            <div className="flex-1 w-0 sm:ml-8">
                                              <h4 className="text-base font-medium text-gray-900 truncate">
                                                {post.name}
                                              </h4>
                                              <p className="mt-1 text-sm text-gray-500">
                                                {post.preview}
                                              </p>
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="mt-6 text-sm font-medium">
                                    <a
                                      href="#"
                                      className="text-orange-600 hover:text-orange-500"
                                    >
                                      {' '}
                                      View all posts{' '}
                                      <span aria-hidden="true">&rarr;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                  <div className="flex items-center md:ml-12">
                    <>
                      {/* {!session && !loading && (
                        <Link href="/login">
                          <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-orange-600 border border-transparent rounded-md shadow-sm hover:bg-orange-700">
                            Login
                          </a>
                        </Link>
                      )}
                      {session && (
                        <Link href="/profile">
                          <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Profile
                          </a>
                        </Link>
                      )}

                      {session && (
                        <button
                          className="focus:ring-0 focus:outline-none inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-orange-600 border border-transparent rounded-md shadow-sm hover:bg-orange-700"
                          onClick={logoutHandler}
                        >
                          Logout
                        </button>
                      )} */}

                      {user ? (
                        <a
                          className="text-base font-medium text-gray-500 hover:text-gray-900"
                          href="/api/auth/logout"
                        >
                          Logout
                        </a>
                      ) : (
                        <a
                          className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-orange-600 border border-transparent rounded-md shadow-sm hover:bg-orange-700"
                          href="/api/auth/login"
                        >
                          Login
                        </a>
                      )}
                      {/* <Link href="/signin">
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                          Sign in
                        </a>
                      </Link>

                      <Link href="/signup">
                        <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-orange-600 border border-transparent rounded-md shadow-sm hover:bg-orange-700">
                          Sign up
                        </a>
                      </Link> */}
                    </>
                  </div>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
              >
                <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                  <div className="px-5 pt-5 pb-6 sm:pb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8">
                      <nav>
                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-orange-500 rounded-md sm:h-12 sm:w-12">
                                <item.icon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4 text-base font-medium text-gray-900">
                                {item.name}
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="mt-8 text-base">
                          <a
                            href="#"
                            className="font-medium text-orange-600 hover:text-orange-500"
                          >
                            {' '}
                            View all products{' '}
                            <span aria-hidden="true">&rarr;</span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="px-5 py-6">
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                      >
                        Pricing
                      </a>

                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                      >
                        Docs
                      </a>

                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                      >
                        Company
                      </a>

                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                      >
                        Resources
                      </a>

                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                      >
                        Blog
                      </a>

                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                      >
                        Contact Sales
                      </a>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-orange-600 border border-transparent rounded-md shadow-sm hover:bg-orange-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-base font-medium text-center text-gray-500">
                        Existing customer?{' '}
                        <a
                          href="#"
                          className="text-orange-600 hover:text-orange-500"
                        >
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}

export default Header
