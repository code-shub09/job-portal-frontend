import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleJob } from "../api/EmployerApi";

const useSIngleJobPost = (id) => {
  return useQuery({
    queryKey: ["singleJob", id],
    queryFn: () => getSingleJob(id),
  });
};

export default useSIngleJobPost;
