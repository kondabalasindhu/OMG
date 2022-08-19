import React, { useEffect, useState } from "react";
import ApiServices from "../Services/ApiServices";

const DataList = () => {
  const [categorylist, setcategorylist] = useState([]);

  useEffect(() => {
    ApiServices.getCategory()
      .then((res) => {
        console.log(res.data);
        setcategorylist(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  return (
    <tr className="chocolate">
      <select name="category" id="cars">
        {categorylist.map((it) => (
          <option value="volvo">{it.catName}</option>
        ))}
      </select>
      <td>
        <input placeholder="Apple" type="text"  />
      </td>
      <td>
        <select name="qty" id="cars">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </td>
      <td>
        <input placeholder="199.00" type="number"  />
      </td>

      <td>
        <input type="file" />
      </td>
      <td>
        <select name="cars" id="cars">
          <option value="volvo">Available</option>
          <option value="saab">not Available</option>
          {/* <option value="opel">3 kg</option>


<option value="audi">4 kg</option> */}
        </select>
      </td>
      <td className="btn btn-success">add</td>
    </tr>
  );
};

export default DataList;
