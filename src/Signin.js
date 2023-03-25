import './Signin.css';
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from "axios"

export default function Signin(){
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");
    const nav = useNavigate()
    const url = "https://notes-taker-backend-nikhilsing-rajput.onrender.com/signin" ;

    const auth = async(e)=>{
        e.preventDefault()
        if(email == "" || password == ""){
            alert ("Email or Password should not be empty")
        }
       else{
        try {
            const res = await axios.post(url ,{
                "email" : email,
                "password" : password
            })
            console.log(res.data)
            nav("/Home")
        } catch (error) {
            console.log("error in signin")
            alert("Please Register Yourself if not Register")
        }
       
       }
        
    }

    return <div className="Front-container">
        <form action="#" method="Post" >
            <h2>Sign In</h2>
            <div>
                <label htmlFor="email" className="text">Email address</label> 
            </div>
            <div>
                 <input  onChange={(e)=>
                    setemail(e.target.value)
                } id="email" type={"email"} placeholder="Enter Email" required/>
            </div>
            <div>
            <label htmlFor="pass" className="text">Password</label> 
            </div>
            <div>
                <input 
                onChange={(e)=>
                    setpassword(e.target.value)
                }
                id="pass" type={"password"} placeholder="Enter password" required />
            </div>
            <div>
                <input id="checkbox" type={"checkbox"} />
                <label htmlFor="checkbox" required >Remember me</label>
            </div>
            <button onClick={(e)=>
                auth(e)
            } className="subbmit">
                Submit
            </button>
            <div>
                <span>Dont have an account</span>
                <Link to={"/Signup"}  className="register"> Register </Link>
            </div>
        </form>
    </div>
}