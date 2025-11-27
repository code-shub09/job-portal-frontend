import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4300/jobseekar",      // you can also use http://localhost:3000/api
  withCredentials: true // send cookies if needed
});



export default api;
