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
  const response = await api.post('/profile/upload-resume', formData, { headers: { "Content-Type": "multipart/form-data" } });
  return response.data;
}


export async function applyJob(formInfo) {
  const response = await api.post("/job-apply", formInfo, { headers: { "Content-Type": "multipart/form-data" } });
  return response.data
}


export const saveCareerPreferences = async (data) => {
  console.log('data profile api', data)
  const res = await api.post("/profile/career-preferences", data);
  return res.data;
};

export const getCareerPreferences = async () => {
  const res = await api.get("/profile/career-preferences");
  return res.data;
};

export async function jobseekerApplications(params) {
  const res = await api.get("/applications");
  return res.data;
}



export async function getApplicationById(appId) {
  console.log('applcationId',appId)
  const res = await api.get(`/application/${appId}`);
  return res.data.application;
}
