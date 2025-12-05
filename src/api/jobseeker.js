import api from "./axiosInstance";

export async function jobSearch(filters) {
    console.log('filter:',filters);
    const response=await api.get('/job/search',{params:filters});
    return  response.data;
}

