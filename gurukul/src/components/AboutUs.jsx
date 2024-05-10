import React from 'react'
import Author from "../assets/banner_images/author.png"
import Author_bg from "../assets/about_us_images/ASH_7389.jpg"
import Author_ag from "../assets/about_us_images/IMG_7536.jpg"
import Author_jh from "../assets/about_us_images/IMG_7538.jpg"
import Author_ch from "../assets/about_us_images/ASH_7389.png"

function AboutUs() {
  return (
    <div className="relative overflow-hidden bg-black pb-16 lg:pb-0" id="what-we-do">
      <div className="pt-16  sm:pt-24  lg:pt-28">
        <div className="relative justify-between items-center flex-col flex mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 sm:flex-row">
          <div className="sm:max-w-48">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              OUR STORY
            </h2>
            <h3 className="text-3xl font-bold tracking-tight sm:text-5xl text-amber-500">
              SHAKING THINGS UP
            </h3>

            <p className="mt-4 text-xl text-gray-300">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div className="mx-10 block lg:hidden overflow-hidden">
            <img
              className="img-max-width-cust"
              src={Author_ch}
              alt="author"
            />
          </div>
          <div className="mx-10 hidden lg:block overflow-hidden">
            {/* Decorative image grid */}
            <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                  <img
                    src={Author_bg}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src={Author_ag}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src={Author}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src={Author_jh}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='mt-4 flex-col items-center justify-center text-xl text-gray-300 w-full sm:max-w-96 '>
            <p className='mt-4 text-xl text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi animi soluta tenetur eaque magnam repudiandae ipsum eveniet? Maiores ut sit, repellendus, in voluptatum blanditiis vel vitae, voluptates suscipit odit est libero. Quaerat aliquam similique corrupti quas quia magni, quo fugiat dolorem ullam, inventore magnam fuga possimus eveniet dolore necessitatibus laboriosam.</p>
            <div className="mt-10 w-full flex items-center justify-center gap-x-6 md:justify-start lg:justify-start">
              <a
                href="#shop-now"
                className="w-56  text-center rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                COURSES OFFERED
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs








