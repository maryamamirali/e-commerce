import { useState } from "react";
import { Product } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

const navigate = useNavigate()
const [title , setTitle] = useState('')
const [description , setDescription] = useState('')
const [price , setPrice] = useState('')
const [image , setImage] = useState('')

const onSubmit = async () => {
try{
    await Product({title , description , price , image })
    alert('product added successfully!')
    navigate('/')
}catch (e) {
    alert(e.message)
}
}
return <>

<div className="product-body">

<div className="product-wrapper">
<div className="products-wrapper">
<h1>products</h1>

<input className="product-input" onChange={e => setTitle(e.target.value)} placeholder="title"/>
<br /> <br />
<input className="product-input" onChange={e => setDescription(e.target.value)} placeholder="description"/>
<br /> <br />
<input className="product-input" onChange={e => setPrice(e.target.value)} placeholder="price"/>

<br /> <br />
<input className="product-btn" onChange={e => setImage(e.target.files[0])} type="file"/>

<br /> <br />
<button className="product-btn" onClick={onSubmit}>submit</button>
</div>
</div>
</div>
</>
}