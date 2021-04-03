import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDisplay from './WeatherDisplay';
import Loading from './Loading';

class App extends React.Component{
  state={lat:null,lon:null,errorMessage:''};

  // constructor(props){
  //   super(props);
  //   this.state={lat:null,lon:null,errorMessage:''};
  // }
  render(){
    if(this.state.lat && this.state.lon && !this.state.errorMessage ){
      return <WeatherDisplay lat={this.state.lat} lon={this.state.lon} />
    }

    if(!this.state.lat && !this.state.lon && this.state.errorMessage){
      return(
        <div>
        Error:{this.state.errorMessage}
        </div>
      );
    }

    return <Loading message="Please Allow location...."/>


  }


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position =>this.setState({lat:position.coords.latitude, lon:position.coords.longitude}),
      error =>this.setState({errorMessage:error.message})
    );
  }

  componentDidUpdate(){
    console.log("rerender");
  }


};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)



// return (
//   <div>Latitude:{this.state.lat}
//   <br/>
//   Longitute:{this.state.lon}
//   <hr/>
//   Error:{this.state.errorMessage}
//   </div>
// );
