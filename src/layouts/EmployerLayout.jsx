import React from 'react'
import Topbar from '../components/Employer/Topbar'
import Sidebar from '../components/Employer/Sidebar'
import { Outlet } from 'react-router-dom'

const EmployerLayout = () => {
  return (
    <div className='w-screen max-w-screen h-screen overflow-x-hidden'>
        <Topbar></Topbar>

        <div className='flex h-screen justify-between'>

           <div className='w-[20%] box-border flex-none'>
            <Sidebar></Sidebar>


           </div>
           
           
            <main className='overscroll-auto grow ' >
                <Outlet></Outlet>

            </main>

        </div>

      
    </div>
  )
}

export default EmployerLayout
