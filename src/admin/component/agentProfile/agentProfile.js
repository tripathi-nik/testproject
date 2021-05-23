import React,{useRef,memo} from 'react';
import {useDispatch,connect} from 'react-redux';
import {Formik} from 'formik';
import config from 'react-global-configuration';
import '../../../config/admin';
import classes from '../../account.module.css';
import {updateProfile} from '../../../action/agentAccount';
import Toast from '../../../toasts/ToastMessage';

const mapStateToProps = (state)=>{
  const acc = state.agent;
  return{
    detail:acc.userDetail,
    loading:acc.loading,
    status:acc.status,
  }
}

const Profile = props =>{

  const dispatch = useDispatch();

  let { detail,loading,status }=props;

  return(

    <Formik initialValues={{first_name:detail.first_name?detail.first_name:'',last_name:detail.last_name?detail.last_name:'',local_address:detail.local_address?detail.local_address:'',city:detail.city?detail.city:'',state:detail.state?detail.state:'',zip:detail.zip?detail.zip:''}} onSubmit={(values, {setSubmitting})=>{
         dispatch({type:'add_loader',payload:'load'});
         dispatch(updateProfile(values));
        }} >
      {props=>{
      const {
        handleChange,handleBlur,handleSubmit,values
      }=props;
      return(
    <form onSubmit={handleSubmit}>
     <div class="col-md-12 form-group">
         <input type="text" className="form-control form-control-user" id="first_name" name="first_name" placeholder="First Name" value={values.first_name} onChange={handleChange} onBlur={handleBlur}/>
     </div>
     <div class="col-md-12 form-group">
         <input type="text" className="form-control form-control-user" id="last_name" name="last_name" placeholder="Last Name" value={values.last_name} onChange={handleChange} onBlur={handleBlur}/>
     </div>
     <div class="col-md-12 form-group">
         <input type="text" className="form-control form-control-user" id="local_address" name="local_address" placeholder="Local Address" value={values.local_address} onChange={handleChange} onBlur={handleBlur}/>
     </div>
     <div class="col-md-12 form-group">
         <input type="text" className="form-control form-control-user" id="city" name="city" placeholder="City" value={values.city} onChange={handleChange} onBlur={handleBlur}/>
     </div>
     <div class="col-md-12 form-group">
         <input type="text" className="form-control form-control-user" id="state" name="state" placeholder="State" value={values.state} onChange={handleChange} onBlur={handleBlur}/>
     </div>

     <div class="col-md-12 form-group">
         <input type="text" className="form-control form-control-user" id="zip" name="zip" placeholder="ZIP" value={values.zip} onChange={handleChange} onBlur={handleBlur}/>
     </div>
     { loading==="load"&&
      <img src={config.get('loadingImage')} className={classes.imageCss} alt="Loading.."/>
     }
     <button className="btn btn-primary btn-user btn-block" type="submit"> Update Profile</button>
    </form>
  )
}}
</Formik>
)
}
export default memo(connect(mapStateToProps)(Profile));
