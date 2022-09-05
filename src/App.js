import React from 'react';
// import styled from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ForgetPage from './Components/ForgetPage/ForgetPage';
import Admin from './Components/Admin/Admin';
// import ApiServices from './Components/Services/ApiServices';
import AddGrocery from './Components/AddGrocery/AddGrocery';
// import { Tables } from './Components/Tables/Tables';
import AddProducts from './Components/AddProducts/AddProducts';
import ListProducts from './Components/ListProducts/ListProducts';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import Footer from './Components/Footer/Footer';
import MyAccount from './Components/MyAccount/MyAccount';
import PersonalDetails from './Components/PersonalDetails/PersonalDetails';
import EditProfile from './Components/EditProfile/EditProfile';
import MyCart from './Components/MyCart/MyCart';
import  DeliveryAddress  from './Components/DeliveryAddress/DeliveryAddress';
import Update from './Components/Update/Update';
import Inventory from './Components/Inventory/Inventory';





function App() {
  return (

    <Router>
      

      {/* <Sidebar /> */}
      <Routes>
       <Route exact path="/" element={<NavigationBar />} />
       
        <Route path='/login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/ForgetPage' element={<ForgetPage />} />
        <Route path='/Admin' element={<Admin />} />
        {/* <Route path='/ApiServices' element={<ApiServices />} /> */}
        <Route path='/AddGrocery' element={<AddGrocery />} />
        {/* <Route path='/Tables' element={<Tables />} /> */}
        <Route path='AddProducts' element={<AddProducts />} />
        <Route path='ListProducts' element={<ListProducts />} />
        <Route path='UserDashboard' element={<UserDashboard />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="MyAccount" element={<MyAccount />} />
        <Route path="PersonalDetails" element={<PersonalDetails />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path='/MyCart' element={<MyCart />} />
        <Route path='/DeliveryAddress' element={<DeliveryAddress />} />
        <Route path='/Update' element={<Update />} />
        <Route path='/Inventory' element={<Inventory />} />
      
  
      </Routes>
    </Router>

  );
}

export default App;
