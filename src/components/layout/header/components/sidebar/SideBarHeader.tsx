import React from 'react'
import Logo from '../Logo'
import { SideBarInterface } from './SideBar'
import { XMarkIcon } from '@heroicons/react/24/outline'



const SideBarHeader = ({setOpen,open}: SideBarInterface) => {
  return (
    <div className="flex justify-between px-4 pt-5 pb-2">
        <Logo/>
        <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            onClick={() => setOpen(false)}
            >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    </div>
  )
}

export default SideBarHeader