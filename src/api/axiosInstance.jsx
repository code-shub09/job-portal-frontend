import axios from "axios";

const api = axios.create({
  baseURL: "https://job-portal-server-lr93.onrender.com/jobseekar",      // you can also use http://localhost:3000/api
  withCredentials: true // send cookies if needed
});



export default api;
