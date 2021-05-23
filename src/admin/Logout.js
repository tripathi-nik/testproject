import React,{memo} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
const Logout =()=>{
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch({type:'reset_data',payload:null});
  dispatch({type:'clear_picture',payload:null});

  history.push('/admin/login');
  localStorage.removeItem('account');
  return(
    <p>You are successfully logout.Please wait while we are redirecting</p>
  )
}
export default memo(Logout);
