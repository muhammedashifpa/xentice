/* eslint-disable jsx-a11y/anchor-is-valid */
import * as HIcons from '@heroicons/react/24/outline'
import { classNames } from '../../../../../utils/functions'
export interface IconLinkInterface {
    key?:number
    link?:string
    icon:string
    name:string
    screenRead?:string
    doTask?:()=>void
    className?:string
}

const IconLink = ({icon, name, screenRead, doTask, className,link}: IconLinkInterface) => {
    const {...icons} = HIcons
     // @ts-ignore
    const TheIcon: JSX.Element = icons[icon]
  return (
    <div className={classNames("ml-4 flow-root lg:ml-6", className?className:'')}>
        <a href={link?link:'#'} className="group -m-2 flex items-center p-2">
          {/* @ts-ignore */}
          <TheIcon
              className={classNames("h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500")}
              aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{name}</span>
          <span className="sr-only">{screenRead&&screenRead}</span>
        </a>
    </div>
  )
}

export default IconLink

