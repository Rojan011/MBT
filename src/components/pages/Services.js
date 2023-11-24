import React from 'react';
import { useState } from 'react';
import '../../App.css';
import axios from 'axios';

export default function Services(){
    const[image,setImage]=useState('');
    function handleImage(e){
        //
            setImage(e.target.files[0]);
    }

    async function handleApi(){
        const formData=  new FormData();
        formData.append('profile',image);
        try{
            const res = await axios.post('http://localhost:4000/upload',formData)
            if (res.status === 200) alert("successful")
        }
        catch{
            alert("not successful")
        }

    }
    return(
    <div>
        <h1 className='services'>Upload Your Image Here!</h1>
        <input type='file' name='file' onChange={handleImage}/>
        <button onClick={handleApi}>Submit</button>
    </div>
    )
};