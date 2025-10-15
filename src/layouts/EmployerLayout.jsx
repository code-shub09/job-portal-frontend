import React from 'react'
import Topbar from '../components/Employer/Topbar'
import Sidebar from '../components/Employer/Sidebar'
import { Outlet } from 'react-router-dom'

const EmployerLayout = () => {
  return (
    <div>
        <Topbar></Topbar>

        <div className='flex'>
           
            <Sidebar></Sidebar>
            <main className='grow'>
                <Outlet></Outlet>

            </main>

        </div>

      
    </div>
  )
}

export default EmployerLayout
