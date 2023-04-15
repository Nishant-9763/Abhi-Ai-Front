
import React ,{useState}from "react";
import "./Login.css"
import axios from "axios";
import {useNavigate} from"react-router-dom"
import {successToast,errorToast} from '../alert'

const Login = () =>{


    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    

    const login = function (event) {
        event.preventDefault();
        axios.post('http://localhost:8080/loginUser', {
           email,password
        })
            .then((res) => {
                successToast('Your Acount Login Succesfully')
                
                const token = res.data.data.token;
            //    console.log(res.data.data.token)
                 localStorage.setItem('newKey',token)


                 navigate(`/create`)
            }).catch((err) => {
                errorToast(err.response.data.message + "" + " Error")//err.response.status
            })
    }


    return(
        <div className="login">
           
            <h1>Login</h1>
            <input type='email' placeholder="Email id" onChange={((e) => setEmail(e.target.value))} />
            <input type='password' placeholder="Password" onChange={((e) => setPassword(e.target.value))} />
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")}>Register</div>

        </div>
    )
}

export default Login


















































// import React, { useState } from 'react'
// import{useNavigate} from 'react-router-dom'

// const Login = () => {
//     const navigate = useNavigate()

//     const [email,setEmail] = useState("")
//     const [password,setPassword] =useState("")
//     const [emailErr, setEmailErr] = useState(false)
//     const [passwordErr, setPasswordErr] = useState(false)


//     function submitHandle(e){
//         e.preventDefault()
//     }
//     function emailHandler(e){
//         let item = e.target.value
//         if(item.length<3 || item.length>10){
//             setEmailErr(true)
//         }else{
//             setEmailErr(false)
//         }
//     }
//     function passwordHandler(e){
//         let item = e.target.value
//         if(item.length<8 || item.length>15){
//             setPasswordErr(true)
//         }else{
//             setPasswordErr(false)
//         }
//     }
    
//   return (
//     <div>
//         <h1> Login</h1>
//         <form onSubmit={submitHandle}>
//         <input type='text' placeholder='Enter email Id' onChange={emailHandler}/> <br/>
//         {emailErr ?<span>User not valid</span>:''}<br/><br/>
//         <input type='text' placeholder='Enter Password' onChange={passwordHandler}/><br/>
//         {passwordErr ?<span>Password must be between 8  to 15 char.</span>:''}<br/><br/>
//         <button type='submit'> Login</button><br/><br/>
//         </form>
//         OR <br/><br/>
//         <button onClick={()=>navigate("/register")}>Register</button>
//     </div>
//   )
// }

// export default Login