import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavUser from './NavUser'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <nav className="bg-neptune">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> */}
                <Logo />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className={router.pathname == "/" ? "selected hover:bg-sinbad text-white px-3 py-2 rounded-md text-sm font-medium" : "hover:bg-sinbad text-white px-3 py-2 rounded-md text-sm font-medium"}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/coran">
                    <a className={router.pathname == "/coran" ? "selected hover:bg-sinbad text-white px-3 py-2 rounded-md text-sm font-medium" : "hover:bg-sinbad text-white px-3 py-2 rounded-md text-sm font-medium"}

                    >
                      Coran
                    </a>
                  </Link>
                  <Link href="/kuningan">
                    <a className={router.pathname == "/kuningan" ? "selected hover:bg-sinbad text-white px-3 py-2 rounded-md text-sm font-medium" : "hover:bg-sinbad text-white px-3 py-2 rounded-md text-sm font-medium"}

                    >
                      Kuningan
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className={router.pathname == "/about" ? "selected hover:bg-sinbad text-white px-3 py-2 rounded-md text-sm font-medium" : "hover:bg-sinbad text-white px-3 py-2 rounded-md text-sm font-medium"}

                    >
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <NavUser />
              <div className="-mr-2 flex md:hidden">

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-1 rounded-md text-lightGray hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >

          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <a onClick={() => setIsOpen(!isOpen)} className={router.pathname == "/" ? "selected hover:bg-sinbad text-white px-3 py-2 block rounded-md text-sm font-medium" : "hover:bg-sinbad text-white px-3 py-2 block rounded-md text-sm font-medium"}
                >
                  Home
                </a>
              </Link>
              <Link href="/coran">
                <a onClick={() => setIsOpen(!isOpen)} className={router.pathname == "/coran" ? "selected hover:bg-sinbad text-white px-3 py-2 block rounded-md text-sm font-medium" : "hover:bg-sinbad text-white px-3 py-2 block rounded-md text-sm font-medium"}

                >
                  Coran
                </a>
              </Link>
              <Link href="/kuningan">
                <a onClick={() => setIsOpen(!isOpen)} className={router.pathname == "/kuningan" ? "selected hover:bg-sinbad text-white px-3 py-2 block rounded-md text-sm font-medium" : "hover:bg-sinbad text-white px-3 py-2 block rounded-md text-sm font-medium"}

                >
                  Kuningan
                </a>
              </Link>
              <Link href="/about">
                <a onClick={() => setIsOpen(!isOpen)} className={router.pathname == "/about" ? "selected hover:bg-sinbad text-white px-3 py-2 block rounded-md text-sm font-medium" : "hover:bg-sinbad text-white px-3 py-2 block rounded-md text-sm font-medium"}

                >
                  About
                </a>
              </Link>

            </div>
          </div>


        </Transition>

      </nav>
    </div>
  );
}