import React, { Component } from 'react';
import './DogList.css'

class DogList extends Component{
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">Dog List!</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map(d=>(
                            <div key={d.name} className="Dog col-lg-4  text-center">
                                <img alt={d.name} src={d.src}/>
                                <h3>{d.name}</h3>
                            </div> 
                        ))}
                         
                    </div>
                </div>
            </div>
        );
    }
}

export default DogList;