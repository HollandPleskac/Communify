import React from 'react'
import Link from 'next/Link'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faBullseye, faCubes, faCalendar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {
  return (
    <div className='flex' >
      <div className='h-screen flex flex-col justify-center p-6' style={{ width: '260px' }}>
        <Card color='bg-gray-100' >
          <p className='text-gray-600 text-center' >Community</p>
        </Card>
        <Card color='bg-gray-100'>
          <SidebarLink name='Dashboard' icon={faTachometerAlt} href='/dashboard' />
          <SidebarLink name='Goals' icon={faBullseye} href='/goals' />
          <SidebarLink name='Clubs' icon={faCubes} href='/clubs' />
          <SidebarLink name='Calendar' icon={faCalendar} href='/calendar' />
        </Card>
        <Card color='bg-gray-100'>
          <SidebarLink name='Sign Out' icon={faSignOutAlt} href='/' />
        </Card>
      </div>
      {props.children}
    </div>
  )
}

const Card = (props) => {
  return (
    <div className={'p-4 mb-5 rounded-lg ' + props.color} >{props.children}</div>
  )
}

const SidebarLink = (props) => {
  const router = useRouter()

  const colorClasses = props.href === router.pathname ? 'text-yellow-500' : 'text-gray-600 group-hover:text-yellow-500'
  const paddingClasses = props.name === 'Sign Out' ? 'mb-0' : 'mb-5'

  return (
    <Link href={props.href} passHref>
      <div className={'group mx-7 cursor-pointer ' + paddingClasses} >
        <FontAwesomeIcon icon={props.icon} className={'mr-4 transition ease-in duration-100 ' + colorClasses} />
        <a className={'transition ease-in duration-100 ' + colorClasses} >{props.name}</a>
      </div>
    </Link>
  )
}

const SignOutLink = (props) => {
  const router = useRouter()

  const colorClasses = props.href === router.pathname ? 'text-yellow-600' : 'text-gray-600 group-hover:text-yellow-600'

  return (
    <Link href='/' passHref>
      <div className='group mx-7 cursor-pointer' >
        <FontAwesomeIcon icon={faSignOutAlt} className={'mr-4 transition ease-in duration-100 ' + colorClasses} />
        <a className={'transition ease-in duration-100 ' + colorClasses} >Sign Out</a>
      </div>
    </Link>
  )
}



export default Navigation


// Code the Dasbhoard and Make it look nice
// Fix the spacing so its even
  // fixed padding between sections
  // color the sections before adding content
// Add all of the remaining features