import React from 'react'

import Navigation from '../components/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {

  return (
    <Navigation>
      <div className='h-screen w-mainContent flex justify-center items-center' >
        <div className='w-7/12 h-full pl-0 pr-10 py-10' >
          <h4 className='mb-4' >Current Goals</h4>
          <Goal name='Improve Our Parks' finish='2021' />
          <Goal name='Faster Bus stop wait times' finish='2022' />
          <Goal name='Reduce Litter in the City' finish='2021' />
          <Goal name='Decrease poverty in City' finish='2024' />
          <Goal name='Clean up John Doe Elementary School' finish='2023' />
          <Goal name='Decrease City Carbon Footprint' finish='2022' />
        </div>
        <div className='w-5/12 h-full pl-0 pr-10 py-10' >
          <h4 className='mb-4' >Overall Progress</h4>
          <OverallProgress />
          <h4 className='mb-4' >Recent Updates</h4>
          <RecentUpdate name='Improve Parking at Mall' />
          <RecentUpdate name='Educate the Underprivelaged' />
        </div>
      </div>
    </Navigation>
  )
}

const Goal = (props) => {
  return (
    <div className='w-full mb-4 flex justify-between items-center bg-gray-100 rounded px-6 py-4' >
      <div>
        <h3 className='mb-1 font-bold' >{props.name}</h3>
        <p className='text-sm' >{'Est Finish: ' + props.finish}</p>
      </div>
      <FontAwesomeIcon icon={faChartPie} className='text-4xl text-yellow-400' />
    </div>
  )
}

const OverallProgress = () => {
  return (
    <div className='w-full mb-4 flex justify-center bg-gray-100 p-6 rounded-lg' >
      <img src="/pie-circular.png" alt="Pie Chart" width='200px' />
    </div>
  )
}

const RecentUpdate = (props) => {
  return (
    <div className='flex justify-between items-center py-4 px-6 mb-4 bg-gray-100 rounded' >
      <div>
        <h3 className='mb-1 font-bold' >{props.name}</h3>
        <p className='text-sm' >Finished 2021</p>
      </div>
      <FontAwesomeIcon icon={faCheckCircle} className='text-green-500 text-3xl' />
    </div>
  )
}




export default Dashboard
