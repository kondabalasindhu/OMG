import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Cards from './Cards';

// import test6 from "./test6.jpg";

import Carsouel from './Carsouel';
import NavBar from './NavBar';
import "./NavigationBar.css";
import Product from './Product';
import ApiServices from './Services/ApiServices';


const Styles = styled.div`
  .navbar { background-color: #64dd1f; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;   
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
 
.omg{
  font-size: 2.4em !important;
    color: #9FFFCB;
    font-family: 'Cormorant SC', serif;

}
.btn-success {
  color: green;
  background-color: green;
  border-color: #9FFFCB;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}
.carousel-indicators {
  padding-bottom: 142px !important;
    position: inherit !important;
    
}
`;

export const NavigationBar =
  () => {
    const [productsListData,setProductsListData]=useState([])
    useEffect(()=>{
      ApiServices.productsList().then(res=>{
        console.log(res.data)
        setProductsListData(res.data)
      })
    },[])
    return (
      <>
        <NavBar />
        <div>
          <button className="btn btn-success rr me-md-2 " shape="rounded-0" type="button">Categories</button>
          <button className="btn btn-success  rr me-md-2 " shape="rounded-0" type="button">About Us</button>
          <button className="btn btn-success rr me-md-2 " shape="rounded-0" type="button">Contact us</button>
          </div>
        <Carsouel />
        <div className="products">

          {productsListData.map(it=><Product key={it.prodId} data={it}/>)}
        </div>
        {/* <Cards /> */}
      </>
    )

  }