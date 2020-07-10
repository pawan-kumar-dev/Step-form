import React from 'react';
import classes from './PersonalDetails.module.css';
const PersonalDetails=({data,change,click})=>{

    return(
        <div className={classes.PersonalDetails}>
            <form>
              <h2>Fill Your Personal Details</h2>
      <input type="text" name="fname" value={data.fname} placeholder="Enter First Name" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="text" name="lname" value={data.lname} placeholder="Enter Last Name" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="number" name="number" value={data.number} placeholder="Enter Contact Number" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="email" name="email" value={data.email} placeholder="Enter Email ID" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <span>Select Your Hobbies :</span>
      <span>
      <input type="checkbox" checked={data.singing}  name="singing" onChange={change}/>
      Singing 
      </span>
      <span>
      <input type="checkbox" checked={data.dancing}  name="dancing" onChange={change}/>
      Dancing 
      </span>
      <span>
      <input type="checkbox" checked={data.reading}  name="reading" onChange={change}/>
      Reading 
      </span>
      <span>Married : <input type="radio" name="married" checked={data.married==='YES'} onChange={change}
      value="Yes"/>Yes <input type="radio" name="married" checked={data.married==='NO'} onChange={change}
      value="No"/>No </span>
      <span>
        Gender : <input type="radio" name="gender" checked={data.gender==='MALE'} onChange={change} value="male"/>Male <input type="radio" name="gender" checked={data.gender==='FEMALE'} onChange={change} value="female"/>Female
      </span>
      <button className={classes.btns} onClick={click}>Submit And Move to Next</button>
     </form>
     
    </div>
    )
}
export default  PersonalDetails;