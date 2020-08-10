import React,{useState} from 'react';
import {Link} from 'react-router-dom';
const Header = props =>{
  let testval = 'hidden';
  const [showA, setShowA] = useState(testval==='hidden'?true:false);
  const toggleShowA = () => setShowA(!showA);
  const [firstName] = useState(localStorage.getItem('account')?JSON.parse(localStorage.getItem('account')).first_name+' '+JSON.parse(localStorage.getItem('account')).last_name:'');
  let classSetOne = ["nav-item","dropdown","no-arrow"];
  let classSetTwo = ["dropdown-menu","dropdown-menu-right","shadow","animated--grow-in"];
  if(showA===false){
     classSetOne.push("show");
     classSetTwo.push("show");
     testval = "show";
  }

  return(
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fa fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a className="nav-link dropdown-toggle" href="index.html" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-search fa-fw"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fa fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>
        <li className={classSetOne.join(" ")}>
          <button className="nav-link dropdown-toggle" style={{background:"none",border: "none"}} onClick={toggleShowA}>
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{firstName}</span>
            <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="user profile"/>
          </button>
          <div className={classSetTwo.join(" ")} aria-labelledby="userDropdown">
            <a className="dropdown-item" href="index.html">
              <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <a className="dropdown-item" href="index.html">
              <i className="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </a>
            <a className="dropdown-item" href="index.html">
              <i className="fa fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/admin/logout">
              <i class="fa fa-sign-out fa-sm fa-fw mr-2 text-gray-400">::before</i>
              Logout
            </Link>
          </div>
        </li>

      </ul>

    </nav>
  )
}
export default Header;
