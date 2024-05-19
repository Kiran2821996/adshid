import React, { useRef, useEffect } from 'react'
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion"

import Carousel from './courseCards/Carousel'



function CourseSelling() {

  const containerRef = useRef(null)

  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div className="overflow-hidden bg-black pt-16 lg:pt-14" id="shop-now" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            animate={mainControls}
            initial={{ opacity: 0, x: -100 }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
            className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              OUR COURSES <span className='text-amber-500'>TAILORED TO SHINE</span> WIDER
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Each Handpicks has been <span className='text-amber-500'>Crafted for professionals and students</span>, which empowers individuals to navigate through obstacles with renewed vigour.
            </p>
            <div className="mt-10 hidden lg:flex items-center justify-center gap-x-6 lg:justify-start">
              <motion.a
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                href="#connect-now"
                className="w-56 text-center rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                LET'S CONNECT
              </motion.a>
            </div>
          </motion.div>
          <div>
            <div className="-mt-2 p-2 w-full">
              <Carousel />
            </div>
          </div>
          <motion.div 
            animate={mainControls}
            initial={{opacity: 0,y:100}}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="lg:hidden flex items-center justify-center gap-x-6 lg:justify-start">
            <motion.a
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              href="#connect-now"
              className="w-56 text-center rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              LET'S CONNECT
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CourseSelling