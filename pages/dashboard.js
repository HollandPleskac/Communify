
import React from 'react'
import Navigation from '../components/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <Navigation>
      <div className='flex w-mainContent justify-center' >
        <div className='flex flex-col items-center w-7/12 py-10' >
          <PostWidget name='Planting Trees at MHHS Parkway' />
          <PostWidget name='Build a Playground' />
          <PostWidget name='Promote Carpooling' />
        </div>
        <div className='flex flex-col items-center w-5/12 p-10' >
          <WeatherWidget />
          <EventWidget name='Pumpkin Festival' description='The pumpkin festival is a 2 day event taking place at the
          Mountain House High School.' />
          <EventWidget name='Earth Day' description='Celebrate the Earth by coming out the Grant Line to  drive by the school.' />
          <EventWidget name='Halloween' description='Halloween is a fun day where everyone dresses up as
          se.' />
          <div className='flex justify-evenly mt-3' style={{ width: '450px' }} >
            <GoalsWidget />
            <GoalsWidget />
          </div>
        </div>
      </div>
    </Navigation>
  )
}

const PostWidget = (props) => {
  return (
    <div className='h-48 w-full my-2 flex items-end rounded-lg bg-beach bg-cover bg-top' style={{ backgroundImage: 'url(/trees.jpg)' }} >
      <div className='p-2 mb-5 ml-5 backdrop-filter backdrop-blur-3xl rounded-md' >
        {props.name}
      </div>
    </div>
  )
}

const WeatherWidget = (params) => {
  return (
    <div className='h-44 w-full rounded-lg bg-cover' style={{ backgroundImage: 'url(/beach.jpg)' }} >
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
    <div className='w-full p-3 flex bg-gray-100 rounded-md mt-3' >
      <img src="/event.jpeg" width='75' height='100' alt="Event" className='bg-cover rounded-md' />
      <div className='ml-3' >
        <h3 className='mb-2 font-bold' >{props.name}</h3>
        <p className='text-sm' >{props.description}</p>
      </div>
    </div>
  )
}

const GoalsWidget = () => {
  return (
    <div className='h-28 w-5/12 flex flex-col justify-center items-center text-center bg-yellow-100 p-5 rounded-md' >
      <FontAwesomeIcon icon={faChartPie} className='text-yellow-500 text-2xl mb-3' />
      <h2 className='text-yellow-500' >Inproving Parks</h2>
    </div>
  )
}

export default Dashboard