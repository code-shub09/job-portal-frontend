import { useMutation, useQueryClient } from "@tanstack/react-query";
import { closeJob } from "../api/EmployerApi";


export function useCloseJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobId) => closeJob(jobId),

    onSuccess: () => {
      alert("Job closed successfully!");
      queryClient.invalidateQueries(["AllJobPosts"]);
    },

    onError: () => {
      alert("Failed to close job");
    }
  });
}
