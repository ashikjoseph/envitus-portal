
import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";


const API_KEY = process.env.REACT_APP_API_KEY;
console.log("apikey",API_KEY)


// default login

export const loginApi = async (reqBody) => {
    return await commonAPI("post", `${BASE_URL}/login`, reqBody, "");
};


// device listing

export const deviceApi = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/device-list`,'',reqHeader)
}


// Get live sensor data API
export const getSensorDataApi = async (deviceId) => {

    const reqHeader = { apikey: API_KEY };

    return await commonAPI("GET", `${BASE_URL}/device/sensor/dashboardData?deviceIds=${deviceId}`, '', reqHeader);
};