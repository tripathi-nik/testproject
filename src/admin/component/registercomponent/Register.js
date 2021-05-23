import React,{useRef} from 'react';
import {connect,useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import config from 'react-global-configuration';
import '../../../config/admin';
import classes from '../../account.module.css';
import {accountCreater} from '../../../action/agentAccount';
import Toast from '../../../toasts/ToastMessage';
import { useHistory } from "react-router-dom";


const mapStateToProps = (state)=>{
  const acc = state.agent;
  return{
    loading:acc.loading,
    status:acc.status,
  }
}
const checkRedirection = (history,url,dispatch) =>{
  setTimeout(() => {
    dispatch({type:'reset_data',payload:'reset'});
   history.push(url);
 }, 4000);
}
const  Register = props =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const signup_button = useRef();
    const change_email = useRef();
    let { loading,status }=props;
    if(status===config.get('status_success')){
      checkRedirection(history,'/admin/login',dispatch);
    }
    return(

        <Formik initialValues={{first_name:'',last_name:'',email_address:'',input_password:'',repeat_password:''}} onSubmit={(values, {setSubmitting})=>{
             dispatch({type:'add_loader',payload:'load'});
             dispatch(accountCreater(values));
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
          touched,errors,handleChange,handleBlur,handleSubmit
        }=props;
        const testData = () =>{
          status=null;
          change_email.current.classList.remove('error');
          errors.email_address=null;
        }
        if(status===config.get('status_success')&&signup_button.current){
          signup_button.current.setAttribute('disabled',true);
          change_email.current.classList.remove('error');
          errors.email_address=null;
        }
        if(status===config.get('status_failure')&&change_email.current){
          change_email.current.focus();
          change_email.current.classList.add('error');
          signup_button.current.removeAttribute('disabled');
          errors.email_address=config.get('unique_email_error');
        }
        return(
                <form className="user" onSubmit={handleSubmit}>
                <div className="form-group row">
                {status===config.get('status_success')&&
                <Toast message={config.get('agent_account_added')} show="show" state="true"/>}
                   <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" id="first_name" name="first_name" placeholder="First Name" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.first_name&&touched.first_name&&(
                          <div>{errors.first_name}</div>
                        )}
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" id="last_name" name="last_name" placeholder="Last Name" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.last_name&&touched.last_name&&(
                          <div>{errors.last_name}</div>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control form-control-user" id="email_address" name="email_address" placeholder="Email Address" onChange={(e)=>{ props.handleChange(e); testData()}} ref={change_email} onBlur={handleBlur}/>
                    {errors.email_address&&touched.email_address&&(
                      <div>{errors.email_address}</div>
                    )}
                </div>
                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control-user" id="input_password" name="input_password" placeholder="Password" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.input_password&&touched.input_password&&(
                          <div>{errors.input_password}</div>
                        )}

                    </div>
                    <div className="col-sm-6">
                        <input type="password" className="form-control form-control-user" id="repeat_password" name="repeat_password" placeholder="Repeat Password" onChange={handleChange} onBlur={handleBlur}/>
                        {errors.repeat_password&&touched.repeat_password&&(
                          <div>{errors.repeat_password}</div>
                        )}
                    </div>
                </div>
                { loading!==null&&
                 <img src={config.get('loadingImage')} className={classes.imageCss} alt="Loading.."/>
                }

                <button className="btn btn-primary btn-user btn-block" type="submit" ref={signup_button}> Register Account</button>
            </form>
        )
    }}
    </Formik>
    )
}
export default connect(mapStateToProps)(Register);
