import React, { useEffect, useRef } from 'react'

import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion"


import Author from "../assets/banner_images/author.png"
import Author_bg from "../assets/about_us_images/ASH_7389.jpg"
import Author_ag from "../assets/about_us_images/IMG_7536.jpg"
import Author_jh from "../assets/about_us_images/IMG_7538.jpg"
import Author_ch from "../assets/about_us_images/ASH_7389.png"
import Author_23 from "../assets/about_us_images/SDF12.jpg"
import Author_24 from "../assets/about_us_images/SDF23.jpg"
import Author_25 from "../assets/about_us_images/SDF56.jpg"





function AboutUs() {

  const containerRef = useRef(null)

  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  )

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  )

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])



  return (
    <div className="relative overflow-hidden bg-black pb-16 lg:pb-0" id="what-we-do" ref={containerRef}>
      <div className="pt-16  sm:pt-24  lg:pt-28">
        <div className="relative justify-between items-center flex-col flex mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 sm:flex-row">
          <motion.div
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ delay: 0.5 }}
            className="sm:max-w-48">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                OUR STORY
              </h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-5xl text-amber-500">
                SHAKING THINGS UP
              </h3>
            </div>
            <p className="mt-4 text-xl text-gray-300">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </motion.div>
          <motion.div
            style={{ translateX: paragraphOneValue }}
            className="mx-5 mt-8 flex lg:hidden overflow-hidden">
            <img
              className="img-max-width-cust"
              src={Author_ch}
              alt="author"
            />
            <img
              className="img-max-width-cust"
              src={Author_25}
              alt="author"
            />
          </motion.div>
          <motion.div
            style={{ translateX: paragraphOneValue }}
            className="mx-10 hidden lg:block overflow-hidden">
            {/* Decorative image grid */}
            <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                  <img
                    src={Author_24}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src={Author_bg}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src={Author_25}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src={Author_23}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div
            
            className='mt-4 flex-col items-center justify-center text-xl text-gray-300 w-full sm:max-w-96 '>
            <motion.p 
            style={{ translateX: paragraphTwoValue }}
            className='mt-4 text-xl text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi animi soluta tenetur eaque magnam repudiandae ipsum eveniet? Maiores ut sit, repellendus, in voluptatum blanditiis vel vitae, voluptates suscipit odit est libero. Quaerat aliquam similique corrupti quas quia magni, quo fugiat dolorem ullam, inventore magnam fuga possimus eveniet dolore necessitatibus laboriosam.</motion.p>
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              className="mt-10 w-full flex items-center justify-center gap-x-6 md:justify-start lg:justify-start">
              <motion.a
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                href="#shop-now"
                className="w-56  text-center rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                COURSES OFFERED
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs








