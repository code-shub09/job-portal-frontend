import React from "react";
import { useQuery } from "@tanstack/react-query";
import { jobSearch } from "../api/jobseeker";

const useJobSearch = (filters) => {
  return useQuery({
    queryKey: ["jobSearch", filters],

    queryFn: () => jobSearch(filters),
    keepPreviousData: true, // prevents UI jump during new search
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

export default useJobSearch;

