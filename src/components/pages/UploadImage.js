import React from "react";
import { useState } from "react";
import "../../App.css";
import axios from "axios";
import "./UploadImage.css";

// export default function Services() {
//   const [image, setImage] = useState("");
//   function handleImage(e) {
//     setImage(e.target.files[0]);
//   }

//   function handleApi() {
//     const formData = new FormData();
//     formData.append("image", image);
//     axios.post("url", formData).then((res) => {
//       console.log(res);
//     });
//   }
//   return (
//     <div className="services">
//       <div>
//         <h6 >Upload Your Image Here!!!</h6>
//       </div>
//       <div>
//         <input type="file" name="file"  accept="image/*" onChange={handleImage} />
//         <button onClick={handleApi}>Submit</button>
//       </div>
//     </div>
//   );
// }

export default function UploadImage() {
  const [image, setImage] = useState(null);
  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  function handleUpload() {
    if (!image) {
      setMsg("No Image Selected");
      return;
    }
    const fd = new FormData();
    fd.append("profile", image);

    setMsg("Uploading...");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });
    axios
      .post("http://127.0.0.1:4000/upload", fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: progressEvent.progress * 100 };
          });
        },

        headers: {
          "Custom-Header": "value",
        },
      })
      .then((res) => {
        setMsg("Upload Successful");
        console.log(res.data);
      })
      .catch((err) => {
        setMsg("Upload Failed");
        console.error(err);
      });
  }

  return (
    <div className="uploadimage">
      <div className="upload-container">
        <div>
          <h6>Upload Your Image Here!</h6>
        </div>
        <div>
          <input type="file" accept="image/*" onChange={handleImage} />
          <button className="upload-button" onClick={handleUpload}>Upload</button>
        </div>
        {progress.started && (
          <progress max="100" value={progress.pc}></progress>
        )}
        {msg && <span>{msg}</span>}
      </div>
    </div>
  );
}
