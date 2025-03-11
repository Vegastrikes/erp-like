import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "http://localhost:6543/api",
    withCredentials: true
})

export {
    axiosAPI
};