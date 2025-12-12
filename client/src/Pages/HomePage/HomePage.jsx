import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome/Welcome.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
const home=()=>{
    return(
        <div>
            <Navbar/>
      <Welcome/>
      </div>
    )
}
export default home;