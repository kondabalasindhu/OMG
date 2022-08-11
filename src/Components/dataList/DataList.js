import React from 'react'

const DataList = () => {
  return (
    <tr className='chocolate'>
    <td>Fruits</td>
    <td><input value="Apple" type="text" readOnly/></td>
    <td>
    <select name="cars" id="cars">
<option value="volvo">1 kg</option>
<option value="saab">2 kg</option>
<option value="opel">3 kg</option>
<option value="audi">4 kg</option>
</select>
    </td>
    <td><input value="199.00" type="text" readOnly/></td>
    
    <td><input type="file"  /></td>
    <td>
    <select name="cars" id="cars">
<option value="volvo">Available</option>
<option value="saab">not Available</option>
{/* <option value="opel">3 kg</option>


<option value="audi">4 kg</option> */}
</select>
    </td>
    <td class="btn btn-success">add</td>
  </tr>
  )
}

export default DataList