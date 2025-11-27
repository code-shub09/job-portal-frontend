import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shortlistApplication } from "../api/EmployerApi";

const useShortlist = (setOpen,jobId) => {
  const qc = useQueryClient();

  return useMutation({
    // accept FormData or File; we'll pass FormData from the component
    mutationFn: ({ applicationId, note, notify }) => shortlistApplication({ applicationId, note, notify }),
    onSuccess: () => {
    
      

      qc.invalidateQueries({ queryKey: ["Applications",jobId] });
      console.log('success shortlist');
      setOpen(false)
    },
    onError: (err) => {
        console.log(err);
      alert(err?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useShortlist;
