import React from 'react'
import { FinalDatainterface } from '../../postListingFunction'
import PostCategory from './PostCategory'

type Props = {
    data:FinalDatainterface[]
  }

const PostCategoriser = ({data}: Props) => {
  return (
    <>
    {
        data.length !== 0 ? data.map(item=>(
            <PostCategory name={item.name} data={item.data} key={item.key}/>
        ))
        :
        <h2>no item found</h2>
    }
    </>
  )
}

export default PostCategoriser