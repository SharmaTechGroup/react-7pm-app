import { useState } from "react"
import "./data-binding.css";
import moment from "moment";

export function DataBinding(){

    const [now] = useState(new Date());
   
    return(
        <div className="container-fluid p-3">
            <div className="text-center bg-dark text-white p-2">
                {moment(now).format('dddd, DD MMMM yy')}
            </div>
        </div>
    )
}