import React,{Fragment,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Redirection from '../../../config/header';
import config from 'react-global-configuration';
import '../../../config/admin';
import {fetchProfile} from '../../../action/agentAccount';
import ProfileContainer from './ProfileContainer';
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';

const Adiminstrator = props=>{
  const dispatch = useDispatch();
  useEffect(()=>{
    const token = localStorage.getItem('account')?JSON.parse(localStorage.getItem('account')).token:'';
     dispatch(fetchProfile(token));
     return()=>{
       dispatch({type:'reset_user',payload:'reset'})
     }
  },[]);
  return(
    <Fragment>
      <Redirection path={props.match.url}/>
      <ProfileContainer/>
    </Fragment>
  )
}
export default Adiminstrator;
