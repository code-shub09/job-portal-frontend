
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteJob } from '../api/EmployerApi';
export function useDeleteJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobId) => deleteJob(jobId),
    onSuccess: () => {
      queryClient.invalidateQueries(["AllJobPosts"]);
    }
  });
}
