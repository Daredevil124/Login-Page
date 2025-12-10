import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Card, Row, Col } from 'react-bootstrap';
import styles from './Welcome.module.css'
const Welcome=()=>{
    return(
       <div className={styles.outerContainer}>
            <Card className={`p-5 text-center ${styles.box}`}>
                <Card.Body>
                   
                    
                    <h1 className={styles.title}>Welcome to NexusHub</h1>
                   
                    
                  
                    <div className="mx-auto my-4" style={{ height: '4px', width: '50px', background: '#8c52ff', borderRadius: '2px' }}></div>

                    <p className={styles.subtitle}>
                        Join thousands of users who trust us. Create your 
                        account today and unlock a world of possibilities.
                    </p>

                   
                    <div className="d-flex justify-content-center gap-3 mb-2">
                        <Button className={`${styles.btnPill} ${styles.purpleBtn}`}>
                            Get Started
                        </Button>
                        <Button className={`${styles.btnPill} ${styles.darkBtn}`}>
                            Sign In
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Welcome;