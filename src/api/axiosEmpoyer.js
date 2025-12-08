import axios from "axios";
import api from "./axiosInstance";
import toast from "react-hot-toast";

const apiE = axios.create({
  baseURL: "https://job-portal-server-lr93.onrender.com/employer",      // you can also use http://localhost:3000/api
  withCredentials: true // send cookies if needed
});

// const apiE = axios.create({
//   baseURL: "http://localhost:4300/employer",      // you can also use http://localhost:3000/api
//   withCredentials: true // send cookies if needed
// });



export default apiE;

// global error handling

apiE.interceptors.response.use((response)=>{

  // return Promise.resolve(response) same thing ,
  return response;
},(error)=>{
  const message= error?.response?.data?.message|| error?.message||"something went wrong" ;
   toast.error(message);
   return Promise.reject(error)

})


// apiE.interceptors.response.use(
//   (response) => response,

//   (error) => {
//     const message =
//       error?.response?.data?.message ||
//       error?.message ||
//       "Something went wrong";

//     toast.error(message);

//     return Promise.reject(error);
//   }
// );
