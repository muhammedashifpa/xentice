/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import * as HIcons from '@heroicons/react/24/outline'
export interface IconLinkInterface {
    key?:number
    link?:string
    icon:string
    name:string
    screenRead?:string
    doTask?:()=>void
}

const IconLink = ({icon, name, screenRead, doTask}: IconLinkInterface) => {
    const {...icons} = HIcons
     // @ts-ignore
    const TheIcon: JSX.Element = icons[icon]
  return (
    <div className="ml-4 flow-root lg:ml-6">
        <a href='#' onClick={doTask&&doTask}className="group -m-2 flex items-center p-2">
        {/* @ts-ignore */}
        <TheIcon
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{name}</span>
        <span className="sr-only">{screenRead&&screenRead}</span>
        </a>
    </div>
  )
}

export default IconLink

