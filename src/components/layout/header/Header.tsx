import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '../../../utils/functions'
import RightNav from './components/RightNav'
import Logo from './components/Logo'
import SideBar from './components/sidebar/SideBar'
type Props = {}

const Header = (props: Props) => {
    const [open, setOpen] = useState(false)
  return (
    <div className="bg-white">
    <SideBar 
        open={open}
        setOpen={setOpen}
    />
    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Logo/>
            <RightNav/>
          </div>
        </div>
      </nav>
    </header>
  </div>

  )
}

export default Header