import React, { useState,Fragment } from 'react';
import {useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
const Example = props => {
   const [showA, setShowA] = useState(props.state==='true'?true:false);
   const toggleShowA = () => setShowA(!showA);
   const dispatch = useDispatch();
   let classer = ['fade','toast'];
   if(props.show==='show'&&showA===true){
      classer.push(props.show);
      setTimeout(() => {
        toggleShowA();
        dispatch({type:'toastIntent',payload:{message:null,display:false}});
      }, 3000);
   }
   const style = {backgroundColor:props.color};
   return (
   <Fragment>
   <div className={classer.join(" ")} style={style} role="alert" aria-live="assertive" aria-atomic="true">
     <div className="toast-header">
     <strong className="mr-auto">{props.message}</strong>
     <button type="button" className="close ml-2 mb-1" data-dismiss="toast" onClick={toggleShowA}>
       <span aria-hidden="true">×</span>
       <span className="sr-only">Close</span>
     </button>
    </div>
    </div>
  </Fragment>
  );
}
export default Example;
