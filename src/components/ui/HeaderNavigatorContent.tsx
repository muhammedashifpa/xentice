import React from 'react'
import { classNames } from '../../utils/functions'

export interface NavigatorContentInterface {
    name:string
    image:string
    link:string
    key:number
}
type Props = {
    data:NavigatorContentInterface[]
    fontClass?:string
    width?:string|null
}


const HeaderNavigatorContent = ({data, fontClass,width}: Props) => {
  return (
    <ul className={classNames('mx-auto  py-5 px-4 sm:px-6 lg:px-4 flex items-center justify-between',width?width:'max-w-6xl')}>
        {data.map(item=>(
            <li key={item.key} className='transform transition duration-300 hover:scale-110 min-w-120'>
                <a href={item.link}>
                    <div className='px-3'>
                        <span className="sr-only">xentice</span>
                        <img
                        className="h-8 w-auto mx-auto"
                        src={item.image}
                        alt=""
                        />
                        <span className={classNames("text-xs text-center font-normal",fontClass?fontClass:'')}>{item.name}</span>
                    </div>
                </a>
            </li>
        ))}
    </ul>
  )
}

export default HeaderNavigatorContent