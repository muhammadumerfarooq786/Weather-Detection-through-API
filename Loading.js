import React from 'react';

const Loading=(props)=>{
  return(
    <div class="ui active dimmer">
    <div class="ui big text loader">{props.message}</div>
    </div>
  );
};


Loading.defaultProps={
  message:"Loading...."
};






export default Loading;
