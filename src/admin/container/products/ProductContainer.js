import React from 'react';
import {connect} from 'react-redux';
import Header from '../../component/adminHeader/Header';
import Footer from '../../component/adminFooter/Footer';
import AdminMenu from '../../component/AdminMenu';
import ProductInner from './productInner';
import config from 'react-global-configuration';
import '../../../config/admin';
const mapStateToProps = state =>{
  const user = state.product;
  return{
   loadProduct:user.loadProduct,
   center:user.center
  }
}
const Profilecontainer = props =>{
  let html = [];
  const {loadProduct,center} = props;
  if(loadProduct==="load"){
     html.push(<img src={config.get('loadingImage')}/>);
   }
   else{
     html.push(<ProductInner url={props.url}/>);
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
