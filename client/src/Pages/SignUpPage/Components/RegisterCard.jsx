import React, {useState} from 'react';
import { Card, Form, Button,Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './RegisterCard.module.css';
import { useNavigate } from 'react-router-dom';
const register=()=>{
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        username: '',
        password: '',
        confirmPassword: '',
        interest: ''
    });
    const [success,setSuccess]=useState('');
    const [error,setError]=useState();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.password!=formData.confirmPassword){
            setError("Password and Confirm Password do not match!!");
            return;
        }
        if(localStorage.getItem(formData.username)){
            setError("Username already Exists!");
            return;
        }
        localStorage.setItem(formData.username,JSON.stringify(formData));
        setSuccess("Registration Successful!");
        setTimeout(()=>navigate('/login'),(2500));
        
    };
    return(
        <div className={styles.outerContainer}>
            <Card className={`p-4 ${styles.registerCard}`}>
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
                       
                        <h2 className={styles.brandTitle}>NexusHub</h2>
                        <h4 className={styles.pageTitle}>Create Account</h4>
                        <p className={styles.subText}>Join our community of developers</p>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3 text-start" controlId="formFullName">
                            <Form.Label className={styles.label}>Full Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="fullName"
                                placeholder="John Doe" 
                                className={styles.customInput}
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start" controlId="formAge">
                            <Form.Label className={styles.label}>Age</Form.Label>
                            <Form.Control 
                                type="number"
                                name="age"
                                placeholder="25" 
                                className={styles.customInput}
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start" controlId="formUsername">
                            <Form.Label className={styles.label}>Username</Form.Label>
                            <Form.Control 
                                type="text"
                                name="username"
                                placeholder="johndoe123" 
                                className={styles.customInput}
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start" controlId="formPassword">
                            <Form.Label className={styles.label}>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                placeholder="........" 
                                className={styles.customInput}
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <Form.Text className="text-muted" style={{ fontSize: '0.8rem' }}>
                                Minimum 8 characters
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 text-start" controlId="formConfirmPassword">
                            <Form.Label className={styles.label}>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="confirmPassword"
                                placeholder="........" 
                                className={styles.customInput}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4 text-start" controlId="formInterest">
                            <Form.Label className={styles.label}>Interest</Form.Label>
                            <Form.Select 
                                name="interest"
                                className={styles.customInput}
                                value={formData.interest}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select your interest</option>
                                <option value="Frontend Development">Frontend Development</option>
                                <option value="Backend Development">Backend Development</option>
                                <option value="Full Stack Development">Full Stack Development</option>
                                <option value="DevOps">DevOps</option>
                                <option value="AI / Machine Learning">AI / Machine Learning</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" className={styles.purpleBtn}>
                            Create Account
                        </Button>

                    </Form>

                    <div className="text-center mt-3">
                        <small style={{ color: '#888' }}>
                            Already have an account? <Link to="/login" className={styles.signInLink}>Sign in</Link>
                        </small>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}
export default register;