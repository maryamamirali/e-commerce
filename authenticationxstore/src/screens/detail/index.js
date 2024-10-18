import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../config/firebase";
import { useDispatch  } from "react-redux";
import { addtocart } from "../../store/cartSlice";

export default function Detail() {
const navigate = useNavigate();
const params = useParams();
console.log(params, "params");
const dispatch = useDispatch()


  const [product, setProduct] = useState(null); // Set initial state to null

useEffect(() => {
    getSingleProductData();
}, []);

const getSingleProductData = async () => {
    const productData = await getSingleProduct(params.id);
    setProduct(productData);
};

const Back = () => {
    navigate(-1);
};

if (!product) {
    // While product data is being fetched, render a loading state
    return <div>Loading...</div>;
}

return (
    <>

<div className="detail-container">
    <div className="product-detail">
        <div className="product-image">
        <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info"> 
        <h2>title:{product.title}</h2>
    <h3 className="price">Price:{"$" + product.price}</h3>
    <h4 className="description">Description:{product.description}</h4>
    <button onClick={() => Back} className="detail-btn">Add to cart</button>
        </div>
    </div>
</div>


    </>
);
}
