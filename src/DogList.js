import React, { Component } from 'react';
import './DogList.css'
import {Link} from 'react-router-dom'

class DogList extends Component{
    render() {
        return (
            <div className="DogList">
                <h1 className="display-3 my-4 text-center">Dog List!</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map(d=>(
                            <div key={d.name} className="Dog col-lg-4  text-center">
                                <img alt={d.name} src={d.src}/>
                                <Link className="underline" to={`/dogs/${d.name}`}>
                                    <h3>{d.name}</h3>
                                </Link>
                            </div> 
                        ))}
                         
                    </div>
                </div>
            </div>
        );
    }
}

export default DogList;