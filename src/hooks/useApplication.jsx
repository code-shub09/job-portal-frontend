import { useQuery } from "@tanstack/react-query";
import { getApplicationById } from "../api/profileApi";


export function useApplication(appId) {
  return useQuery({
    queryKey: ["application", appId],
    queryFn: () => getApplicationById(appId),
  });
}
