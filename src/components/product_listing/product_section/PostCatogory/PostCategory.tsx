import React from 'react'
import { fetchDataInterface, FinalDatainterface } from '../../postListingFunction'
import PostCategoryHeader from './PostCategoryHeader'
import PostSlider from '../post_slider/PostSlider'

type Props = {
  data:fetchDataInterface[]
  name:string
}

const PostCategory = ({data,name}: Props) => {
  return (
    <div className='mx-auto mt-6 max-w-6xl'>
      <PostCategoryHeader name={name}/>
      <PostSlider data={data}/>
    </div>
  )
}

export default PostCategory 