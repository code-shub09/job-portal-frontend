import React from 'react'
import Topbar from '../components/Employer/Topbar'
import Sidebar from '../components/Employer/Sidebar'
import { Outlet } from 'react-router-dom'
import EmployerNavbar from './EmployerNavbar'

const EmployerLayout = () => {
  return (
    <div className='w-screen max-w-screen h-screen overflow-x-hidden'>
        {/* <Topbar></Topbar> */}
        <EmployerNavbar></EmployerNavbar>

        <div className='flex h-screen justify-between'>

           {/* <div className='w-[20%] box-border flex-none'>
            <Sidebar></Sidebar>


           </div> */}
            <main className='overscroll-auto grow ' >
                <Outlet></Outlet>

            </main>

        </div>

      
    </div>
  )
}

export default EmployerLayout
