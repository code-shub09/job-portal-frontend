import { useQuery } from "@tanstack/react-query";
import { getAllJobPost } from "../api/EmployerApi";


export function useJobPost() {
  return useQuery({
    queryKey: ["AllJobPosts"],
    queryFn: getAllJobPost,
  });
}


