import React,{Fragment,useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {accountCreater} from '../../../action/agentAccount';
const registerArr = [];
const  Register = props =>{
    const dispatch = useDispatch();
    return(
        <Formik initialValues={{first_name:'',last_name:'',email_address:'',input_password:'',repeat_password:''}} onSubmit={(values, {setSubmitting})=>{
            //dispatch({type:'add_loader',payload:'load'});
             dispatch(accountCreater(values));
             console.log(values);
            }}
            validationSchema = {Yup.object().shape({
              first_name:Yup.string().required("Required"),
              last_name:Yup.string().required("Required"),
              email_address:Yup.string().email().required("Email must be required and should be in a valid format"),
              input_password:Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required("Required"),
              repeat_password:Yup.string().required("Required").oneOf([Yup.ref('input_password'), null], 'Repeat Password must be equal to password'),
            })}
           >
        {props=>{
        const {
          values,touched,errors,isSubmitting,handleChange,handleBlur,handleSubmit,setFieldValue
        }=props;
        return(
                <form class="user" onSubmit={handleSubmit}>
                <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" class="form-control form-control-user" id="first_name" name="first_name" placeholder="First Name" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.first_name&&touched.first_name&&(
                          <div>{errors.first_name}</div>
                        )}
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-user" id="last_name" name="last_name" placeholder="Last Name" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.last_name&&touched.last_name&&(
                          <div>{errors.last_name}</div>
                        )}
                    </div>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control form-control-user" id="email_address" name="email_address" placeholder="Email Address" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.email_address&&touched.email_address&&(
                      <div>{errors.email_address}</div>
                    )}
                </div>
                <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" class="form-control form-control-user" id="input_password" name="input_password" placeholder="Password" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.input_password&&touched.input_password&&(
                          <div>{errors.input_password}</div>
                        )}
                    </div>
                    <div class="col-sm-6">
                        <input type="password" class="form-control form-control-user" id="repeat_password" name="repeat_password" placeholder="Repeat Password" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.repeat_password&&touched.repeat_password&&(
                          <div>{errors.repeat_password}</div>
                        )}
                    </div>
                </div>
                <button className="btn btn-primary btn-user btn-block" type="submit"> Register Account</button>
            </form>
        )
    }}
    </Formik>
    )
}
export default Register;
