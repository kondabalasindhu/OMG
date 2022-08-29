// import Table from 'react-bootstrap/Table';
import "./AddProducts.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataList from '../dataList/DataList';
import { useState } from 'react';
  

function AddProducts() {
const [count,setCount]=useState(1);
  const handleAdd=()=>{
setCount((PrevState)=>PrevState=count+1);
  }
  console.log(count)
  return (
    <>
    <div className="tableFixHead">
    <table>
      <thead>
        <tr>
          <th>
          category name
          </th>
          <th>product Name</th>
          <th>description</th>
          <th>price</th>
          <th>product</th>
          <th>Status</th>
          <th>remarks</th>
        </tr>
       
      </thead>
      <tbody>
       
       {count>0?<DataList/>:""} 
       {count>1?<DataList/>:""} 
       {count>2?<DataList/>:""}
      </tbody>
     
    </table>
 
  </div>
  <button className="btn btn-success" onClick={handleAdd}>Add Row</button>
  </>
  );
}

export default AddProducts;