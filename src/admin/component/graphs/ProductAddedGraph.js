import React,{useEffect,useState} from 'react';
import CanvasJSReact from '../../../js/canvasjs.react';
import config from 'react-global-configuration';
import '../../../config/admin';
import axios from 'axios';
import classes from '../component.css';

const ProGraph = ()=>{
  let addClass = ['card-body'];
  addClass.push(classes.card_height);
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [datas,setData] = useState([{"x":0,"y":0}]);
  const token = localStorage.getItem('account')?JSON.parse(localStorage.getItem('account')).token:'';
  const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production';
  let source = axios.CancelToken.source();
  useEffect(()=>{
    const option = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization':'Bearer '+token+''
      }
    }
    axios.post(config.get(''+env+'.serverUrl')+'api/graph/product-addgraph','',option).then(res=>{
      const {data,status} = res;
      if(status===200){
        setData(data);
      }
     })
     return()=>{
       setData([{"x":0,"y":0}]);
       if (source) {
            console.log('source in cleanup exists')
        } else {
            source.log('source in cleanup DOES NOT exist')
        }
        source.cancel('Cancelling in cleanup')
     }
  },['ProGraph']);

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title:{
      text: "Monthly Product Addition Report"
    },
    axisY: {
      title: "Number Of Product Added",
      includeZero: false,
      suffix: ""
    },
    axisX: {
      title: "Dates Of The Month",
      prefix: "",
      interval: 3
    },
    data: [{
      type: "line",
      toolTipContent: "Date {x}: {y}",
      dataPoints: datas
    }]
  }
  return(
    <div className="row">
       <div className="col-xl-11 col-md-11 col-lg-11" style={{"marginLeft":"10px"}}>
         <div className="card shadow mb-4">
           <div className={addClass.join(" ")}>
             <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
               <div
                style={{
                  width: '100%',
                  height: '100%'
                }}
              >
              <CanvasJSChart options = {options} />
              </div>
             </div>
           </div>
         </div>
       </div>
   </div>
  );
}
export default ProGraph;
