import Container from 'components/Container'
import Link from 'next/link'
const initStripe = require('stripe')
import { processSubscription } from 'utils/payment'
import { useUser } from '@auth0/nextjs-auth0'
import MainLayout from 'layouts/main'
import { CheckIcon } from '@heroicons/react/outline'

const tiers = [
  {
    name: 'Standard',
    href: '#',
    priceMonthly: 49,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 79,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
]

const PricingPage = ({ plans }) => {
  const { user } = useUser()
  return (
    // <MainLayout>
    //   <Container>
    //     <div className="flex w-full items-center justify-center">
    //       {plans.map((plan) => (
    //         <div
    //           key={plan.id}
    //           className="h-80 w-80 mx-2 bg-white text-gray-700 flex flex-col"
    //         >
    //           <h2 className="text-4xl py-8 font-medium text-center border-b border-gray-300">
    //             {plan.name}
    //           </h2>
    //           <p className="flex-1 p-8 flex flex-col items-center">
    //             <span className="text-gray-600 text-3xl">
    //               ${plan.price / 100}
    //               <span className="text-gray-400 text-sm uppercase">
    //                 {plan.currency}
    //               </span>
    //             </span>
    //             <span className="text-xl text-gray-400">{plan.interval}ly</span>
    //           </p>
    //           {user ? (
    //             <button
    //               className="py-4 bg-green-200 text-center"
    //               onClick={() => processSubscription(plan.id)}
    //             >
    //               Subscribe
    //             </button>
    //           ) : (
    //             <Link href="/api/auth/login">
    //               <a className="py-4 bg-green-200 text-center">
    //                 Create account
    //               </a>
    //             </Link>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </Container>
    // </MainLayout>
    <MainLayout>
      <div className="bg-gray-900">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                Pricing
              </h2>
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                The right price for you, whoever you are
              </p>
              <p className="text-xl text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                sequi unde repudiandae natus.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gray-900" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div>
                        <h3
                          className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                          id="tier-standard"
                        >
                          {plan.name}
                        </h3>
                      </div>
                      <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                        ${plan.price / 100}
                        <span className="ml-1 text-2xl font-medium text-gray-500">
                          /mo
                        </span>
                      </div>
                      <p className="mt-5 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            Pariatur quod similique
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            Pariatur quod similique
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            Pariatur quod similique
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            Pariatur quod similique
                          </p>
                        </li>
                      </ul>
                      {/* {user ? (
                <button
                  className="py-4 bg-green-200 text-center"
                  onClick={() => processSubscription(plan.id)}
                >
                  Subscribe
                </button>
              ) : (
                <Link href="/api/auth/login">
                  <a className="py-4 bg-green-200 text-center">
                    Create account
                  </a>
                </Link>
              )}
                       */}
                      {user ? (
                        <div className="rounded-md shadow">
                          <button
                            onClick={() => processSubscription(plan.id)}
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                            aria-describedby="tier-standard"
                          >
                            Get started
                          </button>
                        </div>
                      ) : (
                        <div className="rounded-md shadow">
                          <Link href="/api/auth/login">
                            <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                              Create account
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
            <div className="max-w-md mx-auto lg:max-w-5xl">
              <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                <div className="flex-1">
                  <div>
                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                      Discounted
                    </h3>
                  </div>
                  <div className="mt-4 text-lg text-gray-600">
                    Get full access to all of standard license features for solo
                    projects that make less than $20k gross revenue for{' '}
                    <span className="font-semibold text-gray-900">$29</span>.
                  </div>
                </div>
                <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                  <a
                    href="#"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Buy Discounted License
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY)
  const { data: prices } = await stripe.prices.list()
  const plans = await Promise.all(
    prices.map(async (price) => {
      const product = await stripe.products.retrieve(price.product)
      return {
        id: price.id,
        name: product.name,
        price: price.unit_amount,
        interval: price.recurring.interval,
        currency: price.currency,
      }
    })
  )

  return {
    props: {
      plans: plans.reverse(),
    },
  }
}

export default PricingPage
