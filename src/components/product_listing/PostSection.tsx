import React, { useEffect, useState } from 'react'
import { fetchDataasyncFunction, fetchDataInterface, filterDatas, FinalDatainterface } from './productListingFunction'
import PostCategory from './product_section/PostCategory'
import ProductSection from './product_section/PostCategory'

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
  console.log(data)
  return (
    <section className=' py-5 px-4 sm:px-6 lg:py-16'>
        {data.status === 'loading'&& 'loaing' }
        {data.status === 'faild'&& 'faild**********' }
        {data.status === 'success'&& 
          // <PostCategory data={}/>
        }
    </section>
  )
}

export default PostSection