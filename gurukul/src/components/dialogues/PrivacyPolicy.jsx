import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DocumentTextIcon } from '@heroicons/react/24/solid';

const PrivacyPolicy = ({ isOpen, onClose, onNext }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => onClose(false)}
      >
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
              <Dialog.Panel className="relative transform h-1/4 lg:h-100 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="flex items-center text-base lg:text-2xl font-semibold leading-6 text-gray-900">
                        PRIVACY AND POLICY <DocumentTextIcon className="w-6 h-5 md:w-12 md:h-11 lg:w-12 lg:h-11 text-amber-500 " />
                      </Dialog.Title>
                      <div className="mt-2 overflow-scroll h-60">
                        <p className="text-md lg:text-xl text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia illum dolorem! Debitis explicabo odit aliquam error in aliquid quos cum. Ipsa voluptates sapiente rem velit voluptatibus error autem nesciunt magni, unde iusto qui, molestiae et recusandae ab quam nihil quas nostrum asperiores earum saepe ad. Dicta doloribus ipsa sit dignissimos ullam odio commodi iure consequuntur dolorum aspernatur exercitationem neque enim facilis quam assumenda, eveniet atque asperiores magnam fuga sapiente a voluptates voluptatem officiis quae. Praesentium placeat cumque consectetur asperiores officia quos totam autem dicta fugit nam? Autem nulla aliquam esse totam voluptatum. Doloribus voluptas consectetur nulla dolor illum asperiores!
                        </p>
                        <p className="text-md lg:text-xl text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia illum dolorem! Debitis explicabo odit aliquam error in aliquid quos cum. Ipsa voluptates sapiente rem velit voluptatibus error autem nesciunt magni, unde iusto qui, molestiae et recusandae ab quam nihil quas nostrum asperiores earum saepe ad. Dicta doloribus ipsa sit dignissimos ullam odio commodi iure consequuntur dolorum aspernatur exercitationem neque enim facilis quam assumenda, eveniet atque asperiores magnam fuga sapiente a voluptates voluptatem officiis quae. Praesentium placeat cumque consectetur asperiores officia quos totam autem dicta fugit nam? Autem nulla aliquam esse totam voluptatum. Doloribus voluptas consectetur nulla dolor illum asperiores!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 -m-t-2">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-md font-semibold text-amber-500 shadow-sm hover:bg-amber-500 hover:text-white sm:ml-3 sm:w-auto"
                    onClick={() => { 
                        onClose(false);
                        onNext(true); 
                      }}
                    ref={cancelButtonRef}
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
  );
};

export default PrivacyPolicy;
