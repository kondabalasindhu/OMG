

import axios from "axios";


const BASE_URL = "http://10.81.4.193:2022"; // srikanth pc
  
// const BASE_URL = "http://10.81.4.242:2022"; // pavan








//post
const LOGIN_API_URL = `${BASE_URL}/api/login`;

//

const REGISTRATION_API_URL = `${BASE_URL}/api/user/register`;
// const FORGOT_API_URL = `${BASE_URL}/smsForgot/forgot-password`;
const FORGET_API_URL = `${BASE_URL}/api/user/sendOtp`;
const RESETPASSWORD_API_URL = `${BASE_URL}/api/verify`;
const REG_OTP_API_URL= `${BASE_URL}/api/sendOtp`;
const ADDGROCERY_API_URL= `${BASE_URL}/api/admin/addCategory`;
//put

//delete

export function auth() {
  const token = sessionStorage.getItem("Access_Token");
  const config = {

    
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

export default  new (class ApiService {
  login(data) {
    return axios.post(LOGIN_API_URL, data);
  }

  registeration(data) {
    return axios.post(REGISTRATION_API_URL, data);
  }

  forgetPwd(data) {
    return axios.post(FORGET_API_URL, data);
  }
  ResetPassword(data) {
    return axios.post(RESETPASSWORD_API_URL, data);
  }
  sendOtp(data){
   
    return axios.post(REG_OTP_API_URL, data);
  }
  addgrocery(data){
    return axios.post(ADDGROCERY_API_URL,data,auth());
  }

})();
