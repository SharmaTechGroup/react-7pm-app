import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { SearchContext } from "./shopping-index";

export function ShoppingProducts({onAddToCartClick}){

    const [data, setData] = useState({products:[{id:0, title:'', price:0, rating:0, thumbnail:null}]});

    let searchstring = useContext(SearchContext);

    function handleAddClick(product){
        onAddToCartClick(product);
    }

    function LoadProducts(){
        if(searchstring===''){
            axios.get(`https://dummyjson.com/products`)
            .then(response=>{
                setData(response.data);
            })
        } else {
            axios.get(`https://dummyjson.com/products`)
            .then(response=>{
                let filteredData = response.data.products.filter(product => product.category.toLowerCase().includes(searchstring.toLowerCase()));
                setData({products:[...filteredData]});
            })
        }
    }

    useEffect(()=>{
        LoadProducts();
    })

    return(
        <div className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
            {
                data.products.map(product=>
                    <div key={product.id} className="card p-2 m-2" style={{width:'200px'}}>
                        <img src={product.thumbnail} className="card-img-top" height="100" />
                        <div className="card-header">
                            {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd> $ {product.rating}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=>{ handleAddClick(product) }} className="btn btn-warning bi bi-cart4 w-100">Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}