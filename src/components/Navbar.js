import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import cartPageSlice, { toggleTrue } from '../store/variableSlice'
import { Link } from 'react-router-dom'


const navigation = [
  { name: 'Home', current: false },
  { name: 'Mobiles', current: false },
  { name: 'Laptop', current: false },
  { name: 'Contact Us', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();




  return (
    <Disclosure as="nav" className=" backdrop-blur-xl fixed w-full z-10 bg-gray-900 px-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={'/'}>
                    <img

                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </Link>

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.name}>
                        <p
                          key={item.name}

                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-indigo-400',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </p></Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button> */}



                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <Menu.Button>
                    <div>
                      <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"><Link to={"signin"}>
                        <a href="#" class="text-sm rounded-md p-2 font-medium text-gray-100 hover:bg-indigo-700 hover:text-white">Sign in</a></Link>
                        <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span><Link to={"signup"}>
                          <a href="#" class="text-sm font-medium rounded-md p-2 text-gray-100 hover:bg-indigo-700 hover:text-white">Create account</a></Link>
                      </div>
                    </div>
                  </Menu.Button>

                </Menu>
                <div className="ml-4 flow-root lg:ml-6">
                  <p className="group -m-2 flex cursor-pointer items-center p-2">
                    <ShoppingBagIcon onClick={() => { dispatch(toggleTrue()) }}
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span style={{ marginRight: '5px' }} className="ml-2 text-sm font-medium text-gray-100 group-hover:text-gray-300">{cart.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </p>
                </div>
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
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-black hover:text-white',
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
      {/* <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div> */}
    </Disclosure>


  )
}

