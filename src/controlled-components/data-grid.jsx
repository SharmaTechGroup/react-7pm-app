
export function DataGrid(props){
    return(
        <table className={`table ${props.width} table-hover table-striped caption-top`}>
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map(field=>
                            <th key={field}>
                                
                                <div className="dropdown">
                                    <button data-bs-toggle="dropdown" className="dropdown-toggle btn"> {field} </button>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-funnel"> Filter</span> </span> </li>
                                        <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-up"> Sort Decending</span> </span> </li>
                                        <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-down"> Sort Ascending</span> </span> </li>
                                    </ul>
                                </div>
                            </th>
                        )
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,index)=>
                        <tr key={index}>
                           {
                             Object.values(item).map(val=>
                                <td key={val}>{val}</td>
                             )
                           } 
                           <td>
                            <button className="btn btn-outline-danger bi bi-trash"></button>
                            <button className="btn btn-outline-warning bi bi-pen mx-2"></button>
                            <button className="btn btn-outline-primary bi bi-eye"></button>
                           </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}