import "./login.css";

export function Login(){
    return(
        <div className="form-style">
            <h2>Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
            </dl>
            <button>Login</button>
        </div>
    )
}