import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'

class NavBar extends Component{
    render() {

        const dogLinks = this.props.dogs.map(dog=>(
            <li className="nav-link" key={dog.name}>
                <NavLink exact  to={`/dogs/${dog.name}`} className='nav-link'>
                    {dog.name}
                </NavLink>  
           </li>
        ))
    
        return (
            <nav className="navbar narbar-dark bg-dark narbar-expand-lg">
                <Link exact to='/dogs' className="navbar-brand">
                    Dog App 
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button"
                    data-toggle="collapse"
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <NavLink exact to='/dogs' className='nav-link'>
                                Home
                            </NavLink>
                        </li>
                        {dogLinks}

                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;