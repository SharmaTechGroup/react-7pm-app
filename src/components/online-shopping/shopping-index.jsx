import { createContext, useState } from "react";
import { ShoppingProducts } from "./shopping-products";

export let SearchContext = createContext(null);

export function ShoppingIndex(){

    const [searchstring, setSearchString] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(cartItems.length);

    function handleSearchChange(e){
        setSearchString(e.target.value);
    }
    function handleCategoryChange(e){
        setSearchString(e.target.value);
    }

    function handleAddClick(product){
        alert(`${product.title}\nAdded to Cart`);
        cartItems.push(product);
        setCartItemsCount(cartItems.length);
    }   

    return(
        <div className="container-fluid">
            <header className="d-flex p-3 align-items-center justify-content-between bg-light">
                <span className="bi bi-bag text-primary fs-3"> Shopping </span>
                <div>
                    <div className="input-group">
                        <input type="text" onChange={handleSearchChange} placeholder="eg: products, brands" className="form-control"/>
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <div>
                   <div className="input-group">
                     <input type="text" className="form-control" placeholder="username" />
                    <button className="btn btn-warning bi bi-person-fill"></button>
                   </div>
                </div>
                <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="btn btn-warning bi bi-cart4 position-relative"> <span className="badge bg-danger rounded rounded-circle position-absolute">{cartItemsCount}</span> </button>
                <div className="offcanvas offcanvas-end" id="cart">
                    <div className="offcanvas-header">
                        <h3>Your Cart Items</h3>
                        <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Preview</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item=>
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <img width="50" height="50" src={item.thumbnail} />
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </header>
            <section className="row mt-2">
                <div className="col-2 bg-light" style={{height:'500px'}}>
                    <div className="mt-2">
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                <option>Select Category</option>
                                <option value=''>All</option>
                                <option value='beauty'>Beauty</option>
                                <option value='furniture'>Furniture</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <SearchContext value={searchstring}>
                        <ShoppingProducts onAddToCartClick={handleAddClick} />
                    </SearchContext>
                </div>
            </section>
        </div>
    )
}