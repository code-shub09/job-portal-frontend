import apiE from "./axiosEmpoyer";





export  async function getAllJobPost(){
    console.log('fetching jobs')
    const res= await apiE.get('/all-jobposts')
    console.log('res',res.data.jobPosts);
    return res.data.jobPosts;
}


export async function closeJob(id) {
  return await apiE.patch(`/job/close/${id}`);
}

export async function deleteJob(id) {
  return await apiE.delete(`/job/delete/${id}`);
}


export async function getSingleJob(id) {
  const res = await apiE.get(`/job/${id}`);
  return res.data.job;
}

export async function getAllApplicaion(jobId) {
    console.log('get function')
  const res = await apiE.get(`/job/all-application/${jobId}`);
  console.log('api axios,',res.data.applications)
  return res.data.applications;
}


export async function shortlistApplication({applicationId, note, notify} ) {
    console.log('get function',applicationId);
  const res = await apiE.post(`/job/application/shortlist/${applicationId}`,{note,notify});
  console.log('api axios,',res.data)
  return res.data;
}