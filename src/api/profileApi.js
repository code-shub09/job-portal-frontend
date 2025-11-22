import api from "./axiosInstance";

export async function getProfile() {
  const response = await api.get("/profile");
  return response.data;
}


// ✅ Add experience
export async function addExperience(experienceData) {
  const response = await api.post("/profile/experience", experienceData);
  return response.data;
}


// ✅ Upload profile pic
export async function uploadProfilePic(file) {
  const formData = new FormData();
  formData.append("profilePic", file);

  const response = await api.post("/profile/upload-photo", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return response.data;
}


export async function resumeUpload(resume) {
  const formData = new FormData();
  formData.append('resume', resume);
  const response=await api.post('/profile/upload-resume', formData, { headers: { "Content-Type": "multipart/form-data" } });
  return response.data;
}


export async function applyJob(formInfo) {
    const response = await api.post("/job-apply", formInfo,{ headers: { "Content-Type": "multipart/form-data" } });
    return response.data
}

