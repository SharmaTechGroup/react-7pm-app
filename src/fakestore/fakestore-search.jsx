import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";


export default function FakestoreSearch(){
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('username');
        navigate('/login');
    }

    useEffect(()=>{
        if(!cookies['username']){
            navigate('/login');
        }
    },[cookies])

    return(
        <div>
            <h3 className="d-flex justify-content-between"> <span>{cookies['username']}</span> <span>Search</span> <span><button onClick={handleSignout} className="btn btn-danger">Signout</button></span> </h3>
            <form action='/results'>
                <div className="input-group w-25">
                    <input type="text" name="searchString" placeholder="eg: electronics, jewelery" className="form-control" />
                    <button type="submit" className="btn btn-warning">Search</button>
                </div>
            </form>
        </div>
    )
}