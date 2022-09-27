import React from 'react'
import HeaderNavigator from '../ui/HeaderNavigator'
import { NavigatorContentInterface } from '../ui/HeaderNavigatorContent'

type Props = {}

const ServiceHeader = (props: Props) => {
  return (
    <HeaderNavigator data={data} className='py-8' width='max-w-8xl'/>
  )
}

export default ServiceHeader




const data: NavigatorContentInterface[] = [
    {
        name:'Builder',
        image:'/services_images/builder.png',
        link:'string',
        key:1,
    },
    {
        name:'Architects',
        image:'/services_images/architects.png',
        link:'string',
        key:2,
    },
    {
        name:'Banking',
        image:'/services_images/banking.png',
        link:'string',
        key:3,
    },
    {
        name:'IT Support',
        image:'/services_images/it_support.png',
        link:'string',
        key:4,
    },
    {
        name:'Labourers',
        image:'/services_images/labourers.png',
        link:'string',
        key:5,
    },
    {
        name:'Mentors',
        image:'/services_images/mentors.png',
        link:'string',
        key:6,
    },
    {
        name:'Advocates',
        image:'/services_images/advocates.png',
        link:'string',
        key:7,
    },
    {
        name:'Insurance',
        image:'/services_images/insurence.png',
        link:'string',
        key:8,
    },
    {
        name:'Life Style',
        image:'/services_images/lifeStyle.png',
        link:'string',
        key:9,
    },
    {
        name:'Xentic Mart',
        image:'/services_images/xtencis_mart.png',
        link:'string',
        key:10,
    },
    {
        name:'Eco Living',
        image:'/services_images/eco_living.png',
        link:'string',
        key:11,
    },
]