import React from 'react'
import RealEstateContents, { RealEstateContentInterface } from './components/RealEstateContents'

type Props = {}

const RealEstateHeader = (props: Props) => {
  return (
    <div className='relative bg-dark-blue scroll-pl-6 snap-x overflow-scroll no-scrollbar '>
        <RealEstateContents data={data}/>
    </div>
  )
}

export default RealEstateHeader


const data: RealEstateContentInterface[] = [
    {
        name:'Commercial Shop',
        image:'/real_estate_images/commercial_shop.png',
        link:'string',
        key:1,
    },
    {
        name:'Commercial Office',
        image:'/real_estate_images/commercial_office.png',
        link:'string',
        key:2,
    },
    {
        name:'Commercial Land',
        image:'/real_estate_images/commerical_land.png',
        link:'string',
        key:3,
    },
    {
        name:'Commercial Building',
        image:'/real_estate_images/commercial_building.png',
        link:'string',
        key:4,
    },
    {
        name:'Industrial Building',
        image:'/real_estate_images/industrial_building.png',
        link:'string',
        key:5,
    },
    {
        name:'Industrial Land',
        image:'/real_estate_images/industrial_land.png',
        link:'string',
        key:6,
    },
    {
        name:'Co-working Space',
        image:'/real_estate_images/co_working_space.png',
        link:'string',
        key:7,
    },
    {
        name:'Private Office',
        image:'/real_estate_images/private_office.png',
        link:'string',
        key:8,
    },
    {
        name:'Meeting Room',
        image:'/real_estate_images/meeting_room.png',
        link:'string',
        key:9,
    },
]