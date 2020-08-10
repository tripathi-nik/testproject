import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../../component/logincomponent/Login';
import Redirection from '../../../config/header';

class Login extends Component{
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
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <Redirection path={this.props.match.url}/>
                       <LoginForm/>
                      <hr/>
                      <div className="text-center">

                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <Link to="/admin/register" className="small">Create an Account!</Link>
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
export default Login;
