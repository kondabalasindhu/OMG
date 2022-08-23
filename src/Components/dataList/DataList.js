import React, { useEffect, useState } from "react";
import ApiServices from "../Services/ApiServices";

const DataList = () => {
  const [categorylist, setcategorylist] = useState([]);
  const [showPro, setShowPro] = useState(false);
  const [prodName, setprodName] = useState("");
  const [price, setprice] = useState(0);
  const [imageUrl, setimageUrl] = useState("");
  const [AddOnDate, setAddOnDate] = useState("");
  const [qty, setqty] = useState(0);
  // const [status, setstatus] = useState("");
  const [categoriesEntity, setcategoriesEntity] = useState({});
  const [datas, setDatas] = useState();
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);

  const data = {
    prodName: showPro,

    price: prodName,

    imageUrl: imageUrl,

    AddOnDate: AddOnDate,

    qty: qty,

    status: status,

    categoriesEntity: categoriesEntity,
  };
  console.log(data);

  useEffect(() => {
    ApiServices.getCategory()
      .then((res) => {
        console.log(res.data);
        setcategorylist(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);






  const handleChange = (e) => {
    const { name, value } = e.target;

    setDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("forget password caled");
    console.log({ datas });
    ApiServices.addproducts(datas)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("product added");
        // navigate("/");
      })
      .catch((error) => {
        alert("something went wrong");
        setErrors(true);
        console.log(error);
      });
    setStatus(false);
  };

  return (
    <tr className="chocolate">
      <select name="category" id="cars">
        {categorylist.map((it) => (
          <option value="volvo"  onChange={handleChange}>{it.catName}</option>
        ))}
      </select>
      <td>
        <input placeholder="Apple"  onChange={handleChange} type="text" />
      </td>
      <td>
        <select name="qty"  onChange={handleChange}id="cars">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </td>
      <td>
        <input
          placeholder="199.00"
          
          type="number"
          onChange={(e) => setprice(e.target.value)}
        />
      </td>

      <td>
        <input type="text"  onChange={handleChange}/>
      </td>
      <td>
        <select name="cars" id="cars"  onChange={handleChange}>
          <option value="volvo">Available</option>
          <option value="saab">not Available</option>
          {/* <option value="opel">3 kg</option>


<option value="audi">4 kg</option> */}
        </select>
      </td>
      <td className="btn btn-success" onClick={handleSubmit}>
        add
      </td>
    </tr>
  );
};

export default DataList;
