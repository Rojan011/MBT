import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import UploadImage from "./components/pages/UploadImage";
import ModelInformation from "./components/pages/ModelInformation";
import HealthAdvices from "./components/pages/HealthAdvices/HealthAdvices";

import Blog from "./components/pages/HealthAdvices/Blog";
import { createContext } from "react";
import { useState,useContext } from "react";
// import AuthProvider from "./components/pages/AuthProvider";

//this is the function

export const LoginContext=createContext({});

function App() {
  const [login, setLogin] = useState(false);
  console.log(login)
  
  return (
    <>
      <LoginContext.Provider value={{login,setLogin}} >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/uploadfiles" exact element={login?<UploadImage />:<SignUp/>} />
            <Route path="/modelinformation" exact element={<ModelInformation />} />
            <Route path="/sign-up" exact element={<SignUp />} />
            <Route path="/healthadvices" exact element={<HealthAdvices />} />
            <Route path="blog/:id" exact element={<Blog />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App;
