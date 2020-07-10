import React from 'react';
import classes from './Payment.module.css';
const Payment=({data,change,click})=>{
    return(
        <div className={classes.payment}>
             <form>
             <h2>Fill Your Payment Details</h2>
      <input type="text" name="accountName" value={data.accountName} placeholder="Enter Your Name In Account" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="number" min="1" name="accountNum" value={data.accountNum} placeholder="Enter Your Account Number" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="number" min="1" name="amount" value={data.amount} placeholder="Enter Amount" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="text" name="bankName" value={data.bankName} placeholder="Enter Your Bank Name" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="text" name="ifsc" value={data.ifsc} placeholder="Enter IFSC Code" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="number" min="1" name="cardNum" value={data.cardNum} placeholder="Enter 16 Digit Card Number" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="number" min="1" name="cvv" value={data.cvv} placeholder="Enter CVV Number" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <input type="number" min="1" name="otp" value={data.otp} placeholder="Enter OTP Number" onChange={change} className={classes.inputs} required autoComplete="off"/>
      <button className={classes.btns} onClick={click}>Submit And Move to Next</button>
     </form>
        </div>
    )
}
export default Payment;