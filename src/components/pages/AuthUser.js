import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthUser() {
  const navigate = useNavigate();
 

  //to send token to frontend
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    if(tokenString== null){
      console.log("empty");
    }
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const saveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
    console.log(token);
    console.log(user);
    setToken(token);
    setUser(user);

    navigate("/");
  };

  const [token, setToken] = useState(getToken());
  //for use Detail
  const [user, setUser] = useState(getUser());

  const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  return { http, setToken: saveToken, token, user,getToken};
}

export default AuthUser;
