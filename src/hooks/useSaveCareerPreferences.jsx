import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveCareerPreferences } from "../api/profileApi";


export const useSaveCareerPreferences = (onClose) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: saveCareerPreferences,
    onSuccess: () => {
        console.log('sucess -yes')
      qc.invalidateQueries(["profile"]);
      onClose();
    },
    onError: (err) => {
        console.log(err);
      alert(err.response?.data?.message || "Something went wrong");
    },
  });
};

