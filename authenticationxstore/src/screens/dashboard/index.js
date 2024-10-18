import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetProduct } from "../../config/firebase";


export default function Dashboard() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await GetProduct();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    console.log('products ---->', products);

    const gotoDetail = (product) => {
        navigate('/detail/' + product.id);
    };

return <>

<main className="main-container">
<div className= "featured-product">
<section className="">
<div className= "main-container ">

<div>
{products.map((item) => (
<div key={item.id} onClick={() => gotoDetail(item)}  className="product ">
    <img className="product-img " src={item.image} alt={item.title} width='40%'/>
    <br/>    <br/>
    <h5 className="h5">title:{item.title}</h5>
    <br/>
    <h5>Price:{'$' + item.price}</h5>
    <br/>
    <button>Add to cart</button>
</div>
))}
</div>

</div>
</section>
</div>
</main>
</>
}