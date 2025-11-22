
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { resumeUpload } from '../api/profileApi';

const useUploadResume = (onSuccessUpload) => {
    const qc = useQueryClient();
  return useMutation({
    mutationFn:(resume)=>resumeUpload(resume),
    onSuccess:(data)=>{
        //res=backend
        // data=res.data
        console.log("🎉 SUCCESS: Backend responded:", data);
        onSuccessUpload(data.resumeFile);
        qc.invalidateQueries(['profile'])
    }
  })
}


export default useUploadResume;
