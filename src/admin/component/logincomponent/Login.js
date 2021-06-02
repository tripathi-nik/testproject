import React,{useRef} from 'react';
import {connect,useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import config from 'react-global-configuration';
import '../../../config/admin';
import classes from '../../account.module.css';
import {loginAction} from '../../../action/agentAccount';
import Toast from '../../../toasts/ToastMessage';
import { useHistory } from "react-router-dom";


const mapStateToProps = (state)=>{
  const acc = state.agentReducer;
  return{
    loading:acc.loading,
    status:acc.status,
    error:acc.error
  }
}

const checkRedirection = (history,url,dispatch) =>{
const timer = setTimeout(() => {
    dispatch({type:'reset_data',payload:'reset'});
   history.push(url);
 }, 4000);
 return ()=>clearTimeout(timer);
}

const Login = props =>{
  const dispatch = useDispatch();
  const history = useHistory();
  let {loading,status,error} = props;
  const signup_button = useRef();
  return(
    <Formik initialValues={{email_address:'',input_password:''}} onSubmit={(values, {setSubmitting})=>{
          dispatch({type:'add_loader',payload:'load'});
          dispatch(loginAction(values));
        }}
        validationSchema = {Yup.object().shape({
          email_address:Yup.string().email().required("Email must be required and should be in a valid format"),
          input_password:Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required("Required")
        })}
       >
    {props=>{
      const {
        touched,errors,handleChange,handleBlur,handleSubmit
      }=props;
       if(status===config.get('status_success')&&signup_button.current){
         checkRedirection(history,'/admin',dispatch);
       }
      let message = ""; let color = "";

      if(status===parseInt(config.get('status_failure'))){
        message = config.get(''+error+'_error');
        color = config.get('failure_toast_color');
      }
      if(status===config.get('status_success')){
        message = config.get('user_found_success');
        color = config.get('success_toast_color');
      }

    return(
      <form className="user" onSubmit={handleSubmit}>
        {status!==null&&
        <Toast message={message} show="show" color={color} state="true"/>}
        <div className="form-group">
            <input type="email" className="form-control form-control-user" id="email_address" name="email_address" placeholder="Email Address" onChange={handleChange}  onBlur={handleBlur} />
            {errors.email_address&&touched.email_address&&(
              <div>{errors.email_address}</div>
            )}
        </div>
        <div className="form-group">
        <input type="password" className="form-control form-control-user" id="input_password" name="input_password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} />
          {errors.input_password&&touched.input_password&&(
            <div>{errors.input_password}</div>
          )}
        </div>
        { loading!==null&&
         <img src={config.get('loadingImage')} className={classes.imageCss} alt="Loading.."/>
        }
        <button className="btn btn-primary btn-user btn-block" type="submit" ref={signup_button} >Login</button>
      </form>
      )
    }}
    </Formik>
    )
};
export default connect(mapStateToProps)(Login);
