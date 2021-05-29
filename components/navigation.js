import React from 'react'
import Link from 'next/Link'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faBullseye, faCubes, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {
  return (
    <div className='flex' >
      <div className='p-6 bg-white shadow-lg' style={{ width: '260px' }} >
        <h1 className='mb-10 text-2xl text-yellow-400 text-center font-bold' >Communify</h1>
        <SidebarLink name='Dashboard' href='/dashboard' icon={faTachometerAlt} />
        <SidebarLink name='Goals' href='/goals' icon={faBullseye} />
        <SidebarLink name='Clubs' href='/clubs' icon={faCubes} />
        <SidebarLink name='Calendar' href='/calendar' icon={faCalendar} />
      </div >
      {props.children}
    </div>
  )
}

const SidebarLink = (props) => {

  const router = useRouter()

  const divClasses = router.pathname === props.href ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-white hover:bg-yellow-400 '
  const textClasses = router.pathname === props.href ? 'text-white' : 'text-yellow-400 group-hover:text-white'

  return (
    <Link href={props.href} passHref>
      <div className={'group px-4 py-2 mb-1 rounded-md cursor-pointer transition ease-in duration-100 ' + divClasses} >
        <FontAwesomeIcon icon={props.icon} className={'mr-4 text transition ease-in duration-100 ' + textClasses} />
        <a className={'text ' + textClasses} >{props.name}</a>
      </div>
    </Link>
  )
}


export default Navigation
