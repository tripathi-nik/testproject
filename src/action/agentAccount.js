import config from 'react-global-configuration';
import '../config/admin';
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';

export const accountCreater = (value)=>{
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(value),
  };
  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/agent/add',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
       dispatch({type:'agent_account',payload:res2});
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
};

export const loginAction = (value)=>{
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
  };
  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/agent/login',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
      //console.log(res2);
      dispatch({type:'login_action',payload:res2});
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
};

export const lostPassword = (value)=>{
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
  };
  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/agent/lostPassword',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
      console.log(res2);
      //dispatch({type:'login_action',payload:res2});
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
};

export const fetchProfile = (value)=>{
  const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization':'Bearer '+value+''
      }
  };
  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/agent/user-profile',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
      dispatch({type:'profile_loader',payload:'isloading'});
      dispatch({type:'userDetail',payload:res2});
    })
    .catch(error => {
       console.error('Error:', error);
    })
  }
};


export const updateProfile = (value)=>{
  const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization':'Bearer '+JSON.parse(localStorage.getItem('account')).token+''
      },
      body: JSON.stringify(value),
  };
  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/agent/update-profile',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
      dispatch({type:'userDetail',payload:res2});
    })
    .catch(error => {
       console.error('Error:', error);
    })
  }
};
