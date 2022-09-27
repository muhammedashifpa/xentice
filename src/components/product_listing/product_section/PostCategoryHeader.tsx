import React from 'react'
import IconLink from '../../layout/header/components/utils/IconLink'

type Props = {}

const PostCategoryHeader = (props: Props) => {
  return (
    <div className='flex justify-between items-center p-2'>
      {/* left */}
      <div>
        <span className="sr-only">xentice</span>
        <h4 className='text-2xl font-medium'>Commercial Shop</h4>
      </div>
      {/* right */}
      <div>
        <a href='#' className="group -m-2 flex items-center text-dark-blue font-medium hover:text-blue-600">Explore more</a>
      </div>

    </div>
  )
}

export default PostCategoryHeader

