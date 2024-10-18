import { useState } from "react";
import { useDispatch , useSelector } from "react-redux"
import { deltocart } from "../store/cartSlice";



export default function Header () {

const dispatch = useDispatch()

const cart = useSelector(state => state.cart)

console.log(cart , "cart");

const [product, setProduct] = useState(null);
    return <>
    <div>
<nav className="nav">
    <a href="/">home</a>
    <a href="/product">AddProduct</a>
    <a href="/signup">signup</a>
    <a href="/signin">signin</a> 
<button className="singleproduct"><a className="" href="/">back</a></button>


</nav>
</div >
<div className="box red"></div>
<div className="box purple"></div>
<div className="box pink"></div>
<div className="clear-box">
<img className=" " src="https://static.vecteezy.com/system/resources/previews/035/697/424/original/shopping-cart-icon-flat-design-best-icon-free-vector.jpg" width="60%"/>
<p className=" ">{cart.length}</p>

<button className="deletebtn" onClick={() => dispatch(deltocart(product))}>delete</button>

</div>
    </>
}