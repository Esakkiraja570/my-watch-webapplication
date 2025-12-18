import React, { useState } from "react";
import "./Login.css";

const FormValidation = () => {
  const [name, setName] = useState("");  
  const [email, setEmail] = useState(""); 
  const [password,setpassword]=useState("")
  const [comform,setcomform]=useState("")
  const [error, setError] = useState({}); 

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {}; 

    if (!name.trim()) {
      newError.name = "Please Input a Username";
    }
    const newemail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!newemail.test(email)) {
      newError.email ="Please Enter a Valid Email";
    }
    const strongpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!password){
      newError.password="Enter a Password"
    }else if(!strongpassword.test(password)){
      newError.password="Create a Strong Password"
    }
    if(!comform){
       newError.comform="Enter Confirm Password"
    }else if(comform !==password){
      newError.comform="Passwords do not match"
    }
    setError(newError); 
    if (Object.keys(newError).length === 0) {
      alert("Form Successfully Submitted!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h4>Rochette</h4>
        <h5>Login <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
          <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
        </svg></h5>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Change username?</p>
          {error.name && <p className="error">{error.name}</p>}
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Forgot email?</p>
          {error.email && <p className="error">{error.email}</p>}
        </div>

        <div className="input-group">
          <input 
            type="password"
            placeholder="Enter a Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p>Forget password?</p>
          {error.password && <p className="error">{error.password}</p>}
        </div>

        <div className="input-group">
          <input 
            type="password"
            placeholder="Confirm password"
            value={comform}
            onChange={(e) => setcomform(e.target.value)}
          />
          {error.comform && <p className="error">{error.comform}</p>}
        </div>

        <button type="submit" className="btn">Sign in</button>
      </form>
    </div>
  );
};

export default FormValidation;
