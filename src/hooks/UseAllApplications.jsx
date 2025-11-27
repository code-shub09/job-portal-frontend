import { useQuery } from "@tanstack/react-query";
import React from 'react'
import { getAllApplicaion } from "../api/EmployerApi";

const UseAllApplications = (jobId) => {
  return (
    useQuery({
        queryKey:['Applications',jobId],
        queryFn:()=>(getAllApplicaion(jobId))

    })
    
  )
}

export default UseAllApplications;
