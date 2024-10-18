import { useState } from "react"
import { Login } from "../../config/firebase"
import { useNavigate } from "react-router-dom"

export default function SignIn () {

const [email , setEmail] = useState()
const [password , setPassword] = useState()
const navigate = useNavigate()

const signin = async() =>{
try{
    await Login(email , password)
    alert('succesfuly logged in')
    navigate('/')
}catch(e) {
    alert(e.message)
}

}

return <>
<div className="signin-body">
<div  className="signin-wrapper ">
<div className="signin-form">
    <h1>signin</h1>
<input className="signin-input input-wrapper" onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
<input className="signin-input input-wrapper" onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
<button className="signin-btn" onClick={() => signin()}>login</button>
</div>
</div>
</div>
    </>
}