
export function Navbar(props){
     if(props.orientation==='horizontal'){
        return(
        <nav className={`border border-1 border-secondary ${props.theme} align-items-center p-3 d-flex justify-content-between`}>
            <span className={`fs-4 fw-bold ${props.brandIcon}`}> {props.brand} </span>
            <div>
                {
                    props.menuItems.map(item=><span className="mx-4" key={item}> {item} </span>)
                }
            </div>
            <div className={props.searchDisplay}>
                <div className="input-group">
                    <input type="text" placeholder={props.searchString} className="form-control"/>
                    <button className="btn btn-warning bi bi-search"></button>
                </div>
            </div>
            <div>
                <span className="bi bi-person"> Signin</span>
            </div>
        </nav>
    )
     }
     else {
        return(
            <nav style={{width:'150px', height:'400px'}} className={`d-flex p-2 border border-2 flex-column justify-content-between align-items-baseline`}>
                <div className="fs-4 fw-bold my-3">{props.brand}</div>
                <div>
                 <ul className="list-group">
                  {
                     props.menuItems.map(item=>
                        <li key={item} className="list-group-item w-100 list-group-item-danger my-2">{item}</li>
                     )
                  }
                </ul>
                </div>
                <div>
                    <button className="btn w-100 btn-warning bi bi-person">Signin</button>
                </div>
            </nav>
        )
     }
}