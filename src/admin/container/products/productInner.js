import React,{Fragment,useEffect,useState} from 'react';
import config from 'react-global-configuration';
import '../../../config/admin';

//import {useDispatch} from 'react-redux';
import ProductEdit from '../../component/product/ProductEdit';
import Media from '../../component/MediaUpload/ProductImage';
const Filled = props =>{
  const {url} = props;
  const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';
  const [picture,productPicture]=useState(null);
  const [product,setProduct]=useState(null);
  useEffect(()=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Authorization': 'Bearer '+JSON.parse(localStorage.getItem('account')).token },
        body: JSON.stringify({slug:url}),
    };
    fetch(config.get(''+env+'.serverUrl')+'api/product/detail',requestOptions)
      .then(res=>res.json())
      .then(res2=>{
          productPicture(JSON.parse(res2.picture));
          setProduct(res2);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  },[Filled]);
  return(
    <Fragment>
      <div className="row" style={{"marginBottom":"20px"}}>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="card shadow mb-6">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Product Gallery</h6>
            </div>
            <div className="card-body" style={{"textAlign":"center"}}>
                {picture!==null&&<Media picture={picture}/>}
                {picture===null&&<p>Loading...</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-6">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Update Your Product</h6>
            </div>
            <div className="card-body" >
             {product!==null&&<ProductEdit property={product} />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Filled;
