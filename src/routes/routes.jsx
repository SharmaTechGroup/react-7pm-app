import { ShopHome } from "../shop/shop-home";

import { createBrowserRouter } from "react-router-dom";
import { ShopProducts } from "../shop/shop-products";
import { ShopDetails } from "../shop/shop-details";


const router = createBrowserRouter([
    {
        path: '/',
        element: <ShopHome />
    },
    {
        path: '/products',
        element: <ShopProducts />,
        children: [
            {
                path:'details',
                element: <ShopDetails />
            }
        ]
    }
])

export default router;