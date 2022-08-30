// import Table from 'react-bootstrap/Table';
import "./Update.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataList from '../dataList/DataList';
import { useEffect, useState } from 'react';
import ApiServices from "../Services/ApiServices";
  

function Update({data}) {
  console.log(data);
  const [categorylist, setcategorylist] = useState([]);
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
  const [datas, setDatas] = useState({});
const [count,setCount]=useState(1);
  const handleAdd=()=>{
setCount((PrevState)=>PrevState=count+1);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
// console.log(e.target.value);
// console.log(e.target.name)
// alert("called");
    setDatas((prevState) => ({
      ...prevState,
      [name]: value,
      
    }));
  };
  useEffect (() => {
    ApiServices.getCategory()
      .then((res) => {
        // console.log(res.data);
        setcategorylist(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log( datas );
    ApiServices.addproducts(datas)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("product added");
        // navigate("/");
      })
      .catch((error) => {
        // alert("something went wrong ");
        setErrors(true);
        console.log(error);
      });
    setStatus(false);
  };

  // console.log(data)
  return (
    <>
    <div className="">
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
       
      {data &&(
      <tr className="chocolate">
      <select name="catName" id="cars" defaultValue={data.categoriesEntity?.catName} required onChange={(e)=>{
        const { name, value } = e.target;
        setDatas((prevState) => ({
      ...prevState,
      
        "categoriesEntity": {
          [name]: value,
      }
      
      
    }));}}>
       <option value="">select</option>  
        {categorylist.map((it) => (
          <option value={it.catName} key={it.catName}
           >

            {it.catName}</option>
        ))}
      </select>
      <td>
        <input placeholder="Apple"  
        name="prodName" required
        defaultValue={data.prodName}
        onChange={handleChange} type="text" />
      </td>
      <td>
   
        <input placeholder="Apple"  
        name="description" required
        defaultValue={data.description}
        onChange={handleChange} type="text" />
             
    
      </td>
      <td>
        <input
          placeholder="199.00"
          name="price"
          type="number"
          defaultValue={data.price}
          required
          onChange={handleChange}
        />
      </td>

      <td>
        <input type="url" 
        name="imageUrl" required onChange={handleChange}/>
      </td>
      <td>
        <select name="status" id="cars" required
        defaultValue={data.status}
          onChange={handleChange}>
             <option value="">select</option>  
          <option value="available">Available</option>
          <option value="not available">not Available</option>        
          
        </select>
      </td>
      <td className="btn btn-success" >
       <button type="submit" onClick={handleSubmit} > add </button>
      </td>
    </tr> )}
    {!data&&(
      count>0?<DataList/>:"" 
    )}
     {count>1?<DataList/>:""}
      {count>2?<DataList/>:""}
      </tbody>
     
    </table>
 
  </div>
  {/* <button className="btn btn-success" onClick={handleAdd}>Add Row</button> */}
  </>




  );
}

export default Update;