import React from 'react';
import { useHistory } from "react-router-dom";
const Logout =()=>{
  const history = useHistory();
  history.push('/admin/login');
  localStorage.removeItem('account');
  return(
    <p>You are successfully logout.Please wait while we are redirecting</p>
  )
}
export default Logout;
