import React, { useState } from "react";
import "../../App.css";
import user_icon from "../pages/signup/person.png";
import email_icon from "../pages/signup/email.png";
import password_icon from "../pages/signup/password.png";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const headers = {
 // 'Authorization': `Bearer ${token}`,
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
}
export default function SignUp() {
  const [action, setAction] = useState("Log In");
  const [username, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const submitHandler = async () => {
    try {
      if (action === "Log In") {
        // const response = await axios.post("http://localhost:4000/api/auth/login", {
        //   username: username,
        //   password: pwd,
        // });

        // console.log("Logged in:", response?.data);

        axios.post("http://localhost:4000/api/auth/login", {
            email: email,
            password: pwd,
          }, 
          {headers:headers})
          .then(res=>console.log(res))
          .catch(err=>console.log(err));

        // Redirect or perform other actions based on the response
        navigate("/");
      } else {
        const response = await axios.post("http://localhost:4000/api/auth/register", {
          username,
          email,
          password: pwd,
        });

        console.log("Signed up:", response?.data);

        // Redirect or perform other actions based on the response
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      // Handle error, display error messages, etc.
    }
  };

  //const submitHandler=()=>{           //eta halne
  //   if(action ==="Log In"){
  //     console.log("logged in")
  //   //changes
  //     localStorage.setItem('isLoggedIn', true);
  //     navigate('/')
     
  // }
  // else{
  //   console.log("signed in")
  // }


  return (
    <div className="sign-up">
      <div className="container">
        <div className="header">
          {/* <div className="text">{action}</div> */}
          <div className="submit-container">
            <div
              className={action === "Log In" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Log In");
              }}
            >
              Log In
            </div>
          </div>

        </div>
        
        <div className="inputs">
           { action === "Log In" ? ( 
            <div></div>
          ) : (
            <div className="input" style={{marginTop:20}}>
              <img src={user_icon} alt="" />
              <input
                type="text"
                onChange={(e) => {
                  console.log(e)
                  setUserName(e.target.value);
                }}
                placeholder="Your Name"
              />
            </div>
          )} 

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              onChange={(e) => {
                // console.log(e)
                setEmail(e.target.value);
              }}
              placeholder="Your Email"
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              placeholder="Your Password"
            />
          </div>
        </div>
        {action === "Sign Up" ? (  
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot Password?<span>Click Here</span>
          </div>
        )}
        <div
          className="submit-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <div className="submit" onClick={submitHandler}>Submit</div>
        </div>
      </div>
    </div>
  );
}
