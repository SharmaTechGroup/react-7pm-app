import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";
import { FakestoreResults } from "./fakestore-results";
import { lazy, Suspense } from "react";
import { FakestoreLogin } from "./fakestore-login";

const FakestoreSearch = lazy(()=> import('./fakestore-search'));

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
             <BrowserRouter>
                <header className="bg-light p-2 d-flex align-items-center justify-content-between">
                    <span className="bi bi-cart4 fs-2 fw-bold"> Fakestore</span>
                    <div>
                        <span className="mx-2"> <Link to="/">Home</Link> </span>
                        <span className="mx-2">Electronics</span>
                        <span className="mx-2">Men Fashion</span>
                        <span className="mx-2">Women Fashion</span>
                        <span className="mx-3">
                            <Link to="/search">Search</Link>
                        </span>
                    </div>
                    <Link to="/login" className="btn btn-warning bi bi-person"> Signin</Link>
                </header>
                <section className="mt-4 p-4">
                    <Suspense fallback={<div> <span className="spinner-border spinner-border-sm text-danger"></span> Loading please wait..</div>}>
                        <Routes>
                        <Route path="/" element={<FakestoreHome />} />
                        <Route path="/products/:category" element={<FakestoreProducts/>}>
                            <Route path="details/:id" element={<FakestoreDetails />} />
                        </Route>
                        <Route path="/search" element={<FakestoreSearch />} />
                        <Route path="/results" element={<FakestoreResults />} />
                        <Route path="/login" element={<FakestoreLogin />} />
                       </Routes>
                    </Suspense>
                </section>
             </BrowserRouter>
        </div>
    )
}