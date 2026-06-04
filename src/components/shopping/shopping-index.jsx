import { ShoppingDashboard } from "./shopping-dashboard";
import { ShoppingProducts } from "./shopping-products";

export function ShoppingIndex(){
    return(
        <div className="container-fluid row">
          <div className="col-2">
            <div className="bi bi-bag mt-4 fw-bold fs-4"> Shopping </div>
            <div className="bi bi-columns-gap my-3"> All Products </div>
          </div>
          <div className="col-10">
            <div className="d-flex bg-light p-3 mt-4 justify-content-between">
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="search brands, products" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <div>
                    <button className="btn btn-warning bi bi-cart4"></button>
                </div>
            </div>
            <div className="mt-3 overflow-auto" style={{height:'400px'}}>
                <ShoppingDashboard/>
            </div>
          </div>
        </div>
    )
}