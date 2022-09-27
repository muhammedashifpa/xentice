import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostCard from './PostCard';
import { FinalDatainterface } from '../../postListingFunction';
import { fetchDataInterface } from '../../../axios/FetchComponents';

type Props = {
  data:fetchDataInterface[]
}

const PostSlider = ({data}: Props) => {
  // data.map(item=>console.log(JSON.parse(item.details)))
  return (
    <Slider {...settings} className=''>
        {
          data.map(item=>(
            <PostCard key={item.id} data={item}/>
          ))
        }
    </Slider>
  )
}

export default PostSlider


var settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll:2 ,
    // focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };