import axios from "axios";

const API_URL = "http://localhost:4200/api/v1/users/";
export const login = async (username, password) => {
   const response = await axios.post(API_URL+"login", {email:username, password: password});
   if(response.status === 200){       
       localStorage.setItem("token", JSON.stringify(response.data));
       return response.status;
   }
   return response.status;
}

export const signUp = async (data) => {    
    const response = await axios.post(API_URL+"signup", data);
    return response.status;
}