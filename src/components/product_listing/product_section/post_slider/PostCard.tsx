import React from 'react'
import {HeartIcon,MapPinIcon} from '@heroicons/react/24/outline'
import IconLink from '../../../layout/header/components/utils/IconLink'
import { fetchDataInterface } from '../../postListingFunction'
type Props = {
  data:fetchDataInterface
}

const PostCard = ({data}: Props) => {
  const detail = JSON.parse(data.details)
  const location = JSON.parse(data.location)

  return (
    <div className='border-8 border-transparent rounded-xl '>
      <div className='border border-slate-300 overflow-hidden rounded-md'>
          <a href='#'>
            <img
                className="w-full h-36 object-cover"
                src={detail.images !== undefined ? detail.images.length !== 0 && detail.images[0]:"dsa"}
                alt={detail.title&&detail.title}
                />
          </a>
        <div className='py-4 px-3'>
          <div className="flex justify-between items-center pb-2">
              <h5 className="text-xl font-medium text-black ">{detail.title&&detail.title}</h5>
              <a href='#'>
                <HeartIcon className="h-6 w-6 flex-shrink-0 text-black group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
          </div>
          <div>
          <div className="flow-root pb-2">
              <a href='#' className=" flex items-center">
              {/* @ts-ignore */}
              <MapPinIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{location.city&&location.city}</span>
              <span className="sr-only">{location.city&&location.city}</span>
              </a>
          </div>
          </div>
          <div className="flex justify-between items-center">
              <span className="text-base font-medium text-red-600 ">{detail.displayPrice  && detail.price && detail.price.rate + ' ' + detail.price.type}</span>
              <a href="#" className="text-white bg-dark-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Explore Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard