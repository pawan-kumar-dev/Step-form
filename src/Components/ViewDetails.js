import React,{useEffect, useState} from 'react'
import classes from './ViewDetails.module.css';
const ViewDetails=({data,change,click})=>{
    const [datas,setData]=useState({});
    useEffect(()=>{
        setData(data)
    },[data])
    const Datas=<div className={classes.datashow}>
        <h2>{datas.fname&&"Personal Details"}</h2>
        <p>{datas.fname&&`First Name : ${datas.fname}`}</p>
        <p>{datas.lname&&`Last Name : ${datas.lname}`}</p>
        <p>{datas.number&&`Contact Number : ${datas.number}`}</p>
        <p>{datas.email&&`Email ID : ${datas.email}`}</p>
        <p>
            {`${(datas.singing||datas.reading||datas.dancing)?`Hobbies : ${datas.singing?"Singing":""} ${datas.dancing?"Dancing":""} ${datas.reading?"Reading":""}`:""}`}
        </p>
        <p>{datas.married&&`Married : ${datas.married}`}</p>
        <p>{datas.gender&&`Gender : ${datas.gender}`}</p>
        <h2>{datas.roomNum&&"Address Details"}</h2>
        <p>{datas.roomNum&&`Room Number : ${datas.roomNum}`}</p>
        <p>{datas.streetName&&`Street Name : ${datas.streetName}`}</p>
        <p>{datas.city&&`City : ${datas.city}`}</p>
        <p>{datas.state!=='NONE'&&`State : ${datas.state}`}</p>
        <p>{datas.pincode&&`Pincode : ${datas.pincode}`}</p>
        <h2>{datas.accountName&&"Payment Details"}</h2>
        <p>{datas.accountName&&`Account Holder Name : ${datas.accountName}`}</p>
        <p>{datas.accountNum&&`Account Number : ${datas.accountNum}`}</p>
        <p>{datas.amount&&`Amount : Rs. ${datas.amount}`}</p>
        <p>{datas.bankName&&`Bank Name : ${datas.bankName}`}</p>
        <p>{datas.ifsc&&`IFSC Code : ${datas.ifsc}`}</p>
        <p>{datas.cardNum&&`Card Number : ${datas.cardNum}`}</p>
        <p>{datas.cvv&&`CVV Number : ${datas.cvv}`}</p>
        <p>{datas.otp&&`OTP Number : ${datas.otp}`}</p>
    </div>
    return(
        <div className={classes.view}>
            <div className={classes.datas}>
                 <h3>Your Filled Data are Here</h3>
                    {Datas}
            </div>
            <form>
                <h2>Please provide your valuable Feedback</h2>
                <textarea name="feedback" value={data.feedback} onChange={change} required></textarea>
                <button onClick={click}>Submit Your Form</button>
            </form>
        </div>
    )
}
export default ViewDetails;