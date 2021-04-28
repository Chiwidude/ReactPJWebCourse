import axios from "axios";

const API_URL = "http://localhost:4200/api/v1/users/";
export const login = async (username, password) => {
   const response = await axios.post(API_URL+"login", {email:username, password: password}).catch(err => err.response);
   if(response.status === 200){       
       localStorage.setItem("token", JSON.stringify(response.data));
       return response.status;
   }
   return response.status;
}

export const signUp = async (data) => {    
    const response = await axios.post(API_URL+"signup", data).catch(err => err.response);
    return response;
}

export const authorize = async() => {
    const user = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).username;
    if( user === null) {
        return {status: 404};
    }
    const token = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).token;
    const response = await axios.get(API_URL+"authorize", {headers:{'authorization':`Bearer ${token}`}}).catch(err => err.response);
    return response;
}