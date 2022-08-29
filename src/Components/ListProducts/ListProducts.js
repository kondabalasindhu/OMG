// import Table from 'react-bootstrap/Table';
import "./ListProducts.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataList from '../dataList/DataList';
import { useEffect, useState } from 'react';
import ApiServices from "../Services/ApiServices";
  

function ListProducts() {
const [product,SetProduct]=useState([]);
const [status,setStatus]=useState(false);
// useEffect(async ()=>{
// let result =fetch("http://localhost:3000//api/admin/getAllProducts");
// result =await (await result).json();
// SetProduct(result)
// },[])
// console.warn("result",product)




const [data,setData]=useState([]);
//   const handleAdd=()=>{
// setCount((PrevState)=>PrevState=count+1);
//   }
//   console.log(count)
useEffect(() => {
  ApiServices.listofproducts()
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      setStatus(true);
    })
    .catch((err) => {alert(err.message)
      setStatus(false);
    });
}, []);

console.table(data)
  return (
    <>
    <div className="tableFixHead">
    <table>
      <thead>
        <tr>
          <th>
          Category name
          </th>
  
          <th>Category id</th>
          <th>Product id</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          
          <th>Status</th>
          <th>remarks</th>

        </tr>
      </thead>
        <tbody>
       
{ data.map((item,index) =>
    {
   return(
    <tr key={index}>
   <td>{item?.categoriesEntity?.catName}</td>
   <td>{item?.categoriesEntity?.catId}</td>
   <td>{item?.prodId}</td>
   <td>{item?.prodName}</td>
   <td><img src={item?.imageUrl} height="80" width="100" alt="product images"/></td>

   <td>{item?.description}</td>
   <td>{item?.price}</td>
  
   {/* <td>{item?.qty}</td> */}
   <td>{item?.status}</td>
  <td> <button type="button" class="btn btn-success">update</button></td>
  
   </tr>
   )
     
       
      
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