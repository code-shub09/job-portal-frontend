import React from 'react'

const AboutCompany = ({companyDescription}) => {
    console.log('description',companyDescription);
  return (
    <div>
        <p className='font-semibold text-lg'>About the company</p>
        <p className='text-sm'>{companyDescription}</p>
      
    </div>
  )
}

export default AboutCompany
