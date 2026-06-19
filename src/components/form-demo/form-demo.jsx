import { useRef, useState } from "react"
import { useFormik } from "formik"


export function FormDemo(){

    function ValidateUser(user){
        let errors = {};

        if(user.UserName.length===0){
            errors.UserName = "User Name Required";
        } else {
            if(user.UserName.length<4){
                errors.UserName = "Name too short";
            }
        }

        if(user.Age===0){
            errors.Age = "Age Required";
        } else {
            if(isNaN(user.Age)){
                errors.Age = "Age must be a number";
            }
        }

        if(user.City===''){
            errors.City = "City Required";
        } 

        if(user.Gender===''){
            errors.Gender = "Gender Required";
        }


        return errors;
    }
    
    const formik = useFormik({
         initialValues: {
            UserName:'',
            Age:0,
            City:'',
            Gender:''
         },
         validate: ValidateUser,
         onSubmit: (user)=>{
            console.log(user);
         }
    })


    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="UserName"  /></dd>
                    <dd className="text-danger">{ formik.touched.UserName && formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="number" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Age"  /></dd>
                    <dd className="text-danger">{formik.touched.Age && formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onBlur={formik.handleBlur} onChange={formik.handleChange} >
                            <option value=''>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.touched.City && formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Gender" value="Male" / > Male
                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Gender" value="Female" / > Female
                    </dd>
                    <dd className="text-danger">{formik.touched.Gender && formik.errors.Gender}</dd>
                </dl>
                <button type="submit" disabled={(formik.isValid)?false:true} >Submit</button>
                <button className={(formik.dirty)?'d-inline':'d-none'} >Save</button>
                
            </form>
        </div>
    )
}