import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registorEmployer } from "../api/EmployerApi";
import { useNavigate } from "react-router-dom";
const useRegistorEmployer = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (payload) => registorEmployer(payload),
    onSuccess: (data) => {
      console.log(data);
      console.log("success");
      navigate("/post-job");
    },
    onError: (error) => {
      console.log("Registration Error:", error);

      // Backend sends custom error message? Show it.
    
    //   alert(message); // You can replace with toast UI
    },
  });
};

export default useRegistorEmployer;
