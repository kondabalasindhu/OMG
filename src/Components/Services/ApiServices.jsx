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
const REG_OTP_API_URL = `${BASE_URL}/api/sendOtp`;
const ADDGROCERY_API_URL = `${BASE_URL}/api/admin/addCategory`;

//put

//delete\

//dashboard
const PRODUCTS_LIST = `${BASE_URL}/api/admin/getAllProducts`;
const ADD_PRODUCTS = `${BASE_URL}/api/admin/addProducts`;
const ADD_CATEGORY = `${BASE_URL}/api/admin/getCategories`;
const LIST_OF_PRODUCTS = `${BASE_URL}/api/admin/getAllProducts`;
const LIST_OF_CATEGORIES = `${BASE_URL}/api/admin/getCategories`;
const UPDATE = '${BASE_URL}/api/admin/updateProd';

export function auth() {
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaXZ5YSIsImV4cCI6MTY2MDkyMDA3MywiaWF0IjoxNjYwODg0MDczfQ.k4dQfRXC5KhYfVjtihUOGLXRz1rGRlKA-XZ4BWh7_XA"
  const token = sessionStorage.getItem("Access_Token");
  console.log(token);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
      // Authentication: `Bearer ${token}`,
    },
  };
  return config;
}

export default new (class ApiService {
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
  sendOtp(data) {
    return axios.post(REG_OTP_API_URL, data);
  }
  addgrocery(data) {
    return axios.post(ADDGROCERY_API_URL, data, auth());
  }
  productsList() {
    return axios.get(PRODUCTS_LIST);
  }
  addproducts(data) {
    return axios.post(ADD_PRODUCTS,data,auth());
  }
  getCategory() {
    return axios.get(ADD_CATEGORY, auth());
  }
  listofproducts(){
    return axios.get(LIST_OF_PRODUCTS,auth());
  }
  listofcategories(){
    return axios.get(LIST_OF_CATEGORIES,auth());
  }
  update(){
    return axios.Axios(UPDATE,auth());
  }
})();
