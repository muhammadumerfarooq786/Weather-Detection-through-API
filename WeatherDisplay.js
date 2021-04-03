import React from 'react';


const weatherConfig={
  Summer:{
    text:"Hot Day",
    iconName:"sun"
  },
  Winter:{
    text:"Cold Day",
    iconName:"snowflake"
  }

};

const CurrentSeason=(lat,month)=>{
  if(month > 2 && month < 9){
    return lat>0 ? "Summer" : "Winter";
  }
  else{
    return lat>0 ? "Winter" : "Summer";
  }

}


const WeatherDisplay = (props)=>{
  const season=CurrentSeason(props.lat,new Date().getMonth());
  const {text,iconName}=weatherConfig[season];
  // const weather=season==="Summer"?"Hot Weather":"Lets move toward Nothern Areas";
  // const icons=season==="Summer"?"sun":"snowflake";

  return(
    // <i className={`{$iconName} icon`}/>
    // <i className={`{$iconName} icon`}></i>
    <div>

    <i className="massive sun icon"></i>
    <h1>{text}</h1>

    <i className="massive sun icon"></i>
    </div>
  );
}


export default WeatherDisplay;
