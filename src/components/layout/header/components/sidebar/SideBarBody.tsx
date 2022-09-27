import React from 'react'
import IconLink from '../utils/IconLink'
import { NavigatorInterface } from './SideBar'



const SideBarBody = ({data, login, pages}: NavigatorInterface) => {
  return (
    <>
    {/* Navigation */}
    <div className="space-y-6 border-t border-gray-200 pb-6 px-4">
        <ul className="mt-6 flex flex-col space-y-6">
            {data.map((item) => (
                <li key={item.key} className="flow-root">
                    <a href={item.link} className="-m-2 block p-2 text-gray-500">
                    <IconLink
                        icon={item.icon}
                        name={item.name}
                        screenRead={item.screenRead&&item.screenRead}
                    />
                    </a>
                </li>
            ))}
        </ul>
      </div>
    {/* login */}
    <div className="space-y-6 border-t border-gray-200 pb-6 px-4">
        <div className="mt-6 flex flex-col space-y-6">
        <a href={login.link} className="-m-2 block p-2 text-gray-500">
            <IconLink
                icon={login.icon}
                name={login.name}
            />
        </a>
        </div>
      </div>
    {/* Pages */}
    <div className="space-y-6 border-t border-gray-200 pb-6 px-4">
        <ul className="mt-6 flex flex-col space-y-6">
            {pages.map((item) => (
                <li key={item.key} className="flow-root ml-4">
                    <a href={item.link} className="-m-2 block p-2 text-gray-500">
                    {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default SideBarBody