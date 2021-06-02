import Home from '../AppHome';
import Administrator from '../admin/Administrator';
import Register from '../admin/container/register/Register';
import Login from '../admin/container/login/Login';
import LostPassword from '../admin/container/login/LostPassword';
import Logout from '../admin/Logout';
import Profile from '../admin/container/agent_profile/Profile';
import ProductEdit from '../admin/container/products/ProductEdit';
import ProductList from '../admin/container/products/ProductList';
import Category from '../admin/container/category/Category';
import ImageCropper from '../admin/container/products/App';

const routes = [
  { path: "/admin/", exact:true, component: Administrator },
  { path: "/admin/register/", exact:true, component: Register },
  { path: "/admin/login/", exact:true, component: Login },
  { path: "/admin/lost-password/", exact:true, component: LostPassword },
  { path: "/admin/logout/", exact:true, component: Logout },
  { path: "/admin/profile/", exact:true, component: Profile },
  { path: "/admin/product-list/", exact:true, component: ProductList },
  { path: "/admin/products/edit/:slug", exact:true, component: ProductEdit },
  { path: "/admin/category/", exact:true, component: Category },
  { path: "/admin/product/crop-image", exact:true, component: ImageCropper },
];

export default routes;
