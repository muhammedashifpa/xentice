import React from 'react'
import Footer from './Footer/Footer'
import Header from './header/Header'

type Props = {
    children:React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
        <Header/>
            <main className='mt-16'>
                {children}
            </main>
        <Footer/>
    </>
  )
}

export default Layout