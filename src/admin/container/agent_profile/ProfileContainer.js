import React from 'react';
import {useDispatch,connect} from 'react-redux';
import Header from '../../component/adminHeader/Header';
import Footer from '../../component/adminFooter/Footer';
import AdminMenu from '../../component/AdminMenu';
import Innerfilled from './agentFilled';
import config from 'react-global-configuration';
import '../../../config/admin';
const mapStateToProps = state =>{
  const user = state.agentReducer;
  return{
   profileLoading:user.profileLoading,
   center:user.center
  }
}
const Profilecontainer = props =>{
  let html = [];
  const {profileLoading,center} = props;
  if(profileLoading==="loaded"){
     html.push(<Innerfilled/>);
   }else{
    html.push(<img src={config.get('loadingImage')}/>);
  }
  return(
      <div id="wrapper">
        <AdminMenu/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
             <Header/>
             <div className="container-fluid" style={{textAlign:center}}>
               {html}
             </div>
          </div>
          <Footer/>
        </div>
      </div>
  )
}
export default connect(mapStateToProps)(Profilecontainer);
