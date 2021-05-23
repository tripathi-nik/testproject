import React from 'react';
import '../config/admin';
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';
export async function details(value){
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
      body: JSON.stringify({slug:value}),
  };
  fetch(config.get(''+env+'.serverUrl')+'api/product/detail',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
      let result = await res2;
      return result;
    })
    .catch(error => {
      console.error('Error:', error);
    })
}
