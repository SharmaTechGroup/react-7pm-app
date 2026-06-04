import axios from "axios";
import { useEffect, useState } from "react"


export function ShoppingProducts(){

    const [data, setData] = useState({products:[]});

    function LoadProducts(){
        axios.get(`https://dummyjson.com/products`)
        .then(response=>{
            setData(response.data);
        })
    }

    useEffect(()=>{
        LoadProducts();
    })

    return(
        <div className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
            {
                data.products.map(product=>
                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                        <img src={product.thumbnail} className="card-img-top" height="120"/>
                        <div className="card-header" style={{height:'100px'}}>
                            {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>
                                    {product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}
                                </dd>
                                <dt>Rating</dt>
                                <dd>
                                   {product.rating}  <span className="bi bi-star-fill text-success"></span>
                                </dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning bi bi-cart3 w-100"> Add to Cart </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}