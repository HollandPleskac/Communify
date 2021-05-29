import React from 'react'

import Navigation from '../components/navigation'

const Dashboard = () => {

  return (
    <Navigation>
      <div className='h-screen w-mainContent flex justify-center items-center' >
        <div className='flex justify-center bg-blue-400 w-1/2' >
          <PostWidget />
        </div>
        <div className='flex justify-center bg-red-400 w-1/2' >
          <WeatherWidget />
        </div>
      </div>
    </Navigation>
  )
}

const WeatherWidget = (params) => {
  return (
    <div className='w-96 h-48 rounded-lg bg-cover' style={{ backgroundImage: 'url(/beach.jpg)' }} >
      <div className='h-full w-1/2 flex flex-col justify-center items-center rounded-lg backdrop-filter backdrop-blur-lg' >
        <p className='text-lg mb-3 font-semibold' >Mountain House</p>
        <h2 className='text-5xl font-semibold' >74°</h2>
        <p className='text-lg mt-3 font-semibold'>Sunny</p>
      </div>
    </div>
  )
}

const PostWidget = (params) => {
  return (
    <div className='flex items-end h-60 w-96 rounded-lg bg-beach bg-cover' style={{ backgroundImage: 'url(/tennis-court.jfif)' }} >
      <div className='p-2 mb-4 ml-4 backdrop-filter backdrop-blur-3xl rounded-md' >
        Playing Tennis With Nerds
      </div>
    </div>
  )
}



export default Dashboard
