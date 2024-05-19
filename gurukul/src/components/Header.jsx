import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useScroll, motion, useSpring} from "framer-motion"

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

  const [open, setOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

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

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  
  const handleNavigationClick = (id) => {
    setCurrentSection(id);
  };
  
  return (
    <>
      <Disclosure as="nav" className="bg-grey-cust fixed w-screen z-50">
        {({ open }) => (
          <>
            <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                        <motion.a
                          whileHover={{ scale: 0.9 }}
                          whileTap={{ scale: 0.9 }}
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
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  <Cart/>
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                  <motion.a 
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                  href="#Banner">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className='lg:w-24 lg:h-12 w-12 h-6'
                        src={Logo}
                        alt="Company-logo"
                      />
                      <h1 className='text-white text-xl lg:text-3xl subpixel-antialiased font-black mx-1.5'>ABHISHADGURU</h1>
                    </div>
                  </motion.a>
                  
                </div>
              </div>
            </motion.div>
            <motion.div style={{ scaleX: scrollYProgress }} /> 
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      currentSection === item.id ? 'bg-gray-900 text-amber-500' : 'text-white hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm text-xl'
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
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
          background: "#f59e0c",
          position: "sticky",
          top: 60,
          width: "100%",
          height: "0.2rem",
        }}
        className='z-50'
      />
    </>

  )
}
