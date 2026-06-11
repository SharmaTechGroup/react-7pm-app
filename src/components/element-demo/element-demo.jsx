import { useState } from "react"


export function ElementDemo(){

    const [passport, setPassport] = useState('');
    const [msg, setMsg] = useState('');

    function handleChange(e){
        setPassport(e.target.value);
    }
    function handleBlur(){
        setPassport(passport.toUpperCase());
        setMsg('');
    }

    function handleFocus(){
        setMsg('eg: BVP432HY');
    }

    return(
        <div className="container-fluid">
            <dl>
                <dt>Passport</dt>
                <dd><input type="text" value={passport} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} /></dd>
                <dd className="text-warning">{msg}</dd>
            </dl>
        </div>
    )
}