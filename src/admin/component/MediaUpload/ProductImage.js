import React,{useState,Fragment,useEffect,useCallback} from 'react';
import { useHistory } from "react-router-dom";
import classes from './media.module.css';
import {connect,useDispatch} from 'react-redux';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import config from 'react-global-configuration';
import '../../../config/admin';
import {mediaManagement,removeImage,fetchImage} from '../../../action/productManagement';
import { ReactSortable } from "react-sortablejs";
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';
const mapStateToProps = state =>{
  const user = state.product;
  return{
   picture:user.picture,
   strata:user.status,
   loadedImage:user.loadImage,
   currentImageID:user.currentImageID,
   currentImageURL:user.currentImageURL,
   doingEdit:user.doingEdit,
   rollbackURL:user.rollbackURL

  }
}
const  Media =props=>{
  const {strata,loadedImage,picture} = props;
  const [percent, setPercent] = useState(0);

  const [gallery, setGallery] = useState([]);
  const [onload,setonload] = useState(0);
  const dispatch = useDispatch();
  let history = useHistory();
  const path = window.location.pathname;
  const spl = path.split('/');
  useEffect(()=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
        body: JSON.stringify({slug:spl[spl.length-2]}),
    };
    fetch(config.get(''+env+'.serverUrl')+'api/product/media-gallery',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
        setGallery(res2);
        setonload(onload+parseInt(1));
    })
    .catch(error => {
      console.error('Error:', error);
    })
  },[Media]);
  const onChange = file =>{
     setPercent(0);
     let data = new FormData();
     data.append('myImage',file[0]);
     const option = {
       onUploadProgress :(progressEvent)=>{
         const {loaded,total} = progressEvent;
         let percentage = Math.floor((loaded*100)/total);
         setPercent(percentage);
       },
       headers: {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Authorization':'Bearer '+JSON.parse(localStorage.getItem('account')).token
       }
     }
     axios.post(config.get(''+env+'.serverUrl')+'api/agent/media-upload',data,option).then(res=>{
       const {data,status} = res;
       if(status===200){
         console.log(data);
         const currentDate = new Date();
         const timestamp = currentDate.getTime();
         const newObj = {
           id:'img'+timestamp,
           path:'/uploads/'+data.filename,
           chosen:false,
           selected:false
         };
         picture[picture.length]=newObj;
         setGallery(picture);
         setonload(onload+parseInt(1));
       }
     })

   }
   const deleteImage = keyValue => {
     let ind = gallery.findIndex(e=>{
       return e.id===keyValue
     });
     gallery.splice(ind,1);
     setGallery(gallery);
     setonload(onload+parseInt(1));
   };
   const editImage = keyValue2 => {
     let ind = gallery.findIndex(e=>{
       return e.id===keyValue2
     });
     //console.log(gallery[ind].id);
     dispatch({type:'current_image_edit',payload:{currentImageID:gallery[ind].id,currentImageURL:config.get(''+env+'.serverUrl')+'static/'+gallery[ind].path,doingEdit:1,rollbackURL:window.location.href}});
     history.push('/admin/product/crop-image');
   }
   const classic = [];
   classic.push('progress-bar');
   let per = parseInt(percent);
   if(per<=30){
     classic.push('bg-warning');
   }
   else if(per>30&&per<=70){
     classic.push('bg-info');
   }
   else if(per>99){
     classic.push('bg-success')
   }
   let len = gallery.length;
   dispatch({type:'update_pro_gallery',payload:gallery});
   return(
     <Fragment>
     <Dropzone onDrop={onChange}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p><i class="fa fa-upload fa-2x" aria-hidden="true"></i></p>
              <p>Drag 'n' drop some files here, or click to select files</p>

            </div>
            {strata===null&&
                <div className={classic.join(" ")} style={{'width':percent+'%'}} >{percent}% complete</div>
            }
            </section>
        )}
      </Dropzone>
      {len>0&&(
        <ul className={classes.mediaContainer} aonLoad={onload}>
           <ReactSortable list={gallery} setList={setGallery} >
             {gallery.map(item => (
                 <li><img key={item.id} src={config.get(''+env+'.serverUrl')+'static/'+item.path} style={{height:'116px'}}/><sup><i className={'fa fa-trash-o btn btn-danger '+classes.btner} onClick={()=>{deleteImage(item.id)}}></i><i className={'fa fa-edit btn btn-success '+classes.btner} onClick={()=>{editImage(item.id)}}></i></sup></li>
             ))}
           </ReactSortable>
       </ul>
      )}

      </Fragment>
   );
}
export default connect(mapStateToProps)(Media);
