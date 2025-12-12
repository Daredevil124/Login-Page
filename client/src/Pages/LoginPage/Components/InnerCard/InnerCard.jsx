import React, {useState} from 'react';
import styles from './innerCard.module.css';
import { Card, Form, Button,Alert } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
const innerCard=()=>{
    const navigate=useNavigate();
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [success, setSuccess]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!(localStorage.getItem(email))){
            setError("Email does not exists!");
            return;
        }
        if(JSON.parse(localStorage.getItem(email)).password!=password){
            setError("Username and Password does not match!");
            return;
        }
        setError('');
        setSuccess("Login Successful!");
        localStorage.setItem('currentUser',email);
        setTimeout(()=>navigate('/profile'),2500);
    }
    return(
        <div className={styles.outerContainer}>
            <Card className={`p-4 ${styles.loginCard}`}>
                <Card.Body>
{error && (
                        <Alert variant="danger" className="text-center p-2">
                            {error}
                        </Alert>
                    )}

                    {success && (
                        <Alert variant="success" className="text-center p-2">
                            {success}
                        </Alert>
                    )}
                    <div className="text-center mb-4">
                        <h1 className={styles.brandTitle}>NexusHub</h1>
                        <p className={styles.subText}>Sign in to continue your journey</p>
                    </div>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={`{styles.label} text-start d-block`}>Email Address</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="you@example.com" 
                                className={styles.customInput}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={`{styles.label} text-start d-block`}>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="........" 
                                className={styles.customInput}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className={styles.purpleBtn}>
                            Sign In
                        </Button>
                        <div className="text-center mt-3">
                        <small style={{ color: '#888' }}>
                            Don't have an account? <Link to="/sign-up" className={styles.signInLink}>Sign Up</Link>
                        </small>
                    </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
export default innerCard;