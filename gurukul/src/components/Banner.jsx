import React from 'react'
import Author from "../assets/banner_images/author.png"
import {motion} from "framer-motion"

function Banner() {
  return (
    <div className="bg-black h-dvh" id="Banner">
      <div className="mx-auto h-dvh flex items-center max-w-7xl pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div className="relative w-full isolate overflow-hidden flex md:justify-between flex-col-reverse lg:flex-row">
          <motion.div 
          initial={{opacity: 0,x:100}}
          animate={{opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mx-auto w-full lg:max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                SPECIALIST IN MAKING <span className='text-amber-500'>MILLIONS TO SMILE</span> AND LIFT THEIR LIFE
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-x-6 lg:justify-start">
              <motion.a
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                href="#what-we-do"
                className="w-56 text-center mb-5 lg:mb-0 rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                GET STARTED
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.5 }}
                href="#shop-now" className="w-56 text-center text-lg font-semibold leading-6 text-white hover:text-amber-500">
                SHOP NOW <span aria-hidden="true">→</span>
              </motion.a>
            </motion.div>
          </motion.div>
          <div
           className="flex justify-center">
            <img
              className="img-max-width-cust"
              src={Author}
              alt="author"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner