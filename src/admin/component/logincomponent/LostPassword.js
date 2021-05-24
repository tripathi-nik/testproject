import React,{useRef} from 'react';
import {connect,useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import config from 'react-global-configuration';
import '../../../config/admin';
import classes from '../../account.module.css';
import {lostPassword} from '../../../action/agentAccount';
import Toast from '../../../toasts/ToastMessage';
import { useHistory } from "react-router-dom";


const mapStateToProps = (state)=>{
  const acc = state.agent;
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
    <Formik initialValues={{email_address:''}} onSubmit={(values, {setSubmitting})=>{
          //dispatch({type:'add_loader',payload:'load'});
          dispatch(lostPassword(values));
        }}
        validationSchema = {Yup.object().shape({
          email_address:Yup.string().email().required("Email must be required and should be in a valid format"),
        })}
       >
    {props=>{
      const {
        touched,errors,handleChange,handleBlur,handleSubmit
      }=props;
    return(
      <form className="user" onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="email" className="form-control form-control-user" id="email_address" name="email_address" placeholder="Email Address" onChange={handleChange}  onBlur={handleBlur} />
            {errors.email_address&&touched.email_address&&(
              <div>{errors.email_address}</div>
            )}
        </div>
        <button className="btn btn-primary btn-user btn-block" type="submit" >Reset Your Password</button>
      </form>
      )
    }}
    </Formik>
    )
};
export default connect(mapStateToProps)(Login);
