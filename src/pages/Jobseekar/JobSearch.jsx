import React from 'react'
import JobsSearchList from '../../components/JobSeekar.jsx/JobsSearchList'
import JobFilterSidebar from '../../components/JobSeekar.jsx/JobFilterSidebar'

const JobSearch = () => {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
        <div className='flex ml-4 justify-around '>
            <div className='w-[20%] '>
                {/* <JobFilterSidebar></JobFilterSidebar> */}
            </div>
            <div className='w-[60%]'>
                 <JobsSearchList></JobsSearchList>
            </div>
        </div>
       
      
    </div>
  )
}

export default JobSearch
