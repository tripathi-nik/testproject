import config from 'react-global-configuration';
import '../config/admin';

const data = {
  loading:null,
  user_id:null,
  status:null,
  error:null,
};
const agentReducer = (state=data,action) =>{
  let {type,payload} = action;
   switch(type) {
     case 'reset_data':
     return{
       ...state,
       loading:null,
       status:null,
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
        const {first_name,last_name,_id} = payload;
        let items = {user_id:_id,first_name:first_name,last_name:last_name};
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
      }

      case 'change_status':
      return{
        ...state,
        status:null
      }

      default:
      return state
   }
}
export default agentReducer;
