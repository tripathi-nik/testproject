import config from 'react-global-configuration';
import '../config/admin';

const data = {
  loading:null,
  product: [],
  productID:null,
  picture:"[]",
  products:[],
  loadProduct:null,
  loadImage:0,
  currentImageID:null,
  currentImageURL:null,
  doingEdit:null,
  rollbackURL:null,
  toastMessage:null,
  enableToast:false
};
const productReducer = (state=data,action) =>{
  let {type,payload} = action;
   switch(type) {

     case 'product_management':
     return{
       ...state,
       loading:null,
       product:payload?payload:null,
       productID:payload?payload._id:null,
     }

     case 'add_loader':
     return{
      ...state,
       loading:'load',
     }

     case 'pictures':
     return{
        ...state,
        picture:payload,
        status:payload.length>0?200:null
      }
      case 'clear_picture':
      return{
         ...state,
         picture:[],
         status:null
       }

      case 'reset_status':
      return{
         ...state,
         status:null
       }

       case 'product_list':
       return{
         ...state,
         products:payload.result,
         loading:payload.status!==200?'load':null
       }

       case 'load_product':
       return{
         ...state,
         products:[]
       }

       case 'loadPoduct':
       return{
         ...state,
         loadProduct:'load',
         loading:null
       }

       case 'detailedProduct':
       return{
         ...state,
         loadProduct:null,
         product:payload,
         status:200
       }
       case 'update_pro_gallery':
       return{
         ...state,
         picture:payload,
       }

       case 'reset_product':
       return{
         loading:null,
         product: [],
         productID:null,
         picture:[],
         products:[],
         loadProduct:null
       }
       case 'image_loaded':
       return{
         ...state,
         loadImage:4,
         picture:payload
       }

       case 'image_reset':
       return{
         ...state,
         loadImage:0
       }

       case 'current_image_edit':
       return{
         ...state,
         currentImageID:payload.currentImageID,
         currentImageURL:payload.currentImageURL,
         doingEdit:payload.doingEdit,
         rollbackURL:payload.rollbackURL
       }

       case 'toastIntent':
       return{
         toastMessage:payload.message,
         enableToast:payload.display
       }

       default:
       return state
   }



}
export default productReducer;
