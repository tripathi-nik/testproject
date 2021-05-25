import config from 'react-global-configuration';
import '../config/admin';

const data = {
  loading:null,
  user_id:null,
  status:null,
  error:null,
  userDetail:null,
  center:"none",
  profileLoading: null,
  toastMessage:null,
  enableToast:false
};
const agentReducer = (state=data,action) =>{
  let {type,payload} = action;
   switch(type) {
     case 'reset_data':
     localStorage.removeItem('accounts');
     return{
       ...state,
       loading:null,
       status:null,
       profileLoading:null,
       picture:null,
       userDetail:null

     }
      case 'agent_account':
      return{
        ...state,
        loading:null,
        user_id:payload,
        status:payload!==config.get('unique_email')?config.get('status_success'):config.get('status_failure')
      }

    case 'login_action':
      let err = null;
      let stater = null;
      if(payload.status_code){
          err = payload.error;
          stater = payload.status_code;
      }
       else{
         const {data,token} = payload;
         let items = {accounts:data,token:token};
         localStorage.setItem('account',JSON.stringify(items));
         err = null;
         stater = config.get('status_success');
       }

      return{
        ...state,
         status: stater,
         loading: null,
         error: err
      }

      case 'add_loader':
      return{
        ...state,
        loading:payload,
        status:null,
        center:"center"
      }

      case 'profile_loader':
      return{
        ...state,
        profileLoading:payload,
        center:"center"
      }

      case 'change_status':
      return{
        ...state,
        status:null
      }

      case 'userDetail':
      let profile = payload.profile_picture?payload.profile_picture:null;
      return{
        ...state,
        userDetail:payload,
        profileLoading:"loaded",
        center:null,
        picture:profile,
        loading:null
      }

      case 'reset_user':
      return{
        loading:null,
        user_id:null,
        status:null,
        error:null,
        userDetail:null,
        center:"none",
        profileLoading: null,

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
export default agentReducer;
