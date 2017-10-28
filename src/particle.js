import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Particle extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
        this.state = {isOnline: false};

    };

    

    componentDidMount() {
        
        var self = this;
        axios.get("https://api.particle.io/v1/devices/2b0037000a47353137323334/location?access_token=14525cc237c2cf5f9c35f0595ec2dbe6180a5edf")
        .then(function(data){
            console.log(data.data.result);
            self.setState({data: data.data.result})
            self.setState({isOnline:true})
        })
       .catch(function (error) {
          console.log(error);
       });
          
            
        }


     
    

        
     render() {
         const  isOnline = this.state.isOnline;
         let device = null;
         if (isOnline) {
             device =  <h1> The Location is {this.state.data} the device is Online </h1>
         }
         else {
              device = <h2> the device is offline </h2> 
         }
             
      return (
        <div>
        {device}
      </div>


    );
}
}
export default Particle;