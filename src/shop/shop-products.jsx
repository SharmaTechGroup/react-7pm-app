import { Link, Outlet } from "react-router-dom";

export function ShopProducts(){
    return(
        <div>
            <h4>Shop Products</h4>
            <Link to="details">Details</Link>
            <hr />
            <Outlet />
        </div>
    )
}