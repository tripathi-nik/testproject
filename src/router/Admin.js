import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../AppHome';
import Administrator from '../admin/Administrator';
import Register from '../admin/container/register/Register';
import Login from '../admin/container/login/Login';
import Logout from '../admin/Logout';
import Profile from '../admin/container/agent_profile/Profile';
import ProductEdit from '../admin/container/products/ProductEdit';
import ProductList from '../admin/container/products/ProductList';
import Category from '../admin/container/category/Category';
import ImageCropper from '../admin/container/products/App';

export default function BasicExample() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/admin/" component = {Administrator} />
      <Route exact path="/admin/register/" component = {Register} />
      <Route exact path="/admin/login/" component = {Login} />
      <Route exact path="/admin/logout/" component = {Logout} />
      <Route exact path="/admin/profile/" component = {Profile} />
      <Route exact path="/admin/product-list/" component = {ProductList} />
      <Route exact path="/admin/products/edit/:slug" component = {ProductEdit} />
      <Route exact path="/admin/category/" component = {Category} />
      <Route exact path="/admin/product/crop-image" component = {ImageCropper} />
    </Switch>
  );
}
