import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import UploadImage from "./components/pages/UploadImage";
import MriInformation from "./components/pages/MriInformation";
import HealthAdvices from "./components/pages/HealthAdvices/HealthAdvices";
import Main from "./components/pages/HealthAdvices/Main";
import Blog from "./components/pages/HealthAdvices/Blog";

//this is the function
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/uploadimage" exact element={<UploadImage />} />
          <Route path="/mriinformation" exact element={<MriInformation />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/healthadvices" exact element={<HealthAdvices />} />
          <Route path="blog/:id" exact element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
