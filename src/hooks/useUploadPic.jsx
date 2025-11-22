import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadProfilePic } from '../api/profileApi';

export default function useUploadPic() {
  const qc = useQueryClient();

  return useMutation({
    // accept FormData or File; we'll pass FormData from the component
    mutationFn: (formData) => uploadProfilePic(formData),
    onSuccess: () => {
      // refresh cached profile after successful upload
      qc.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}




