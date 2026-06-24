import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function FakestoreHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            setCategories(response.data);
        })
    },[])

    return(
        <div>
            <h4>Featured Categories</h4>
            <ol className="list-group w-25">
                {
                    categories.map(category=>
                        <li key={category} className="list-group-item list-group-item-primary my-1"> <Link to={`products/${category}`}>{category.toUpperCase()}</Link> </li>
                    )
                }
            </ol>
        </div>
    )
}