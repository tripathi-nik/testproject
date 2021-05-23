import React,{Fragment,memo} from 'react';
import {connect,useDispatch} from 'react-redux';
import Profile from '../../component/agentProfile/agentProfile';
import Media from '../../component/MediaUpload/Media';

const mapStateToProps = state =>{
  const user = state.agent;
  return{
   userDetail:user.userDetail,
   center:user.center
  }
}
const Filled = props =>{
  const {center}=props;
  return(
    <Fragment>
      <div className="row" style={{"marginBottom":"20px"}}>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="card shadow mb-6">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Update Your Profile</h6>
            </div>
            <div className="card-body" style={{"textAlign":"center"}}>
                <Media/>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="card shadow mb-6">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Update Your Password</h6>
            </div>
            <div className="card-body">
                this is your password change section
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-6">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Update Your Profile</h6>
            </div>
            <div className="card-body" style={{"textAlign":center}}>
             <Profile/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default memo(connect(mapStateToProps)(Filled));
