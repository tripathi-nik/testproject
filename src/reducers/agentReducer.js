const data = {
  loading:null,
  status:null,
  message:null,
};
const agentReducer = (state=data,action) =>{
   switch(action.type) {
    case 'agent_account':
    const load = action.payload;
    console.log(load);
    /*const userID = load.userId?load.userId:null
    localStorage.setItem('userID', userID);*/
     return{
       ...state,
       status:load.status,
       message:load.message,
       loading:null,
     }
      break;
      default:
      return state;
      break;
   }
}
export default agentReducer;
