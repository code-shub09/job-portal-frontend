import React from 'react'
import ApplicationSidebar from '../../components/Employer/AllApplication/ApplicationSidebar'
import AllApplicationsList from '../../components/Employer/AllApplication/AllApplicationsList'
import ApplicationDetailsPanel from '../../components/Employer/AllApplication/ApplicationDetailsPanel'

const AllApplication = () => {
  return (
    <div className='w-full'>
        <div className='w-full m-auto flex justify-around'>
            <div className='max-w-[20%] border  '>
              <ApplicationSidebar></ApplicationSidebar>
            </div>

            <div className='w-[47%] border'>
                <AllApplicationsList></AllApplicationsList>
            </div>

            <div className='w-[32%]'>
                <ApplicationDetailsPanel></ApplicationDetailsPanel>

            </div>

        </div>
      
    </div>
  )
}

export default AllApplication
