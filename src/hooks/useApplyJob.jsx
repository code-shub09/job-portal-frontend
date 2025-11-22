import { useMutation } from "@tanstack/react-query";
import React from "react";
import { applyJob } from "../api/profileApi";

// wrapping useMutaition makes react component readable we can nowdefine useMutaion somewhere else and use it in react comp
const useApplyJob = (afterSucess) => {
  return useMutation({
    mutationFn: (formInfo) => applyJob(formInfo),
    onSuccess: (data) => {
      console.log("sucessful !!! data from server:", data);

      if (afterSucess) {
        afterSucess(data);
      }
    },
  });
};

export default useApplyJob;
