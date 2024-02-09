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
      .post("http://127.0.0.1:8080/upload", fd, {
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

  //Nifty file halne logic-->
  
  const handleFormSubmit = (event, url, userName) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response;
      })
      .then((data) => {
        console.log(data);
        // Make the second request
        return fetch(`https://eagerly-nearby-jaguar.ngrok-free.app/predict/${userName}`
          ,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "ngrok-skip-browser-warning": '1231'
            }
          }
        );
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // Extract the download URL from the response
        console.log(data);
        const downloadUrl = data.download_url;
        console.log(downloadUrl);

        // Make the third request to the download URL
        return fetch(downloadUrl,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "ngrok-skip-browser-warning": '1231'
          }
        });
      })
      .then((response) => {
        // Extract the filename from the Content-Disposition header
        console.log(response);

        let filename = `${userName}_predicitons.npy`; // Default filename
        // Read the response data as a Blob
        return response.blob().then((blob) => {
          return {blob, filename};
        });
      })
      .then(({blob, filename}) => {
        // Create a download link and click it to start the download
        console.log(blob);
        console.log(filename);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => console.error("Error:", error));
  };
//logic end -->

  // return (
  //   <div className="uploadimage">
  //     <div className="upload-container">
  //       <div>
  //         <h6>Upload Your Image Here!</h6>
  //       </div>
  //       <div>
  //         <input type="file" accept="image/*" onChange={handleImage} />
  //         <button className="upload-button" onClick={handleUpload}>Upload</button>
  //       </div>
  //       {progress.started && (
  //         <progress max="100" value={progress.pc}></progress>
  //       )}
  //       {msg && <span>{msg}</span>}
  //     </div>
  //   </div>
  // );
  // return (
  // <div className="uploadimage">
  //   <div className="upload-container">
  //     <form
  //       action="/posts/files/"
  //       encType="multipart/form-data"
  //       method="post"
  //     >
  //       <input name="files" type="file" multiple />
  //       <input type="submit" />
  //     </form>
  //     <form
  //       action="/posts/uploadfiles/"
  //       encType="multipart/form-data"
  //       method="post"
  //     >
  //       <input name="files" type="file" multiple />
  //       <input type="submit" />
  //     </form>
  //   </div>
  // </div>
  // );

  //Nifty files logic-->
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };
  const user=getUser();
  return (
    <div className="uploadimage">
      <div className="upload-container">
        <div>Upload Your NIfTI Files !</div>
        <form onSubmit={(event) => handleFormSubmit(event, `https://eagerly-nearby-jaguar.ngrok-free.app/uploadfiles/${user}`, user)}>
          <input name="files" type="file" multiple />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
