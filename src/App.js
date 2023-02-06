import React, { useState } from "react";
//import logo from './logo.svg';
import "./styles/RegisterLogin.css";
// import './styles/HomePage.css'
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import HomePage from "./components/Homepage";
import LandingPage from "./components/LandingPage";
import HomeNav from "./components/Navbar-footer/HomeNav";

import Navbar from "./components/Navbar-footer/Navbar";
import Form from "./components/form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const[transferredArray, setTransferredArray] = useState([])
  const [newId, setNewId] = useState([])

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

function transferData(name, email, password) {
  setName(name)
  setPass(password)
  setEmail(email)
}

function setId(value){
  setNewId(value)
  console.log(value);
}

function transferArray(value){
  // console.log(value)
setTransferredArray(value)
}

// console.log(name, email, pass)

  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Navbar />
          <LandingPage />
        </Route>

        <Route exact path="/signup">
         <Register transferData={transferData}/>
        </Route>

        <Route exact path="/loginform">
         <Login email={email} pass ={pass}/>
        </Route>

        <Route exact path="/homepage">
         <HomeNav/>
         <HomePage email= {email} name={name} transferredArray = {transferredArray}/>
        </Route>

        <Route path="/form">
         <Form transferArray={transferArray}/>
        </Route>
        
      </Switch>

      {/* <Profile/>
      <HomePage/>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <Switch>

        <Route path= '/homepage'>
          <Homepage/>
        </Route>
        <Route path= '/form'>
          <Form/>
        </Route>        
      <Footer/>
      </Switch> */}
    </div>
  );
}

export default App;
