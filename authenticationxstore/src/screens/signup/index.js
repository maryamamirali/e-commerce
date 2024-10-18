import { useState } from "react"
import { Register } from "../../config/firebase"
import { useNavigate } from "react-router-dom"

export default function SignUp () {

const [email , setEmail] = useState()
const [password , setPassword] = useState()
const navigate = useNavigate()

const signup = async() => {
try{
    await Register(email , password)
    alert('successfully signed up')
    navigate('/product')
} catch(e) {
    alert(e.message)
}
}

return <>
<div className="signup-body">
<div className="signup-container">
    <h2 className="signup-h2">signup</h2>
<label className="signup-label" for="email">Email:</label>
<input className="signup-input" onChange={(e) => setEmail(e.target.value)} placeholder="email"/>

<label className="signup-label" for="password">Password:</label>
<input className="signup-input" onChange={(e) => setPassword(e.target.value)} placeholder="password"/>


<button className="signup-butn" onClick={() => signup()}>register</button>
</div>
</div>
</>
}