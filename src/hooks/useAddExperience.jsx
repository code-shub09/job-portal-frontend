import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExperience } from "../api/profileApi";


export function useAddExperience() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: addExperience,
    onSuccess: () => qc.invalidateQueries(["profile"]),
  });
}



