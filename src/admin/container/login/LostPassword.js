import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PasswordLoss from '../../component/logincomponent/LostPassword';
import Redirection from '../../../config/header';

class LostPassword extends Component{
  render(){
    return(
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Reset Your Password</h1>
                      </div>
                      <Redirection path={this.props.match.url}/>
                       <PasswordLoss/>
                      <hr/>
                      <div className="text-center">
                        <Link to="/admin/login" className="small">Login</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    )
  }
}
export default LostPassword;
