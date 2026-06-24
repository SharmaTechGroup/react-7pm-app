import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";



export function FakestoreProducts(){

    let params = useParams();
    const [products, setProducts] = useState([{id:0, title:'', image:'', category:'', description:'', price:0, rating:{rate:0, count:0}}]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    return(
        <div>
            <h4> {params.category.toUpperCase()} PRODUCTS </h4>
            <div className="row">
               <div className="d-flex flex-column justify-content-between align-items-baseline flex-wrap col-6">
                 {
                products.map(product=>
                    <div className="card m-3" style={{width:'100px'}} key={product.id}>
                        <Link to={`details/${product.id}`}>
                        <img src={product.image} height="50" className="card-img-top" />
                        </Link>
                    </div>
                )
              }
            </div>
            <div className="col-6">
                <Outlet />
            </div>
            </div>
            <Link to="/">Back to Categories</Link>
        </div>
    )
}