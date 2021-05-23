import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import config from 'react-global-configuration';
import '../../../config/admin';
import {addParams} from '../../../action/productManagement';

const token = localStorage.getItem('account')?JSON.parse(localStorage.getItem('account')).token:'';
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';
const CategoryAdd =()=>{
  const [percent, setPercent] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();
  return(
    <Formik initialValues={{title:'',slug:'',short_des:''}} onSubmit={(values, {setSubmitting})=>{
        values.image=imageUrl;
        let payloadArr = [
          {
            type:'category_update',
            payload:[{cat_update:1}]
          }
        ]
        dispatch(addParams('CategoryAdd',values,payloadArr));
       }}
       validationSchema = {Yup.object().shape({
         title:Yup.string().required("Required"),
         slug:Yup.string().required("Required"),
       })} >
     {props=>{
     const {
       handleChange,handleBlur,handleSubmit,values,touched,errors
     }=props;
     const onChange=file=>{
       setPercent(0);
       setImageUrl(null);
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
             'Authorization':'Bearer '+token+''
           }
         }
         axios.post(config.get(''+env+'.serverUrl')+'api/agent/media-upload',data,option).then(res=>{
           const {data,status} = res;
           if(status===200){
             setImageUrl(config.get(''+env+'.imagePath')+data.path);
           }
          })
       }
      const classes = [];
     classes.push('progress-bar');
     let per = parseInt(percent);
     if(per<=30){
       classes.push('bg-warning');
     }
     else if(per>30&&per<=70){
          classes.push('bg-info');
      }
      else if(per>99){
          classes.push('bg-success')
      }
     return(
     <form onSubmit={handleSubmit}>
      <div className="col-md-12 form-group">
          <input type="text" className="form-control form-control-user" id="title" name="title" placeholder="Title" value={values.title} onChange={handleChange} onBlur={handleBlur}/>
          {errors.title&&touched.title&&(
            <div>{errors.title}</div>
          )}
      </div>
      <div className="col-md-12 form-group">
          <input type="text" className="form-control form-control-user" id="slug" name="slug" placeholder="Slug" value={values.slug} onChange={handleChange} onBlur={handleBlur}/>
          {errors.slug&&touched.slug&&(
            <div>{errors.slug}</div>
          )}
      </div>
      <div className="col-md-12 form-group">
         <textarea className="form-control form-control-user" id="short_des" name="short_des" placeholder="Short Description" value={values.short_des} onChange={handleChange} onBlur={handleBlur}></textarea>
      </div>
      <div className="col-md-12 form-group">
      <Dropzone onDrop={onChange}>
         {({getRootProps, getInputProps}) => (
           <section>
             <div {...getRootProps()}>
               <input {...getInputProps()} />
               <p><i className="fa fa-upload fa-2x" aria-hidden="true"></i></p>
               <p>Drag 'n' drop some files here, or click to select files</p>

             </div>
             {imageUrl===null&&percent>0&&percent<100&&
                 <div className={classes.join(" ")} style={{'width':percent+'%'}} >{percent}% complete</div>
             }
             {imageUrl!==null&&
              <img src={imageUrl} alt="UserProfile" style={{"width":"400px"}}/>

             }
           </section>
         )}
       </Dropzone>
       </div>
      <button className="btn btn-primary btn-user btn-block" type="submit">Create New Category</button>
     </form>
   )
 }}
 </Formik>
  )
}
export default CategoryAdd;
