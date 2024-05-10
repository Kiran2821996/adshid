import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Carousel from './courseCards/Carousel'


const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

function CourseSelling() {
  return (
    <div className="overflow-hidden bg-black" id="shop-now">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              OUR COURSES <span className='text-amber-500'>TAILORED TO SHINE</span> WIDER
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Each Handpicks has been <span className='text-amber-500'>Crafted for professionals and students</span>, which empowers individuals to navigate through obstacles with renewed vigour.
            </p>
            <div className="mt-10 hidden lg:flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#connect-now"
                className="w-56 text-center rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                LET'S CONNECT
              </a>
            </div>
          </div>
          <div>
            <div className="-mt-2 p-2 w-full">
              <Carousel/>
            </div>
          </div>
          <div className="lg:hidden flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#connect-now"
                className="w-56 text-center rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                LET'S CONNECT
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSelling