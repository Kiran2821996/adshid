import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/solid'

import Cart from './cart/Cart'
import Logo from '../assets/header_images/cmpLogo.png'

const navigation = [
  { name: 'WHAT WE DO', href: '#what-we-do', id: 'what-we-do' },
  { name: 'SHOP NOW', href: '#shop-now', id: 'shop-now' },
  { name: 'CONNECT', href: '#connect-now', id: 'connect-now' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [currentSection, setCurrentSection] = useState(null);
  const [open, setOpen] = useState(false)
  const [openpd, setOpenpd] = useState(false)
  const [openpg, setOpenpg] = useState(false)


  const cancelButtonRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Observe each section
    navigation.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCheckout = () => {
    setOpen(true)
    setOpenpd(true)
  }

  const handlePayment = () => {
    setOpen(true)
    setOpenpd(true)
    setOpenpg(true)
  }

  const handleNavigationClick = (id) => {
    setCurrentSection(id);
  };
  return (
    <>

      <Disclosure as="nav" className="bg-grey-cust fixed w-screen z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between flex-row-reverse">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                  <div className="hidden sm:mr-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => handleNavigationClick(item.id)}
                          className={classNames(
                            currentSection === item.id ? 'bg-gray-900 text-amber-500' : 'text-white hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm text-xl'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <Cart/>
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                  <a href="#Banner">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className='lg:w-24 lg:h-12 w-12 h-6'
                        src={Logo}
                        alt="Company-logo"
                      />
                      <h1 className='text-white text-xl lg:text-3xl subpixel-antialiased font-black mx-1.5'>ABHISHADGURU</h1>
                    </div>
                  </a>
                  
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Shopping cart dialogue */}
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                      <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <Dialog.Title as="h3" className=" flex items-center text-base lg:text-2xl font-semibold leading-6 text-gray-900">
                          ORDER SUMMARY <ShoppingCartIcon className="w-6 h-5 md:w-12 md:h-11 lg:w-12 lg:h-11 text-amber-500 " />
                        </Dialog.Title>
                        <div className="mt-2">
                          <table className="table-auto w-full">
                            <thead>
                              <tr className='border-collapse border-b-2 border-b-solid border-gray-300'>
                                <th className='text-left'>Course Name</th>
                                <th className='text-center'>Quantity</th>
                                <th className='text-center'>Price</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className='border-collapse border-b-2 border-b-solid border-gray-300'>
                                <td className='text-left text-md lg:text-lg'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className='text-center text-md lg:text-lg'>1</td>
                                <td className='text-center text-md lg:text-lg'>100</td>
                                <td className='text-right'><TrashIcon className="h-4 w-4 ms-3" /> </td>
                              </tr>
                              <tr className='border-collapse border-b-2 border-b-solid border-gray-300'>
                                <td className='text-left text-md lg:text-lg'>Witchy Woman</td>
                                <td className='text-center text-md lg:text-lg'>1</td>
                                <td className='text-center text-md lg:text-lg'>400</td>
                                <td className='text-center'><TrashIcon className="h-4 w-4 ms-3" /> </td>
                              </tr>
                              <tr className='border-collapse border-b-2 border-b-solid border-gray-300'>
                                <td className='text-left text-md lg:text-lg'>Shining Star</td>
                                <td className='text-center text-md lg:text-lg'>1</td>
                                <td className='text-center text-md lg:text-lg'>300</td>
                                <td className='text-center'><TrashIcon className="h-4 w-4 ms-3" /> </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th className='text-left'>Totals</th>
                                <td className='text-center'>2</td>
                                <td className='text-center'>21,000</td>
                                <td></td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-md font-semibold text-amber-500 shadow-sm hover:bg-amber-500 hover:text-white sm:ml-3 sm:w-auto"
                      onClick={() => handleCheckout()}
                    >
                      PROCEED TO CHECKOUT
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Payment dialogue */}
      <Transition.Root show={openpd} as={Fragment}>
        <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenpd}>
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                      <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <Dialog.Title as="h3" className=" flex items-center text-base lg:text-2xl font-semibold leading-6 text-gray-900">
                          PAYMENT <ShoppingCartIcon className="w-6 h-5 md:w-12 md:h-11 lg:w-12 lg:h-11 text-amber-500 " />
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md lg:text-xl text-gray-500">
                            Payment link will be only shared via respective mail id in order to verify and the link will be shared for the same mail once payment done successfully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-6 gap-x-4">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 bg-grey-cust flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-md font-semibold text-amber-500 shadow-sm hover:bg-amber-500 hover:text-white sm:ml-3 sm:w-auto"
                      onClick={() => handlePayment()}
                    >
                      SHARE PAYMENT LINK VIA 
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpenpd(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/*Guidline dialogue */}
      <Transition.Root show={openpg} as={Fragment}>
        <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenpg}>
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                      <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <Dialog.Title as="h3" className=" flex items-center text-base lg:text-2xl font-semibold leading-6 text-gray-900">
                          GUIDELINE <ShoppingCartIcon className="w-6 h-5 md:w-12 md:h-11 lg:w-12 lg:h-11 text-amber-500 " />
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md lg:text-xl text-gray-500">
                            We've sent the payment link to the email you provided. Upon completion of payment, the video links for your selected courses will be swiftly shared with the same email. In case you don't find it in your inbox, kindly check your spam mail. For any inquiries, reach out to us at <span className='text-black'>xxxx@gmail.com. </span>
                          </p>
                          <p className="text-md lg:text-xl text-gray-500 mt-3">We appreciate your patronage! Enjoy learning!</p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-md font-semibold text-amber-500 shadow-sm hover:bg-amber-500 hover:text-white sm:ml-3 sm:w-auto"
                      onClick={() => setOpenpg(false)}
                    >
                      OK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>

  )
}
