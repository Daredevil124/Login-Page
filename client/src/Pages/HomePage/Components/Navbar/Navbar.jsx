import React from 'react';
import styles from './Navbar.module.css';
import {useNavigate} from 'react-router-dom';
const Navbar=()=>{
    const navigate =useNavigate();
    return(
        <div>
      <nav className={`${styles.navbar} d-flex align-items-center`}>
      <h1 onClick={()=>navigate('/')} style={{"textAlign":"left","color":"white","cursor":"pointer"}}>NexusHub</h1>
      <div className="ms-auto d-flex gap-2">
      <button className={styles.signin} onClick={()=>navigate('/login')}>Sign In</button>
      <button className={styles.signup} onClick={()=>navigate('/sign-up')}>Get Started</button>
      </div>
      </nav>
        </div>
    )
}
export default Navbar;