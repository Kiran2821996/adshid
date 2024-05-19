import React, { useRef, useEffect, useState, Fragment } from 'react'
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence
} from "framer-motion"
import { Dialog, Transition } from '@headlessui/react'
import { HeartIcon } from '@heroicons/react/24/solid'
import axios from 'axios'

import PrivacyPolicy from './dialogues/PrivacyPolicy'

import Youtube from "../assets/footer_images/video.png"
import Facebook from "../assets/footer_images/facebook.png"
import Twitter from "../assets/footer_images/twitter.png"
import Instagram from "../assets/footer_images/social-media.png"
import TermsAndCondition from './dialogues/TermsAndCondition'

function Footer() {


  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef(null)

  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])


  const [open, setOpen] = useState(false)
  const [openpp, setOpenpp] = useState(false)
  const [opentc, setOpentc] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    let isValid = true;
    const errors = {};

    if (!formData.name) {
      isValid = false;
      errors.name = 'Name is required';
    }

    if (!formData.phone) {
      isValid = false;
      errors.phone = 'Phone number is required';
    } else if (!/^(\+?\d{1,4})?\d{10}$/.test(formData.phone)) {
      isValid = false;
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email) {
      isValid = false;
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message) {
      isValid = false;
      errors.message = 'Message is required';
    }

    if (!isValid) {
      setFormErrors(errors);
    } else {
      // Form is valid, submit the form or perform further actions
      // For example, you can make an API call here to submit the form data
      try {
        const config = {
          url: "/contact/addcontact",
          baseURL: "https://abhishad.onrender.com/api",
          method: "post",
          header: { "Content-type": "application/json" },
          data: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
          },
        };

        let response = await axios(config);


        if (response.status === 200) {
          setIsVisible(!isVisible)
          setOpen(true);
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
          });

        }
      } catch (error) {
        console.error("error", error);
      }
    }
  };


  const cancelButtonRef = useRef(null)
  return (
    <div className="relative isolate overflow-hidden bg-black pt-16" id='connect-now' ref={containerRef}>
      <div className="mx-auto flex items-center px-4 sm:static sm:px-6 lg:px-8">
        <div className="relative w-full isolate overflow-hidden flex md:justify-between flex-col  lg:flex-row mx-auto max-w-7xl px-0 lg:px-8">
          <motion.div
            animate={mainControls}
            initial={{ opacity: 0, y: 100 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="mx-auto w-full lg:max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              GET IN TOUCH
            </h2>
            <h2 className="text-3xl font-bold tracking-tight text-amber-500 sm:text-5xl">
              LETS TALK AROUND
            </h2>
            <div className="mt-0 lg:mt-10 flex flex-col items-center lg:items-start justify-items-start gap-x-6">
              <a href='XXXXXXXXXXXXX@hotmail.com' className="mt-6 text-xl leading-8 text-white underline decoration-amber-500">
                MAIL: XXXXXXXXXXXXX@hotmail.com
              </a>
              <a href='tel:+91 24444444444444' className="mt-2 lg:mt-6 text-xl leading-8 text-white underline decoration-amber-500">
                CALL: +91 24444444444444
              </a>
            </div>

            <div className="mt-10  gap-x-6  hidden lg:block">
              <p className="mt-6 text-3xl leading-8 text-white font-medium">
                FOLLOW US
              </p>
              <div className='flex gap-x-3 items-center justify-content-center  mt-4'>
                <motion.a
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.9 }} href="#">
                  <img
                    className='w-14 h-14'
                    src={Youtube}
                    alt="youtube"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.9 }}
                  href="#">
                  <img
                    className='w-12 h-12'
                    src={Instagram}
                    alt="instagram"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.9 }}
                  href="#">
                  <img
                    className='w-10 h-10 me-1'
                    src={Facebook}
                    alt="facebook"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.9 }}
                  href="#">
                  <img
                    className='w-10 h-10'
                    src={Twitter}
                    alt="twitter"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <AnimatePresence mode="popLayout">
            {isVisible && (
              <motion.div
                initial={{
                  rotate: "180deg",
                  scale: 0,
                  y: 0,
                }}
                animate={{
                  rotate: "0deg",
                  scale: 1,
                  y: [0, 150, -150, -150, 0],
                }}
                exit={{
                  rotate: "180deg",
                  scale: 0,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "backInOut",
                  times: [0, 0.25, 0.5, 0.85, 1],
                }}>
                <motion.div
                  animate={mainControls}
                  initial={{ opacity: 0, y: 100 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{ duration: 1, ease: "easeIn", delay: 0.8 }}
                  className="flex justify-center mt-8">
                  <div className="max-w-xl lg:max-w-lg border-solid border-2 border-slate-50 p-4 h-fit">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">REACH TO <span className='text-amber-500'>US</span></h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                      Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                      dolore.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="mt-6 max-w-lg gap-x-4">
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 ${formErrors.name ? 'border-red-500' : ''
                            }`}
                          placeholder="Enter your name"
                        />
                        {formErrors.name && (
                          <p className="text-red-500">{formErrors.name}</p>
                        )}
                      </div>
                      <div className="mt-6  max-w-lg gap-x-4">
                        <label htmlFor="phone" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 ${formErrors.phone ? 'border-red-500' : ''
                            }`}
                          placeholder="Enter your phone number"
                        />
                        {formErrors.phone && (
                          <p className="text-red-500">{formErrors.phone}</p>
                        )}
                      </div>
                      <div className="mt-6 max-w-lg gap-x-4">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 ${formErrors.email ? 'border-red-500' : ''
                            }`}
                          placeholder="Enter your email"
                        />
                        {formErrors.email && (
                          <p className="text-red-500">{formErrors.email}</p>
                        )}
                      </div>
                      <div className="mt-6  max-w-lg gap-x-4">
                        <label htmlFor="message" className="sr-only">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          style={{ minHeight: '72px', maxHeight: '240px', resize: 'none' }}
                          className={`w-full min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10  focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 ${formErrors.message ? 'border-red-500' : ''
                            }`}
                          placeholder="Enter your message"
                        ></textarea>
                        {formErrors.message && (
                          <p className="text-red-500">{formErrors.message}</p>
                        )}
                      </div>
                      <div className="mt-6 flex max-w-lg lg:text-left text-center gap-x-4 justify-end">
                        <motion.button
                          whileHover={{ scale: 0.9 }}
                          whileTap={{ scale: 0.9 }}
                          type="submit"
                          className="w-full lg:w-56 text-center lg:mb-0 rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          SUBMIT
                        </motion.button>
                      </div>
                    </form>

                  </div>
                </motion.div>
              </motion.div>

            )}
          </AnimatePresence>
          <motion.div
            animate={mainControls}
            initial={{ opacity: 0, y: 100 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ duration: 1, ease: "easeIn", delay: 1 }}
            className="my-5 gap-x-6 flex justify-center items-center lg:hidden block">
            <p className="text-2xl leading-8 text-white font-medium">
              FOLLOW US
            </p>
            <div className='flex gap-x-2 items-center justify-content-center'>
              <motion.a
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                href="">
                <img
                  className='w-7 h-7'
                  src={Youtube}
                  alt="youtube"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                href="">
                <img
                  className='w-6 h-6'
                  src={Instagram}
                  alt="instagram"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                href="">
                <img
                  className='w-5 h-5 me-1'
                  src={Facebook}
                  alt="facebook"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.9 }}
                href="">
                <img
                  className='w-5 h-5'
                  src={Twitter}
                  alt="twitter"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <div id='TC&PP' className='mx-auto bg-grey-cust flex justify-between items-center px-4 py-3  sm:static sm:px-6 lg:px-8 lg:py-6'>
        <p className='text-white p-1 w-3/5 lg:w-2/5'>©️ 2024 ABHISHADGURU All Rights Reserved.</p>
        <div className='mx-auto w-3/5 lg:w-3/5 flex flex-col lg:flex-row justify-end items-end lg:items-center px-0 sm:static'>
          <button onClick={() => setOpenpp(true)} className='text-white p-1 lg:me-4 hover:hover:text-amber-500'>PRIVACY POLICY</button>
          <button onClick={() => setOpentc(true)} className='text-white p-1 hover:hover:text-amber-500'>TERMS AND CONDITION</button>
        </div>
      </div>
      {/* thank you dialogue */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="flex items-center text-base lg:text-2xl font-semibold leading-6 text-gray-900">
                          THANK YOU! <HeartIcon className="w-6 h-5 md:w-12 md:h-11 lg:w-12 lg:h-11 text-amber-500 " />
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md lg:text-xl text-gray-500">
                            Message Submitted successfully ! Our Team reach you soon.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-md font-semibold text-amber-500 shadow-sm hover:bg-amber-500 hover:text-white sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Privacy policy dialogue*/}
      <PrivacyPolicy isOpen={openpp} onClose={setOpenpp} />
      {/* Terms and condition dialogue*/}
      <TermsAndCondition isOpen={opentc} onClose={setOpentc} />
    </div >
  )
}

export default Footer