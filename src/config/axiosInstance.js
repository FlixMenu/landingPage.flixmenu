import axios from "axios"
import { API_BASE_URL } from "./config"


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "content-type": "application/json",
        "Authorization": `Bearer somebullshittoken`
    }
})

// create an interceptor which handles some logic before any  data is requested to the backend

axiosInstance.interceptors.request.use(async (req) => {

    // we can validate {accessToken} for expirection date and check if it expired or not. 
    let { token } = await refreshToken()
    req.headers.Authorization = `Bearer ${token}`
    // if it expired, request a new token and update localstorage with the new token.
    return req;
})

export default axiosInstance

async function refreshToken() {

}