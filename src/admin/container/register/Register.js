import React from 'react';
import {Link} from 'react-router-dom';
import  './rgister.css';
import Redirection from '../../../config/header';

import RegisterForm from '../../component/registercomponent/Register';
const Register = props => {
    return(
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <Redirection path={props.match.url}/>
                                <RegisterForm/>
                                <div className="text-center">
                                    <Link to="/admin/lost-password" className="small">Forgot Password?</Link>
                                </div>
                                <div className="text-center">
                                    <Link to="/admin/login" className="small">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;
