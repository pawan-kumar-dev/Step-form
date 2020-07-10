import React,{useState} from 'react';
import './App.css';
import PersonalDetails from './Components/PersonalDetails';
import Address from './Components/Address';
import Payment from './Components/Payment';
import ViewDetails from './Components/ViewDetails';
import classes from './App.module.css';
import Footer from './Components/Footer';
import {BrowserRouter as Router,NavLink,Route, Redirect } from 'react-router-dom';
function App() {
  const [data,setData]=useState({
fname:'',
lname:'',
number:'',
email:'',
singing:false,
dancing:false,
reading:false,
married:'',
gender:'',
roomNum:'',
streetName:'',
city:'',
state:'NONE',
pincode:'',
accountName:'',
accountNum:'',
amount:'',
bankName:'',
ifsc:'',
cardNum:'',
cvv:'',
otp:'',
PersonalDetails:false,
Address:false,
paymentData:false,
viewData:false,
feedback:'',
completed:false
  })
  const change=(event)=>{
    const name=event.target.name
    const value=(event.target.type==="checkbox")?event.target.checked:event.target.value.toUpperCase()
    setData({
      ...data,
      [name]:value
    })
  }
  const clickPersonal=(e)=>{
    e.preventDefault()
    if(data.fname===''||data.lname===''||data.number===''||data.email===''||data.married===''||data.gender===''){
      alert("Fill All the details");
      return}
    else{
     setData({
       ...data,
       PersonalDetails:true
     })
     setTimeout(()=>{
      setData({
        ...data,
        PersonalDetails:false
      })
     },1000)
    }
  }
  const clickAddress=(e)=>{
    e.preventDefault()
    if(data.roomNum===''||data.streetName===''||data.city===''||data.state==='NONE'||data.pincode===''){
      alert("Fill All the details");
      return}
    else{
      setData({
        ...data,
        Address:true,
        PersonalDetails:false
      })
      setTimeout(()=>{
        setData({
          ...data,
          Address:false
        })
       },1000)
    }
  }
  const clickPayment=(e)=>{
    e.preventDefault()
    if(data.accountName===''||data.accountNum===''||data.bankName===''||data.ifsc===''||data.cardNum===''||data.cvv===''||data.otp===''){
      alert("Fill All the details");
      return}
    else{
      setData({
        ...data,
        paymentData:true,
        Address:false,
        PersonalDetails:false
      })
      setTimeout(()=>{
        setData({
          ...data,
          paymentData:false
        })
       },1000)
    }
  }
  const clickFeedback=(e)=>{
    e.preventDefault()
    if(data.fname===''||data.lname===''||data.number===''||data.email===''||data.married===''||data.gender===''||data.roomNum===''||data.streetName===''||data.city===''||data.state==='NONE'||data.pincode===''||data.accountName===''||data.accountNum===''||data.bankName===''||data.ifsc===''||data.cardNum===''||data.cvv===''||data.otp===''||data.feedback===''){
      alert("Fill All the details");
      return}
    else{
      alert("Form Submited")
      setData({
        ...data,
        completed:true
      })
      setTimeout(()=>{
        setData({
          fname:'',
          lname:'',
          number:'',
          email:'',
          singing:false,
          dancing:false,
          reading:false,
          married:'',
          gender:'',
          roomNum:'',
          streetName:'',
          city:'',
          state:'NONE',
          pincode:'',
          accountName:'',
          accountNum:'',
          amount:'',
          bankName:'',
          ifsc:'',
          cardNum:'',
          cvv:'',
          otp:'',
          PersonalDetails:false,
          Address:false,
          paymentData:false,
          viewData:false,
          completed:false
        })
      },1000)
    }
  }
  return (
    <div className="App">
      <Router>
      <nav>
            <NavLink className={classes.link} exact={true} to="/" activeStyle={{color:"orange"}}>Home</NavLink>
            <NavLink className={classes.link} to="/personalDetails" activeStyle={{color:"orange"}}>Personal Details</NavLink>
            <NavLink className={classes.link} to="/address" activeStyle={{color:"orange"}}>Address</NavLink>
            <NavLink className={classes.link} to="payment" activeStyle={{color:"orange"}}>Payment</NavLink>
            <NavLink className={classes.link} to="viewAll" activeStyle={{color:"orange"}}>View Details</NavLink>
      </nav>
        <Route exact path="/">
        <div className={classes.banner}>
        <div className={classes.title}>
        <h2>Welcome To the Homie-Shopify</h2>
        <button className={classes.explore}>Explore More</button>
        </div>
        </div>
        </Route>
        <Route path="/personalDetails">
          <PersonalDetails data={data} change={change} click={clickPersonal}/>
          {data.PersonalDetails&&<Redirect to="/address"/>}
        </Route>
        <Route path="/address">
          <Address data={data} change={change} click={clickAddress}/>
          {data.Address&&<Redirect to="/payment"/>}
        </Route>
        <Route path="/payment">
          <Payment data={data} change={change} click={clickPayment}/>
          {data.paymentData&&<Redirect to="/viewAll"/>}
        </Route>
        <Route path="/viewAll">
          <ViewDetails data={data} change={change} click={clickFeedback}/>
          {data.completed&&<Redirect to="/"/>}
        </Route>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
