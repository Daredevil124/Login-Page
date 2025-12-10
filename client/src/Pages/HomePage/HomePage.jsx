import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome.jsx';
import styles from './HomePage.module.css';
const home=()=>{
    return(
        <div>
        <nav className={`${styles.navbar} d-flex align-items-center`}>
      <h1 style={{"textAlign":"left","color":"white"}}>NexusHub</h1>
      <div className="ms-auto d-flex gap-2">
      <button className={styles.signin}>Sign In</button>
      <button className={styles.signup}>Get Started</button>
      </div>
      </nav>
      <Welcome/>
      </div>
    )
}
export default home;