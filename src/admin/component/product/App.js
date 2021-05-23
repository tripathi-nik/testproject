import React from 'react';
import {connect} from 'react-redux';
import ImageCropper from "../../component/MediaUpload/imagecropper/imagecropper";
const mapStateToProps = state =>{
  const user = state.product;
  return{
   currentImageURL:user.currentImageURL,
  }
}
const App = props =>{
    return (
        <div>
            <ImageCropper src={props.currentImageURL}></ImageCropper>
        </div>
    );
}

export default connect(mapStateToProps)(App);
