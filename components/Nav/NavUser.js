import { Menu, Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { UserIcon } from '@heroicons/react/solid'
import {StoreContext} from '../../store/store'
import NavLoginForm from './NavLoginForm'

export default function NavUSer() {
  const ctx = useContext(StoreContext)
  // console.log(ctx.logged)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>      
      <Menu as="div" className="relative inline-block text-left mr-2">      
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <UserIcon className="w-5 h-5" aria-hidden="true"
            />            
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item as="div">              
                {ctx.logged ? ({ active }) => (
                  <button onClick={openModal}
                    className={`${active ? 'bg-sinbad-500 text-gray-900 font-semibold' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold`}
                                        >
                    Logout
                  </button>
                ) : ({ active }) => (
                  <button onClick={openModal}
                    className={`${active ? 'bg-sinbad-500 text-gray-900 font-semibold' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold`}
                                        >
                    Login
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* <div className="mr-2">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          User
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>        
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >              
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-2"
                >
                  Login
                </Dialog.Title>                
                <NavLoginForm  />                
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
