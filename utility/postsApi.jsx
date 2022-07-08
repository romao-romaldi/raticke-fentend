import axios from 'axios';
import React from 'react';

export const CreateUserPost = async(data) => { 
    const res = await axios.post("http://127.0.0.1:8000/create-users", data);
    return res  
}

export const LoginUser = async(data) => {
    const formData = new FormData();
       
    for ( const [ key, values] of Object.entries(data)){
        formData.append(key, values)
    }

    const url = "http://127.0.0.1:8000/login"
    const res = await axios.post(url, formData, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })

    console.log(res.data)
    return res
}