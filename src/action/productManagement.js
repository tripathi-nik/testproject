import config from 'react-global-configuration';
import '../config/admin';
import { Router } from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory'
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';


export const history = createBrowserHistory();
export const productCreator = (value)=>{

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
      body: JSON.stringify(value),
  };
  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/product/add',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
       console.log(res2);
       dispatch({type:'product_management',payload:res2});
       const toast = {
         message:'Product Added Successfully',
         display:true
       };
       dispatch({type:'toastIntent',payload:toast});
       history.push('/admin/products/'+res2.slug);
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
};

export const productUpdator = (value,endpoint)=>{
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
      body: JSON.stringify(value),
  };
  console.log(value);
  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/product/update/'+endpoint,requestOptions)
    .then(res=>res.json())
    .then(res2=>{
      console.log(res2);
       dispatch({type:'toastIntent',payload:{message:`${res2.title} updated Successfully.`,display:true}});
       dispatch({type:'product_management',payload:res2});
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
};

export const mediaManagement = (value,images)=>{
  return(dispatch)=>{
     let newImg = {id:'img'+images.length,path:value};
     images.push(newImg);
     dispatch({type:'pictures',payload:images});
   }
};

export const listProducts = (value)=>{
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
      body: JSON.stringify(value),
  };

  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/product/list',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
       dispatch({type:'product_list',payload:res2});
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
};

export const removeImage = (value,key)=>{
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
      body: JSON.stringify({slug:value,to_remove:key}),
  };

  return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/product/removeimage',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
        //console.log(res2);
        dispatch({type:'image_reset',payload:0})
        dispatch({type:'detailedProduct',payload:res2});
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
};

export const addParams = (slug,value,payload)=>{
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
      body: JSON.stringify(value)
   };
   console.log(requestOptions);
   return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/product/'+slug,requestOptions)
    .then(res=>res.json())
     .then(res2=>{
         // dispatch({type:'image_reset',payload:0})
         // dispatch({type:'detailedProduct',payload:res2});
     })
     .catch(error => {
       console.error('Error:', error);
     })
   }
};

export const updateImage = (picture,rollback)=>{
  let spl = rollback.split('/');
  let endPoint = spl[spl.length-2];
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
      body: JSON.stringify({endpoint:endPoint,picture:picture})
   };
   return(dispatch)=>{
    fetch(config.get(''+env+'.serverUrl')+'api/product/updateImage',requestOptions)
    .then(res=>res.json())
     .then(res2=>{
       if(res2.status==='redirect'){
         window.location.replace('/admin/products/edit/'+endPoint+'/');
       }
     })
     .catch(error => {
       console.error('Error:', error);
     })
   }
};
