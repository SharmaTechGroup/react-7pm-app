import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"


export function FakestoreResults(){

    let [params] = useSearchParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.get('searchString')}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    return(
        <div>
            <h3>Results</h3>
            <div>
                {
                    products.map(product=>
                        <img className="mx-3" width="50" height="50" src={product.image} />
                    )
                }
            </div>
        </div>
    )
}