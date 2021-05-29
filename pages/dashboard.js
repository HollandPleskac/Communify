import React from 'react'

import Navigation from '../components/navigation'

const Dashboard = () => {

  return (
    <Navigation>
      <div className='h-screen w-mainContent flex justify-center items-center' >
        <WeatherWidget />
      </div>
    </Navigation>
  )
}

const WeatherWidget = (params) => {
  return (
    <div>
      <div className='relative w-74 p-4 rounded-lg bg-beach bg-cover' >

      </div>
      <div className='absolute z-20 w-5/6 backdrop-blur-lg' >
        <p>Mountain House</p>
        <h2>74°</h2>
        <p>Sunny</p>
      </div>
    </div>
  )
}


export default Dashboard
