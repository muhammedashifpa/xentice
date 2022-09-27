import React from 'react'
import PostCategoryHeader from './PostCategoryHeader'
import PostSlider from '../post_slider/PostSlider'
import { fetchDataInterface } from '../../postListingFunction'

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