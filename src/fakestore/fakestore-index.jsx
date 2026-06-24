import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
             <BrowserRouter>
                <header className="bg-light p-2 d-flex align-items-center justify-content-between">
                    <span className="bi bi-cart4 fs-2 fw-bold"> Fakestore</span>
                    <div>
                        <span className="mx-2">Home</span>
                        <span className="mx-2">Electronics</span>
                        <span className="mx-2">Men Fashion</span>
                        <span className="mx-2">Women Fashion</span>
                    </div>
                    <button className="btn btn-warning bi bi-person"> Signin</button>
                </header>
                <section className="mt-4 p-4">
                    <Routes>
                        <Route path="/" element={<FakestoreHome />} />
                        <Route path="/products/:category" element={<FakestoreProducts/>}>
                            <Route path="details/:id" element={<FakestoreDetails />} />
                        </Route>
                        
                    </Routes>
                </section>
             </BrowserRouter>
        </div>
    )
}