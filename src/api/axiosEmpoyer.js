import axios from "axios";

const apiE = axios.create({
  baseURL: "https://job-portal-server-lr93.onrender.com/employer",      // you can also use http://localhost:3000/api
  withCredentials: true // send cookies if needed
});

// const apiE = axios.create({
//   baseURL: "http://localhost:4300/employer",      // you can also use http://localhost:3000/api
//   withCredentials: true // send cookies if needed
// });



export default apiE;
