import React,{Component,Fragment} from 'react';
import Redirection from '../config/header';
import Header from './component/adminHeader/Header';
import Footer from './component/adminFooter/Footer';
class Adiminstrator extends Component{
  render(){
    return(
      <Fragment>
        <Redirection path={this.props.match.url}/>
        <div id="wrapper">
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fa fa-home"></i>
              </div>
              <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fa fa-user-circle-o"></i>
                <span>Dashboard</span></a>
            </li>
          </ul>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
               <Header/>
            </div>
            <Footer/>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Adiminstrator;
