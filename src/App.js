import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import Footer from "./components/Footer";
import SignUp from "./components/pages/SignUp";
import Blog from "./components/pages/Blog";

//this is the function
function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/services" exact element={<Services/>} />
          <Route path="/products" exact element={<Products/>} />
          <Route path="/sign-up" exact element={<SignUp/>} />
          <Route path="/blog" exact element={<Blog/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
