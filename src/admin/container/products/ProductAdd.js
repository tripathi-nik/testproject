import React,{Fragment} from 'react';
import {useDispatch} from 'react-redux';
import Redirection from '../../../config/header';
import '../../../config/admin';
import {fetchProduct} from '../../../action/productManagement';
import ProductContainer from './ProductContainer';

const Adiminstrator = props=>{
  const dispatch = useDispatch();
  const url = props.match.params.slug;
  let data = null;
  dispatch({type:'reset_product',payload:'reset'});
  return(
    <Fragment>
       <Redirection path={data}/>
       <ProductContainer />
    </Fragment>
  )
}
export default Adiminstrator;
