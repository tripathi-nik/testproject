import React, {Fragment,useRef,useState } from "react";
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import config from 'react-global-configuration';
import '../../../../config/admin';
import {updateImage} from '../../../../action/productManagement';

const ImageCropper = props => {
  const {replace,src,rollback,picture}=props;
  const cropperRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [cropImage,gutCropImage]=useState(null);
  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    gutCropImage(cropper.getCroppedCanvas().toDataURL());
  };
 const proceedCrop = () =>{
   const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';

   const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
       body: JSON.stringify({image:cropImage}),
   };
   fetch(config.get(''+env+'.serverUrl')+'api/product/replace-crop-image',requestOptions)
     .then(res=>res.json())
     .then(res2=>{
       let ind = picture.findIndex(e=>{
         return e.id===replace
       });
       let curImg = res2.url;
       let curImgObj = {
                        ...picture[ind]
                      };
        curImgObj.path = curImg;
        picture[ind] = curImgObj;
        dispatch(updateImage(picture,rollback));
     })
     .catch(error => {
       console.error('Error:', error);
     });
 }
  return (
  <Fragment>
    <Cropper
      src={src}
      style={{ height: 400, width: "100%" }}
      initialAspectRatio={16 / 9}
      guides={true}
      crop={onCrop}
      ref={cropperRef}
    />
    <button onClick={proceedCrop}>Crop</button>
   </Fragment>
  );
};
export default ImageCropper;
