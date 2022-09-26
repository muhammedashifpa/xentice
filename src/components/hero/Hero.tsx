import React from 'react'
import FormWrapper from './components/FormWrapper'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="mx-auto max-w-6xl py-5 px-4 sm:px-6 lg:py-16 flex justify-center lg:grid lg:grid-cols-10">
        <div className="lg:col-span-4">
          <FormWrapper/>
        </div>
        <div className="lg:col-span-6"></div>
    </div>
  )
}

export default Hero