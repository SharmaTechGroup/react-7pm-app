import axios from "axios";
import { useEffect, useState } from "react"


export function ShoppingDashboard(){

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
        <div>
            <table className="table table-hover caption-top">
                <caption>Products Dashboard</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Preview</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.products.map(product=>
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <img  src={product.thumbnail} width="50" height="50" />
                                </td>
                                <td>{product.rating} <span className="bi bi-star-fill text-success"></span> </td>
                                <td>
                                    <button className="btn btn-warning bi bi-pen-fill mx-2"></button>
                                    <button className="btn btn-danger bi bi-trash-fill"></button>
                                    <button className="btn btn-primary bi bi-eye-fill mx-2"></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}