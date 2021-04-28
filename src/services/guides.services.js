import axios from "axios";

const API_URL = "http://localhost:4200/api/v1/guides/";

export const getAll = async () => {
    const response = await axios.get(API_URL).catch(err => err.response);
    return response.data;
}

