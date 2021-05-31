
import { useState, useContext,useEffect } from "react";
import {useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase"

//usehistory allow us to send users to places 

export default function Login(){
const history = useHistory();
const {firebase} = useContext(FirebaseContext);
const [emailAddress,setEmailAddress] = useState("");
const [password, setPassword] = useState("");

const [error, setError] = useState("");
const isInvalud = password === ""|| emailAddress ==="";

const handleLogin = ()=> {};
useEffect(()=>{
document.title = "Login - Insta"
},[]
)
return <div className="h-screen container flex mx-auto max-w-screen-md items-center">I'm the logi</div>

}