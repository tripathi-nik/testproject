import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import './component.css';
const AdminMenu = props =>{
  const linkRef = useRef(null);
  const handleClick=(event)=>{
    const eventer = event.currentTarget;
    const eventID = eventer.id;
    const doms = document.getElementsByClassName('collapseDiv');
    const doms2 = document.getElementsByClassName('arrowFactor');
    for(let i=0;i<doms.length;i++){
      const list=doms[i].classList.value;
      if(list.includes(eventID+'Div')===false){
        doms[i].classList.remove('show');
      }
     }
    if(eventer.querySelector('.collapseDiv')!==null){
      eventer.querySelector('.collapseDiv').classList.toggle('show');
     }
     for(let i=0;i<doms2.length;i++){
       const list=doms2[i].classList.value;
       if(list.includes(eventID+'Arrow')===false){
         doms2[i].classList.remove('arrow');
       }
      }
     const arrows = eventer.querySelector('.arrowFactor');
     if(arrows!==null){
       arrows.classList.toggle('arrow');
      }
    }
  return(
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fa fa-home"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>
      <li className="nav-item" id="admin" onClick={handleClick}>
        <Link  className="nav-link" to="/admin">
          <i className="fa fa-user-circle-o"></i>
          <span>Dashboard</span></Link>
      </li>
      <li className="nav-item" id="product" onClick={handleClick}>
          <p className="nav-link">
          <i className="fa fa-first-order"></i>
          <span>Product</span><span className="fa arrowFactor productArrow" style={{"float":"right"}}></span></p>
          <div id="collapsePages" className="collapse collapseDiv productDiv">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/admin/product-list">Products</Link>
              <Link className="collapse-item" to="/admin/products">Add</Link>
              <Link className="collapse-item" to="/admin/category">Category</Link>
          </div>
        </div>
      </li>
      <li className="nav-item" id="order" onClick={handleClick}>
          <a className="nav-link" href="#">
          <i className="fa fa-shopping-cart"></i>
          <span>Order</span><span className="fa arrowFactor orderArrow" style={{"float":"right"}}></span></a>
          <div id="collapsePages" className="collapse collapseDiv orderDiv">
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="register.html">Orders</a>
              <Link  className="collapse-item" to="/admin/products">Add</Link>
          </div>
        </div>
      </li>
    </ul>

  )
}
export default AdminMenu;
