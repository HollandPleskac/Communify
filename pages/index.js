import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='w-full h-screen flex flex-col ' >
      <Header />
      <HomeContent />
    </div>
  )
}

const Header = () => {
  const router = useRouter()
  const navHandler = (params) => {
    router.push('/login')
  }


  return (
    <div className='w-full flex items-center justify-between shadow py-4 px-6' >
      <div className='flex items-center' >
        <img src="/logo.png" width='50' alt="Logo" className='mr-4' />
        <p className='text-xl text-gray-800' >Communify</p>
      </div >
      <div className='flex items-center' >
        <LandingLink name='Home' href='#' />
        <LandingLink name='About' href='#' />
        <LandingLink name='Security' href='#' />
        <LandingLink name='Get Started' href='#' />
      </div>
      <div className='flex items-center' >
        <button onClick={navHandler} className='text-white rounded-xl px-4 py-2 bg-yellow-500 hover:bg-yellow-600 transition ease-in duration-100 focus:outline-none' >Login</button>
      </div>
    </div >
  )
}

const LandingLink = (props) => {
  return (
    <Link href={props.href} passHref >
      <a className='p-3 text-gray-800' >
        {props.name}
      </a>
    </Link>
  )
}


const HomeContent = () => {
  return (
    <div className='w-full h-3/4 flex flex-col justify-center items-center my-auto' >
      <h1 className='text-7xl text-yellow-500 mb-9 '>Communify</h1>
      <p className='text-lg text-center text-gray-800 mb-9' >The smartest way to farm<br />dark energy crystals.</p>
      <div>
        <button className=' border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white px-8 py-3 rounded-lg transition ease-in duration-100 focus:outline-none mr-4' >Learn More</button>
        <button className='border-2 border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600 hover:border-yellow-600 px-8 py-3 rounded-lg transition ease-in duration-100 focus:outline-none' >Get Started</button>
      </div>
    </div>
  )
}


export default HomePage
