import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
    return ( 
        <div className="d-flex justify-content-center mt-4">
            <img className="img-fluid" src={logo}  alt="rick and morty"/>
        </div>
     );
}
 
export default Header;