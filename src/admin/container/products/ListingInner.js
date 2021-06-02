import React,{Fragment,useEffect} from 'react';
import {useDispatch,connect} from 'react-redux';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';
import {listProducts} from '../../../action/productManagement';
import Moment from 'moment';

const mapStateToProps = (state) =>{
  const acc = state.productReducer;
  return{
    loading:acc.loading,
    products:acc.products
  }
}
const Filled = props =>{
  const {center,loading,products}=props;
  const dispatch = useDispatch();
  //dispatch({type:'load_product',payload:'load'})
  useEffect(() => {
    dispatch(listProducts());
    return()=>{
      dispatch({type:'reset_product',payload:'resetting'});
    }
  },[Filled]);
 if(products){
   products.map((key,value)=>{
     const dataSet = [];
     dataSet.push(<Link to={"/admin/products/edit/"+products[value].slug+"/"}><i className="fa fa-edit fa-x btn btn-info btn-filled" key={key}></i></Link>);
     dataSet.push( <i className="fa fa-trash fa-x btn btn-danger btn-filled"></i>);
     dataSet.push( <i className="fa  fa-history fa-x btn btn-warning btn-filled"></i>);
     products[value].edit=dataSet;
     products[value].added_on = Moment(products[value].added_on).format('DD MMM,YYYY');
     products[value].key=key;
   });
 }
  const data =products;
  const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Cost Price',
    selector: 'cost_price',
    sortable: true,
  },
  {
    name: 'Sale Price',
    selector: 'sale_price',
    sortable: true,
  },
  {
    name: 'Inventory',
    selector: 'inventory',
    sortable: true,
  },
  {
    name: 'Added On',
    selector: 'added_on',
    sortable: true,
  },
  {
    name: 'Edit',
    selector:'edit'
  },
];
  return(
    <Fragment>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-12">
            <div className="card-body" style={{"textAlign":center}}>
              <DataTable
                title="Product Listing"
                columns={columns}
                data={data}
                paginationPerPage={10}
                pagination={true}
                fixedHeader={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default connect(mapStateToProps)(Filled);
