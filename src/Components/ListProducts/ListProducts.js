// import Table from 'react-bootstrap/Table';
import "./ListProducts.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataList from '../dataList/DataList';
import { useEffect, useState } from 'react';
import ApiServices from "../Services/ApiServices";
  

function ListProducts() {
const [data,setData]=useState({});
//   const handleAdd=()=>{
// setCount((PrevState)=>PrevState=count+1);
//   }
//   console.log(count)
useEffect(() => {
  ApiServices.listofproducts()
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => alert(err.message));
}, []);


  return (
    <>
    <div className="tableFixHead">
    <table>
      <thead>
        <tr>
          <th>
          Category name
          </th>
          <th>By category</th>
          <th>category id</th>
          <th>product id</th>
          <th>product Name</th>
          <th>Quantity</th>
          <th>price</th>
          <th>product</th>
          <th>Status</th>
          <th>remarks</th>
        </tr>
      </thead>
      {/* <tbody>
       
       {count>0?<DataList/>:""} 
       {count>1?<DataList/>:""} 
       {count>2?<DataList/>:""}
      </tbody> */}
      <tbody>
        
{
  data.map((it) => 
    {
<td>
  {
    it.prodId
  }
</td>
    }
  )
}
  



      </tbody>
    </table>
 
  </div>
  {/* <button className="btn btn-success" onClick={handleAdd}>Add Row</button> */}
  </>
  );
}

export default ListProducts;