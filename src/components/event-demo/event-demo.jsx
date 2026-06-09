import axios from "axios";
import { useEffect, useState } from "react"
import './event-demo.css';

export function EventDemo(){

    const [data, setData] = useState({products:[]});
    const [previewImage, setPreviewImage]= useState();

    function LoadProducts(){
        axios.get(`https://dummyjson.com/products`)
        .then(response=>{
            setData(response.data);
        })
    }

    useEffect(()=>{
        LoadProducts();
    })

    function handleMouseOver(e){
        setPreviewImage(e.target.src);
        console.log(e.target.src);
    }

    return(
        <div className="container-fluid row">
            <nav className="col-1">
                {
                    data.products.map(product=>
                        <img width={50}  onMouseOver={handleMouseOver} height={50} src={product.thumbnail} key={product.id} className="my-1 d-block pic" />
                    )
                }
            </nav>
            <main className="ps-5 col-11">
                <img width={400} src={previewImage} height={400} />
            </main>
        </div>
    )
}