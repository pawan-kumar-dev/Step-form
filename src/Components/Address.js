import React from 'react';
import classes from './Address.module.css';
const Address=({data,change,click})=>{
    return(
        <div className={classes.address}>
            <form className={classes.forms}>
            <h2>Fill Your Address Details</h2>
      <input type="text" name="roomNum" value={data.roomNum} placeholder="Enter Room Number" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="text" name="streetName" value={data.streetName} placeholder="Enter Street Name" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="text" name="city" value={data.city} placeholder="Enter City Name" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <select className={classes.inputs} value={data.state} name="state" onChange={change}>
          <option value="NONE">Select State</option>
          <option value="MAHARASHTRA">Maharashtra</option>
          <option value="GOA">Goa</option>
          <option value="GUJARAT">Gujarat</option>
          <option value="PUNJAB">Punjab</option>
          <option value="RAJASTHAN">Rajasthan</option>
          <option value="BIHAR">Bihar</option>
          <option value="KERELA">Kerela</option>
          <option value="KARNATAKA">Karnataka</option>
          <option value="TAMIL NADU">Tamil Nadu</option>
          <option value="HARYANA">Haryana</option>
      </select>
      <input type="number" min="1" name="pincode" value={data.pincode} placeholder="Enter Pincode" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <button className={classes.btns} onClick={click}>Submit And Move to Next</button>
     </form>
        </div>
    )
}
export default Address;