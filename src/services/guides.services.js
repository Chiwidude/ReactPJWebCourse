import axios from "axios";

const API_URL = "http://smiteBckendLB-974513310.us-east-2.elb.amazonaws.com:4200/api/v1/guides/";

export const getAll = async () => {
    const response = await axios.get(API_URL).catch(err => err.response);
    return response.data;
}
export const getGuides = async () => {
    const username = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).username;
    const token = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).token;
    const response = await axios.get(API_URL+`?user=${username}`,{headers:{'authorization':`Bearer ${token}`}}).catch(err => err.response);
    return response;
}

export const saveGuide = async (data) => {
    const token = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).token;
    const response = await axios.post(API_URL+"create", data, {headers:{'authorization':`Bearer ${token}`}}).catch(err => err.response);
    if(response.status === 201){
        const object = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token"));
        const newToken = response.headers.authorization;
        object.token = newToken;
        localStorage.setItem("token", JSON.stringify(object));        
    }
    return response.status;
}
export const deleteGuide = async (id) => {
    const token = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).token;
    const response = await axios.delete(API_URL+`delete/${id}`,{headers:{'authorization':`Bearer ${token}`}}).catch(err => err.response);
    if(response.status === 204){
        const object = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token"));
        const newToken = response.headers.authorization;
        object.token = newToken;
        localStorage.setItem("token", JSON.stringify(object));   
    }
    return response.status;
}
export const getGuide = async(id) => {    
    const token = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).token;
    const response = await axios.get(API_URL+`${id}`,{headers:{'authorization':`Bearer ${token}`}}).catch(err => err.response);
    return response;
}
export const updateGuide = async(id, data)=>{
    const token = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).token;
    const response = await axios.put(API_URL+id, data, {headers:{'authorization':`Bearer ${token}`}}).catch(err => err.response);
    if(response.status === 204){
        const object = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token"));
        const newToken = response.headers.authorization;
        object.token = newToken;
        localStorage.setItem("token", JSON.stringify(object));        
    }
    return response;

}
