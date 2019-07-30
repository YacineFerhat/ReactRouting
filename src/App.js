import React,  { Component } from 'react';
import NavBar from './NavBar'
import Routes from './Routes'

import Whisky from './images/d1.png'
import Hazel from './images/d2.png'
import Tobi from './images/d3.png'
import './App.css';

class App extends Component{
  static defaultProps ={
    dogs :
     [
       {
       name : "Whisky",
       age : 5,
       src : Whisky,
       facts :
         [
           "Whisky loves eating Popcorn",
           "Whisky is a terrible guard dog",
           "Whisky wants to cuddle with you"
         ]
       },
  
       {
       name : "Hazel",
       age : 7,
       src : Hazel,
       facts :
         [
           "Hazel has so muuuch energy ",
           "Hazel is highly intelligent",
           "Hazel loves people more than dogs"
         ]
       },
  
       {
       name : "Tobi",
       age : 4,
       src : Tobi,
       facts :
         [
           "Tobi is not the brightest dog",
           "Tobi does not like wlaks or exercice",
           "Tobi loves eating food"
         ]
       }
    ]
  }
  render() {
   
    
    return (
      <div>
        <NavBar dogs ={this.props.dogs}/>
        <Routes dogs ={this.props.dogs} />
      </div>
        );
  }
}

export default App;
