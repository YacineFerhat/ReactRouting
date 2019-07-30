import React,  { Component } from 'react';
import DogList from './DogList'
import {Switch, Route} from 'react-router-dom'
import DogDetails from './DogDetails'
import NavBar from './NavBar'


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
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase() 
      ) 
      return <DogDetails {...props} dog={currentDog}/>
    }
    
    return (
      <div>
        <NavBar dogs ={this.props.dogs}/>
        <Switch>
          <Route 
            exact 
            path='/dogs' 
            render = {()=> <DogList 
                        dogs={this.props.dogs}/> 
                      }/>
         
         <Route 
            exact 
            path='/dogs/:name' 
            render = {getDog}/>
        
        </Switch>
      </div>
        );
  }
}

export default App;
