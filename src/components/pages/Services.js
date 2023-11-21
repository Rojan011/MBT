import React from "react";
import { useState } from "react";
import "../../App.css";
import axios from "axios";

export default function Services() {
  const [image, setImage] = useState("");
  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  function handleApi() {
    const formData = new FormData();
    formData.append("image", image);
    axios.post("url", formData).then((res) => {
      console.log(res);
    });
  }
  return (
    <div className="services">
      <div>
        <h6>Upload Your Image Here!!!</h6>
      </div>
      <div>
        <input type="file" name="file"  accept="image/*" onChange={handleImage} />
        <button onClick={handleApi}>Submit</button>
      </div>
    </div>
  );
}
