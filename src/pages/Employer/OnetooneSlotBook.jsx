import React from 'react'
import InterviewDateManager from '../../components/Employer/InterviewDateManager'
import SlotSummaryPreview from '../../components/Employer/SlotSummaryPreview'
import { DateCard } from '../../components/Employer/DateCard'

const OnetooneSlotBook = () => {
  return (
    <div className='flex justify-between' >
        <div className='w-[70%]'>
             <InterviewDateManager></InterviewDateManager>

             {/* <DateCard></DateCard> */}


        </div>
       
       <div className='w-[25%]'>
          <SlotSummaryPreview></SlotSummaryPreview>

       </div>
      

      
    </div>
  )
}

export default OnetooneSlotBook;


