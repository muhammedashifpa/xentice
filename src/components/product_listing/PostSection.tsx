import React, { useEffect, useState } from 'react'
import { fetchDataasyncFunction, fetchDataInterface, filterDatas, FinalDatainterface } from './postListingFunction'
import PostCategoriser from './product_section/PostCatogory/PostCategoriser'
import PostCategory from './product_section/PostCatogory/PostCategory'
import ProductSection from './product_section/PostCatogory/PostCategory'

type PostSectionInterface = {
  fetchData: FinalDatainterface[]
  status:'loading' | 'success' | 'faild'
}

const PostSection = () => {
  const initialData:PostSectionInterface = {
    status: 'loading',
    fetchData: []
  }
  const [data,setData] = useState<PostSectionInterface>(initialData)
  useEffect(()=>{
    setData({
      ...initialData,
      status:'loading'
    })
    fetchDataasyncFunction().then(res=>{
      const filterdData = filterDatas(res)
      setData({
        status:'success',
        fetchData:filterdData
      })
    }).catch(err=>{
      setData({
        ...initialData,
        status:'faild'
      })
    }
    )
  },[])
  return (
    <section className='px-4 sm:px-6'>
        {data.status === 'loading'&& 'loaing' }
        {data.status === 'faild'&& 'faild**********' }
        {data.status === 'success'&& 
          <PostCategoriser  data={data.fetchData}/>
         }
    </section>
  )
}

export default PostSection