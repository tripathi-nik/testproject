import React,{Fragment} from 'react';
import Redirection from '../../../config/header';
import Header from '../../component/adminHeader/Header';
import Footer from '../../component/adminFooter/Footer';
import AdminMenu from '../../component/AdminMenu';
import ProductInner from './productInner';
const ProductEdit = (props) =>{
   const url = props.match.params.slug;
  return(
    <Fragment>
       <div id="wrapper">
         <AdminMenu/>
         <div id="content-wrapper" className="d-flex flex-column">
           <div id="content">
              <Header/>
              <div className="container-fluid">
                <ProductInner url={url}/>
              </div>
           </div>
           <Footer/>
         </div>
       </div>
    </Fragment>
  )
}
export default ProductEdit;
