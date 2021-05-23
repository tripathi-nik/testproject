import React from 'react';
import {useDispatch,connect} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import config from 'react-global-configuration';
import '../../../config/admin';
import classes from '../../account.module.css';
import Toast from '../../../toasts/ToastMessage';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './editor.css';
import {productCreator} from '../../../action/productManagement';

const mapStateToProps = (state)=>{
  const acc = state.product;
  return{
    loading:acc.loading,
    productID:acc.productID,
  }
}

const Profile = props =>{

  const dispatch = useDispatch();
  let { productID,loading }=props;
  return(
     <Formik initialValues={{title:'',cost_price:'',sale_price:'',inventory:'',short_des:'',product_specification:'Enter you product detail'}} onSubmit={(values, {setSubmitting})=>{
         dispatch({type:'add_loader',payload:'load'});
         dispatch(productCreator(values));
        }}
        validationSchema = {Yup.object().shape({
          title:Yup.string().required("Required"),
          cost_price:Yup.number().required("Required"),
          sale_price:Yup.number().required("Required"),
          inventory:Yup.number().min(1, 'Must be greater than or equal to 1.').required("Required"),
        })} >
      {props=>{
      const {
        handleChange,handleBlur,handleSubmit,values,touched,errors
      }=props;
      const handleOnchange = (e,editor)=>{
        values.product_specification = editor.getData();
      }
      if(parseInt(values.sale_price)>parseInt(values.cost_price)){
        errors.sale_price = config.get('sale_price_error');
      }
      return(
      <form onSubmit={handleSubmit}>
      {productID!==null&&
      <Toast message={config.get('product_success')} show="show" state="true"/>}
       <div class="col-md-12 form-group">
           <input type="text" className="form-control form-control-user" id="title" name="title" placeholder="Title" value={values.title} onChange={handleChange} onBlur={handleBlur}/>
           {errors.title&&touched.title&&(
             <div>{errors.title}</div>
           )}
       </div>
       <div class="col-md-12 form-group">
           <input type="number" className="form-control form-control-user" id="cost_price" name="cost_price" min="1" placeholder="Cost Price" value={values.cost_price} onChange={handleChange} onBlur={handleBlur}/>
           {errors.cost_price&&touched.cost_price&&(
             <div>{errors.cost_price}</div>
           )}
       </div>
       <div class="col-md-12 form-group">
           <input type="number" className="form-control form-control-user" id="sale_price" name="sale_price" min="1" placeholder="Sale Price" value={values.sale_price} onChange={handleChange} onBlur={handleBlur}/>
           {errors.sale_price&&touched.sale_price&&(
             <div>{errors.sale_price}</div>
           )}
       </div>
       <div class="col-md-12 form-group">
           <input type="text" className="form-control form-control-user" id="inventory" name="inventory" placeholder="Inventory" value={values.inventory} onChange={handleChange} onBlur={handleBlur}/>
           {errors.inventory&&touched.inventory&&(
             <div>{errors.inventory}</div>
           )}
       </div>
       <div class="col-md-12 form-group">
          <textarea className="form-control form-control-user" id="short_des" name="short_des" placeholder="Short Description" value={values.short_des} onChange={handleChange} onBlur={handleBlur}></textarea>
       </div>

       <div class="col-md-12 form-group">
       <CKEditor name="product_specification" id="product_specification" onChange={handleOnchange} editor={ClassicEditor} data={values.product_specification}/>
       </div>
       { loading==="load"&&
        <img src={config.get('loadingImage')} className={classes.imageCss} alt="Loading.."/>
       }
       <button className="btn btn-primary btn-user btn-block" type="submit"> Update Profile</button>
      </form>
    )
}}
</Formik>
)
}
export default connect(mapStateToProps)(Profile);
