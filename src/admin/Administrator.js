import React,{Component,Fragment} from 'react';
import Redirection from '../config/header';
class Adiminstrator extends Component{
  render(){
    return(
      <Fragment>
        <Redirection path={this.props.match.url}/>
        <div id="wrapper">
          <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div class="sidebar-brand-icon rotate-n-15">
                <i class="fa fa-home"></i>
              </div>
              <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            <li class="nav-item active">
              <a class="nav-link" href="index.html">
                <i class="fa fa-user-circle-o"></i>
                <span>Dashboard</span></a>
            </li>
          </ul>
        </div>
      </Fragment>
    )
  }
}
export default Adiminstrator;
