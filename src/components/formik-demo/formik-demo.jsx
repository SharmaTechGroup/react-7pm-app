import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";


export function FormikDemo(){
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={{UserName:'', Age:0, Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('Name Required').min(4,'Name too short'), Mobile:yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'Invalid Mobile')})} onSubmit={(user)=>{console.log(user)}}>
                {
                    form => <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd> <Field type="text" name="UserName" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                        <dt>Age</dt>
                        <dd><Field type="number" name="Age" /></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile" /></dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Mobile" />
                        </dd>
                    </dl>
                    <button  disabled={(form.isValid)?false:true} type="submit">Submit</button>
                </Form>
                }
            </Formik>
        </div>
    )
}