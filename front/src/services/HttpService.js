import axios from "axios";

export default axios.create({
    baseURL: "https://colitasfelices.herokuapp.com/",
    headers:{
        "Content-type":"application/json"
    }
});
