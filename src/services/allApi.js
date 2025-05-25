import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//register
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody)
}

//login api
export const LoginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody)
}

//Google login api
export const googleLoginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/google-login`,reqBody)
}