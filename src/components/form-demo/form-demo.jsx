import { useState } from "react"


export function FormDemo(){

   
    function handleSubmit(e){
        e.preventDefault();
        let data = new FormData(e.target)
        console.log({UserName:data.get('UserName'), Age:parseInt(data.get('Age')), City:data.get('City'), Gender: data.get('Gender')});
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName"  /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age"  /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City">
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="Gender" value="Male" / > Male
                        <input type="radio" name="Gender" value="Female" / > Female
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}