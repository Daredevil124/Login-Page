import React from 'react';
import styles from './Navbar.module.css';
import {useNavigate} from 'react-router-dom';

const Navbar=()=>{
    const navigate =useNavigate(); // hook to programmatically navigate between routes

    // Simple top navigation bar used across the app. Brand text navigates home,
    // buttons navigate to login and sign-up pages.
    return(
        <div>
      <nav className={`${styles.navbar} d-flex align-items-center`}>
      {/* clickable to go to home */}
      <h1 onClick={()=>navigate('/')} style={{"textAlign":"left","color":"white","cursor":"pointer"}}>NexusHub</h1>

      {/* Right side actions: Sign In and Get Started */}
      <div className="ms-auto d-flex gap-2">
      <button className={styles.signin} onClick={()=>navigate('/login')}>Sign In</button>
      <button className={styles.signup} onClick={()=>navigate('/sign-up')}>Get Started</button>
      </div>
      </nav>
        </div>
    )
}
export default Navbar;