import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="ml-4 flex lg:ml-0">
        <a href="#">
            <span className="sr-only">Your Company</span>
            <img
            className="h-8 w-auto ml-6"
            src="/woxlandlogo.png"
            alt=""
            />
        </a>
    </div>
  )
}

export default Logo