import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
                                
  return (
    <div className='d-flex justify-content-between align-items-center p-3 bg-primary '>
       <h1 className='text-white'>LOGO</h1>
       <span className='fs-5'><Link to={"/login"} className='nav-link text-white'>Login</Link></span>
    </div>
  )
}

export default Header