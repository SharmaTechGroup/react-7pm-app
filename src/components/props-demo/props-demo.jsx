import { useState } from "react";
import { Navbar } from "../../controlled-components/navbar";
import { DataGrid } from "../../controlled-components/data-grid";

export function PropsDemo(){


    const [products] = useState([{Name:'TV', Price:34000, Rating:4.2}, {Name:'Mobile', Price:56000, Rating:3.5}]);
    const [employees] = useState([{FirstName:'Raj', LastName:'Kiran', Designation:'Developer', Salary:50000}])

    return(
        <div className="container-fluid">
           <DataGrid caption="Product Details" width="w-50" data={products} />
           <DataGrid caption="Employees" data={employees} width='w-100' />
        </div>
    )
}