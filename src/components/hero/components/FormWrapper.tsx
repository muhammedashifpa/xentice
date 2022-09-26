import React from 'react'
import HeroForm from './HeroForm'

type Props = {}

const FormWrapper = (props: Props) => {
  return (
    <div className='bg-white sm:shadow rounded-lg sm:max-w-lg'>
        <div className='px-4 py-5 sm:py-10 sm:px-6 md:px-8'>
            <h3 className='text-2xl font-bold text-left'>Choose from 25,00+ Spaces for your Business</h3>
            <HeroForm/>
        </div>
    </div>
  )
}

export default FormWrapper