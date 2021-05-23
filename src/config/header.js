import React from 'react';
import config from 'react-global-configuration';
import './admin';
import { useHistory } from "react-router-dom";

const Redirect = props =>{
  const history = useHistory();
  if(props.path!==null){
    const current = props.path.replace('/','');
    const redirect_to_admin = config.get('redirect_to_admin');
    const secure_url = config.get('secure_url');

    if(secure_url.includes(current)&&localStorage.getItem('account')===null)
    {
      history.push('/admin/login');
    }
    if(redirect_to_admin.includes(current)&&localStorage.getItem('account')){
      history.push('/admin');
    }

  }


  return(
    <div style={{"display":"none"}} >redirecting in a moment</div>
  )
}
export default Redirect;
