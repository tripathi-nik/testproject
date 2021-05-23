import React,{Component,Fragment} from 'react';
import Redirection from '../config/header';
import Header from './component/adminHeader/Header';
import Footer from './component/adminFooter/Footer';
import AdminMenu from './component/AdminMenu';
import ProductAddedGraph from './component/graphs/ProductAddedGraph';

class Adiminstrator extends Component{
  render(){
    return(
      <Fragment>
        <Redirection path={this.props.match.url}/>
        <div id="wrapper">
          <AdminMenu/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
               <Header/>
               <ProductAddedGraph/>
            </div>
            <Footer/>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Adiminstrator;
