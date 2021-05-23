import React,{useEffect,useState} from 'react';
const EditForm = props =>{
  return(
    <form onSubmit={handleSubmit}>
     <div class="col-md-12 form-group">
         <input type="text" className="form-control form-control-user" id="title" name="title" placeholder="Title" value={values.title} onChange={handleChange} onBlur={handleBlur}/>
         {errors.title&&touched.title&&(
           <div>{errors.title}</div>
         )}
     </div>
     <div class="col-md-12 form-group">
         <input type="text" className="form-control form-control-user" id="slug" name="slug" placeholder="Slug" value={values.slug} onChange={handleChange} onBlur={handleBlur}/>
         {errors.slug&&touched.slug&&(
           <div>{errors.slug}</div>
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
     <button className="btn btn-primary btn-user btn-block" type="submit"> Update Profile</button>
    </form>
  )
};
export default EditForm;
