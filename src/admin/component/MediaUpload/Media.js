import React,{useState} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import config from 'react-global-configuration';
import '../../../config/admin';

const token = localStorage.getItem('account')?JSON.parse(localStorage.getItem('account')).token:'';
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';
const mapStateToProps = state =>{
  const user = state.agent;
  return{
   picture:user.picture
  }
}
const  Media =props=>{
  const [percent, setPercent] = useState(0);
  const [imageUrl, setImageUrl] = useState(props.picture?config.get(''+env+'.imagePath')+props.picture:null);
  const onChange = files =>{
    setPercent(0);
    setImageUrl(null);
    let data = new FormData();
    data.append('myImage',files[0]);
    const option = {
      onUploadProgress :(progressEvent)=>{
        const {loaded,total} = progressEvent;
        let percentage = Math.floor((loaded*100)/total);
        setPercent(percentage);
      },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization':'Bearer '+token+''
      }
    }
    axios.post(config.get(''+env+'.serverUrl')+'api/agent/media-upload',data,option).then(res=>{
      const {data,status} = res;
      if(status===200){
        setImageUrl(config.get(''+env+'.imagePath')+data.path);
      }
     })
  }
  const classes = [];
  classes.push('progress-bar');
  let per = parseInt(percent);
  if(per<=30){
    classes.push('bg-warning');
  }
  else if(per>30&&per<=70){
    classes.push('bg-info');
  }
  else if(per>99){
    classes.push('bg-success')
  }
   return(
     <Dropzone onDrop={onChange}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p><i class="fa fa-upload fa-2x" aria-hidden="true"></i></p>
              <p>Drag 'n' drop some files here, or click to select files</p>

            </div>
            {imageUrl===null&&
                <div className={classes.join(" ")} style={{'width':percent+'%'}} >{percent}% complete</div>
            }
            {imageUrl!==null&&
             <img src={imageUrl} alt="UserProfile" style={{"width":"400px"}}/>

            }
          </section>
        )}
      </Dropzone>
   );
}
export default connect(mapStateToProps)(Media);
