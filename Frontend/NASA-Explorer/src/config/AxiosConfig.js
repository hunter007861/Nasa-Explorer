import axios from "axios";

const baseURL = "https://nasa-explorer-backend-xed6.onrender.com";

const Axios = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": 'application/json',
    },
    withCredentials: true
})

export { Axios, baseURL}
