
export function Navbar(props){
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