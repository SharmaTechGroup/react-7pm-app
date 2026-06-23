import { useRef, useState } from "react"
import { useFormik } from "formik"
import * as yup from "yup";


export function FormDemo(){

    
    const formik = useFormik({
         initialValues: {
            UserName:'',
            Age:0,
            City:'',
            Gender:'',
            Mobile:''
         },
         validationSchema: yup.object({
             UserName: yup.string().required('Name Required').min(4,'Name too short'),
             Age: yup.number().required('Age Required').min(15,'Age min 15').max('30','Age max 30'),
             Mobile: yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'Invalid Mobile')
         }) ,
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
                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName"  /></dd>
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
                    <dt>Mobile</dt>
                    <dd><input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="Mobile" /></dd>
                    <dd className="text-danger">
                        {formik.touched.Mobile && formik.errors.Mobile}
                    </dd>
                </dl>

                <button type="submit" disabled={(formik.isValid)?false:true} >Submit</button>
                <button className={(formik.dirty)?'d-inline':'d-none'} >Save</button>
                
            </form>
        </div>
    )
}