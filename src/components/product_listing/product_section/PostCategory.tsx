import React from 'react'
import PostCategoryHeader from './PostCategoryHeader'
import PostSlider from './post_slider/PostSlider'

type Props = {
  data:string
}

const PostCategory = ({data}: Props) => {
  return (
    <div className='mx-auto max-w-6xl'>
      <PostCategoryHeader/>
      <PostSlider/>
    </div>
  )
}

export default PostCategory