import { Link } from "react-router-dom";


export function ShopHome(){
    return(
        <div className="container-fluid">
            <h3>Shop Home</h3>
            <Link to="/products">Go to products</Link>
        </div>
    )
}