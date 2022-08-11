// import Table from 'react-bootstrap/Table';
import "./ListProducts.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataList from '../dataList/DataList';
import { useState } from 'react';
  

function ListProducts() {
const [count,setCount]=useState(1);
  const handleAdd=()=>{
setCount((PrevState)=>PrevState=count+1);
  }
  console.log(count)
  return (
    <>
    <div class="tableFixHead">
    <table>
      <thead>
        <tr>
          <th>
          <Dropdown>
        <Dropdown.Toggle variant="success">
        category Name
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            fruits
          </Dropdown.Item>
          <Dropdown.Item href="#">
         fruits
          </Dropdown.Item>
          <Dropdown.Item href="#">
          fruits
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </th>
          <th>product Name</th>
          <th>Quantity</th>
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
  <button class="btn btn-success" onClick={handleAdd}>Add Row</button>
  </>
  );
}

export default ListProducts;