import { useQuery } from "@tanstack/react-query";

import { jobseekerApplications } from "../api/profileApi";

export const useJobApplications = () => {
  return useQuery({
    queryKey: ["jobseeker-applications"],
    queryFn: jobseekerApplications
  });
};
