import React,{Component,Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Redirection from '../../../config/header';
import Header from '../../component/adminHeader/Header';
import Footer from '../../component/adminFooter/Footer';
import AdminMenu from '../../component/AdminMenu';
import CategoryAdd from '../../component/category/categoryAdd';
import CategoryList from '../../component/category/categoryList';
import './category.css';
class Category extends Component{
  render(){
    return(
      <Fragment>
        <Redirection path={this.props.match.url}/>
        <div id="wrapper">
          <AdminMenu/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
               <Header/>
               <div className="col-md-6"><CategoryAdd/></div>
               <div className="col-md-6"><CategoryList/></div>
            </div>
            <Footer/>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Category;
