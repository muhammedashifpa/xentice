import React from 'react'

export interface RealEstateContentInterface {
    name:string
    image:string
    link:string
    key:number
}
type Props = {
    data:RealEstateContentInterface[]
}

const RealEstateContents = ({data}: Props) => {
  return (
    <ul className='mx-auto max-w-6xl py-5 px-4 sm:px-6 lg:px-4 flex items-center justify-between  '>
        {data.map(item=>(
            <li className='transform transition duration-300 hover:scale-110 min-w-120'>
                <a href={item.link}>
                    <div className='px-3'>
                        <span className="sr-only">xentice</span>
                        <img
                        className="h-8 w-auto mx-auto"
                        src={item.image}
                        alt=""
                        />
                        <span className="text-xs text-center font-normal text-white">{item.name}</span>
                    </div>
                </a>
            </li>
        ))}
    </ul>
  )
}

export default RealEstateContents