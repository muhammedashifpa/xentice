import React from 'react'
import Logo from '../header/components/Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
      <footer className="p-4 bg-white  shadow md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <Logo/>
              <ul className="flex flex-wrap justify-evenly items-center mb-6 text-sm text-gray-500 sm:mb-0">
                  <li>
                      <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                  </li>
                  <li>
                      <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline">Contact</a>
                  </li>
              </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
          <span className="block text-sm text-gray-500 sm:text-center">© 2022 <a href="#" className="hover:underline">Xentice</a>. All Rights Reserved.
          </span>
      </footer>

  )
}

export default Footer