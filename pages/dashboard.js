import React from 'react'
import Navigation from '../components/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {

  return (
    <Navigation>
      <div className='h-screen w-mainContent flex justify-center items-center' >
        <div className='h-screen flex flex-col items-center justify-evenly w-1/2' >
          <PostWidget />
          <PostWidget />
          <PostWidget />
        </div>
        <div className='flex flex-col items-center w-1/2' >
          <WeatherWidget />
          <EventWidget />
          <EventWidget />
          <EventWidget />
          <div className='flex justify-evenly mt-2' style={{ width: '450px' }} >
            <GoalsWidget />
            <GoalsWidget />
          </div>
        </div>
      </div>
    </Navigation>
  )
}

const PostWidget = () => {
  return (
    <div className='flex items-end h-52 rounded-lg bg-beach bg-cover' style={{ width: '480px', backgroundImage: 'url(/tennis-court.jfif)' }} >
      <div className='p-2 mb-5 ml-5 backdrop-filter backdrop-blur-3xl rounded-md' >
        Playing Tennis With Nerds
      </div>
    </div>
  )
}

const WeatherWidget = (params) => {
  return (
    <div className='h-44 rounded-lg bg-cover' style={{ backgroundImage: 'url(/beach.jpg)', width: '450px' }} >
      <div className='h-full w-1/2 flex flex-col justify-center items-center rounded-lg backdrop-filter backdrop-blur-lg' >
        <p className='text-lg mb-3 font-semibold' >Mountain House</p>
        <h2 className='text-5xl font-semibold' >74°</h2>
        <p className='text-lg mt-3 font-semibold'>Sunny</p>
      </div>
    </div>
  )
}

const EventWidget = (props) => {
  return (
    <div className='p-3 flex bg-gray-100 rounded-md mt-2' style={{ width: '450px' }} >
      <img src="/event.jpeg" width='100' height='125' alt="Event" className='cover rounded-md' />
      <div className='ml-3' >
        <h3 className='mb-2 font-bold' >Random Festival</h3>
        <p className='text-sm' >fhwaiufh aiuwfhiua awifh ahuh awiuf fnwaionff jfoijio ao aowifn oawnfi aowinf oawfak fawj pawjf pwoaf mfwakof</p>
      </div>
    </div>
  )
}

const GoalsWidget = (params) => {
  return (
    <div className='h-36 w-48 flex flex-col justify-center items-center text-center bg-yellow-100 p-5 rounded-md' >
      <FontAwesomeIcon icon={faChartPie} className='text-yellow-500' />
      <h2 className='text-yellow-500' >Inproving Parks</h2>
    </div>
  )
}



export default Dashboard
