import React from 'react';
import {connect} from 'react-redux';
import ImageCropper from "../../component/MediaUpload/imagecropper/imagecropper";
const mapStateToProps = state =>{
  const user = state.product;
  return{
   currentImageURL:user.currentImageURL,
   currentImageID:user.currentImageID,
   rollbackURL:user.rollbackURL,
   picture:user.picture,
  }
}
const App = props =>{
    return (
        <div>
            <ImageCropper src={props.currentImageURL} replace={props.currentImageID} rollback={props.rollbackURL} picture={props.picture}></ImageCropper>
        </div>
    );
}

export default connect(mapStateToProps)(App);
