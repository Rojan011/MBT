import React from "react";
import { useState } from "react";
import "../../App.css";
import axios from "axios";
import "./UploadImage.css";

// export default function UploadImage() {
//   const handleFormSubmit = (event, url, userName) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     axios
//       .post(url, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         onUploadProgress: (progressEvent) => {
//           console.log(
//             `Upload Progress: ${Math.round(
//               (progressEvent.loaded / progressEvent.total) * 100
//             )}%`
//           );
//         },
//       })
//       .then((response) => {
//         console.log(response.data);
//         // Make the second request
//         return axios.get(
//           `https://eagerly-nearby-jaguar.ngrok-free.app/predict/${userName}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               "Access-Control-Allow-Origin": "*",
//               "ngrok-skip-browser-warning": "1231",
//             },
//           }
//         );
//       })
//       .then((response) => {
//         const downloadUrl = response.data.download_url;
//         console.log(downloadUrl);

//         // Make the third request to the download URL
//         return axios.get(downloadUrl, {
//           responseType: "blob", // Important for receiving binary data
//           headers: {
//             "Content-Type": "application/octet-stream",
//             "Access-Control-Allow-Origin": "*",
//             "ngrok-skip-browser-warning": "1231",
//           },
//         });
//       })
//       .then((response) => {
//         // Extract the filename from the Content-Disposition header
//         const contentDisposition = response.headers["content-disposition"];
//         let filename = `${userName}_predictions`; // Default filename
//         if (contentDisposition) {
//           const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
//           const matches = filenameRegex.exec(contentDisposition);
//           if (matches != null && matches[1])
//             filename = matches[1].replace(/['"]/g, "");
//         }

//         // Create a download link and click it to start the download
//         const blob = new Blob([response.data], {
//           type: "application/octet-stream",
//         });
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", filename);
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const getUser = () => {
//     const userString = sessionStorage.getItem("user");
//     const user_detail = JSON.parse(userString);
//     return user_detail;
//   };
//   const user = getUser();
//   return (
//     <div className="uploadimage">
//       <div className="upload-container">
//         <div>Upload Your NIfTI Files !</div>
//         <form
//           onSubmit={(event) =>
//             handleFormSubmit(
//               event,
//               `https://eagerly-nearby-jaguar.ngrok-free.app/uploadfiles/${user}`,
//               user
//             )
//           }
//         >
//           <input name="files" type="file" multiple />
//           <input type="submit" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default function UploadImage() {
//   const [image, setImage] = useState(null);
//   function handleImage(e) {
//     setImage(e.target.files[0]);
//   }

//   const [progress, setProgress] = useState({ started: false, pc: 0 });
//   const [msg, setMsg] = useState(null);

//   function handleUpload() {
//     if (!image) {
//       setMsg("No Image Selected");
//       return;
//     }
//     const fd = new FormData();
//     fd.append("profile", image);

//     setMsg("Uploading...");
//     setProgress((prevState) => {
//       return { ...prevState, started: true };
//     });
//     axios
//       .post("http://127.0.0.1:8080/upload", fd, {
//         onUploadProgress: (progressEvent) => {
//           setProgress((prevState) => {
//             return { ...prevState, pc: progressEvent.progress * 100 };
//           });
//         },

//         headers: {
//           "Custom-Header": "value",
//         },
//       })
//       .then((res) => {
//         setMsg("Upload Successful");
//         console.log(res.data);
//       })
//       .catch((err) => {
//         setMsg("Upload Failed");
//         console.error(err);
//       });
//   }
//   return (
//     <div className="uploadimage">
//       <div className="upload-container">
//         <div>
//           <h6>Upload Your Image Here!</h6>
//         </div>
//         <div>
//           <input type="file" accept="image/*" onChange={handleImage} />
//           <button className="upload-button" onClick={handleUpload}>
//             Upload
//           </button>
//         </div>
//         {progress.started && (
//           <progress max="100" value={progress.pc}></progress>
//         )}
//         {msg && <span>{msg}</span>}
//       </div>
//     </div>
//   );
// }

// export default function UploadImage() {
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [statusText, setStatusText] = useState('');

//   const handleFormSubmit = async (event, url, userName) => {
//     event.preventDefault();
//     setStatusText('Uploading...');
//     const formData = new FormData(event.target);

//     try {
//       await axios.post(url, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         onUploadProgress: (progressEvent) => {
//           const percentCompleted = Math.round((progressEvent.loaded *  100) / progressEvent.total);
//           setUploadProgress(percentCompleted);
//         },
//       });
//       setStatusText("Processing");

//       const response = await axios.get(`https://eagerly-nearby-jaguar.ngrok-free.app/predict/${userName}`, {
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//           "ngrok-skip-browser-warning": "1231",
//         },
//       });

//       const downloadUrl = response.data.download_url;
//       const responseBlob = await axios.get(downloadUrl, {
//         responseType: "blob",
//         headers: {
//           "Content-Type": "application/octet-stream",
//           "Access-Control-Allow-Origin": "*",
//           "ngrok-skip-browser-warning": "1231",
//         },
//       });

//       // Process the downloaded file here if needed

//       setStatusText('Completed');
//     } catch (error) {
//       console.error("Error:", error);
//       setStatusText('Error occurred');
//     }
//   };

//   const getUser = () => {
//     const userString = sessionStorage.getItem("user");
//     const user_detail = JSON.parse(userString);
//     return user_detail;
//   };
//   const user = getUser();

//   return (
//     <div className="uploadimage">
//       <div className="upload-container">
//         <div>Upload Your NIfTI Files !</div>
//         <form
//           onSubmit={(event) =>
//             handleFormSubmit(
//               event,
//               `https://eagerly-nearby-jaguar.ngrok-free.app/uploadfiles/${user}`,
//               user
//             )
//           }
//         >
//           <input name="files" type="file" multiple />
//           <input type="submit" />
//         </form>
//         <div className="progress-bar-container">
//           <progress value={uploadProgress} max="100"></progress>
//           <p>{statusText}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
//-->Complete Working code

export default function UploadImage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [statusText, setStatusText] = useState("Upload");
  const [disabled,setIsDisabled]=useState(false);

  const handleFormSubmit = (event, url, userName) => {
    
    event.preventDefault();
    const formData = new FormData(event.target);

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
          if (percentCompleted < 100) {
            setIsDisabled(true);
            setStatusText("Uploading...");
          }

          if (percentCompleted === 100) {
            setStatusText("Processing...");
          }
        },
      })
      .then((response) => {
        console.log(response.data);
        // Make the second request
        return axios.get(
          `https://eagerly-nearby-jaguar.ngrok-free.app/predict/${userName}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "ngrok-skip-browser-warning": "1231",
            },
          }
        );
      })
      .then((response) => {
        const downloadUrl = response.data.download_url;
        console.log(downloadUrl);

        // Make the third request to the download URL
        return axios.get(downloadUrl, {
          responseType: "blob", // Important for receiving binary data
          headers: {
            "Content-Type": "application/octet-stream",
            "Access-Control-Allow-Origin": "*",
            "ngrok-skip-browser-warning": "1231",
          },
        });
      })
      .then((response) => {
        // Extract the filename from the Content-Disposition header
        const contentDisposition = response.headers["content-disposition"];
        let filename = `${userName}_predictions`; // Default filename
        if (contentDisposition) {
          const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = filenameRegex.exec(contentDisposition);
          if (matches != null && matches[1])
            filename = matches[1].replace(/['"]/g, "");
        }

        // Create a download link and click it to start the download
        const blob = new Blob([response.data], {
          type: "application/octet-stream",
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
        setStatusText("Completed...");
        setIsDisabled(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };
  const user = getUser();

  return (
    <div className="uploadimage">
      <div className="upload-container">
        <div>Upload Your NIfTI Files !</div>
        <form
          onSubmit={(event) =>
            handleFormSubmit(
              event,
              `https://eagerly-nearby-jaguar.ngrok-free.app/uploadfiles/${user}`,
              user
            )
          }
        >
          <input name="files" type="file" multiple />
          {/* <input type="submit" /> */}
          <button className="upload-button" type="submit"  disabled={disabled}>
            Upload
          </button>
        </form>
        <div className="progress-bar-container">
          <progress value={uploadProgress} max="100"></progress>
          <p>{statusText}</p>
        </div>
      </div>
    </div>
  );
}
//------>



