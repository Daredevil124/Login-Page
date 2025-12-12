import React,{useState, useEffect} from 'react';
import styles from './ProfilePage.module.css';
import {useNavigate} from 'react-router-dom';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// Profile page component: loads current user from localStorage and allows editing.
const profile=()=>{
    const navigate = useNavigate();
    const [user, setUser] = useState(null); 
    const [isEditing, setIsEditing] = useState(false); 
    const [successMsg, setSuccessMsg] = useState('');
    const [error,setError]=useState('');
    const [username,setUsername]=useState('');

    // On mount, ensure a user is logged in. If not, redirect to login.
    useEffect(()=>{
        const currentUser=localStorage.getItem('currentUser');
        if(!currentUser){
            navigate('/login');
            return;
        }
        const Data=localStorage.getItem(currentUser);
        if(Data){
        setUser(JSON.parse(Data));
        setUsername(JSON.parse(Data).username);
    }
    },[navigate]);

    // Generic input change handler for editing fields
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Save handler: writes updated user to localStorage.
    // Prevents overwriting another user when username is changed to an existing one.
    const handleSave=()=>{
        console.log(username,user.username);
        if(!localStorage.getItem(user.username)||user.username==username){
        localStorage.setItem(user.username,JSON.stringify(user));
        setIsEditing(false);
        setSuccessMsg("Profile updated successfully");
        setTimeout(()=>setSuccessMsg(''),3000);
        }
        else{
            // Inform about username collision
            setTimeout(()=>setError('Username already Taken'),1500);
        }
    }

    // Logout: clear currentUser key and navigate home after a short message
    const handleLogout=()=>{
        setSuccessMsg("Logout Successful!");
        localStorage.removeItem('currentUser');
        setTimeout(()=>navigate('/'),(2500));
    }

    if (!user) return null; // Avoid rendering until user is loaded

    return(
        <div className={styles.outerContainer}>
            <Card className={`p-4 ${styles.profileCard}`}>
                <Card.Body>
                    
                    <div className="text-center mb-4">
                        <div className={styles.headerIcon}>👤</div>
                        <h2 className={styles.brandTitle}>NexusHub</h2>
                        <h4 className={styles.pageTitle}>My Profile</h4>
                        <p className={styles.subText}>Manage your account information</p>
                    </div>
                    {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                    {successMsg && <Alert variant="success" className="text-center">{successMsg}</Alert>}
                    
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formFullName" className="mb-3 mb-md-0 text-start">
                                    <Form.Label className={styles.label}>Full Name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        name="fullName"
                                        value={user.fullName}
                                        onChange={handleChange}
                                        disabled={!isEditing} 
                                        className={isEditing ? styles.editableInput : styles.readOnlyInput}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formAge" className="text-start">
                                    <Form.Label className={styles.label}>Age</Form.Label>
                                    <Form.Control 
                                        type="number"
                                        name="age"
                                        value={user.age}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? styles.editableInput : styles.readOnlyInput}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formUsername" className="mb-3 mb-md-0 text-start">
                                    <Form.Label className={styles.label}>Username</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        name="username"
                                        value={user.username} 
                                        onChange={handleChange}
                                        disabled ={!isEditing}
                                        className={isEditing ? styles.editableInput: styles.readOnlyInput}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formPassword" className="text-start">
                                    <Form.Label className={styles.label}>Password</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        value={user.password}
                                        disabled 
                                        className={styles.readOnlyInput}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col>
                                <Form.Group controlId="formInterest" className="text-start">
                                    <Form.Label className={styles.label}>Interest</Form.Label>
                                    {isEditing ? (
                                        <Form.Select 
                                            name="interest"
                                            value={user.interest}
                                            onChange={handleChange}
                                            className={styles.editableInput}
                                        >
                                            <option>Frontend Development</option>
                                            <option>Backend Development</option>
                                            <option>Full Stack Development</option>
                                            <option>DevOps</option>
                                            <option>AI/ML</option>
                                        </Form.Select>
                                    ) : (
                                        <div className="d-block">
                                            <span className={styles.interestBadge}>
                                                {user.interest || "Not Selected"}
                                            </span>
                                        </div>
                                    )}
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-center gap-3">
                            {isEditing ? (
                                <Button className={styles.editBtn} onClick={handleSave}>
                                    Save Changes
                                </Button>
                            ) : (
                                <Button className={styles.editBtn} onClick={() => setIsEditing(true)}>
                                    Edit Profile
                                </Button>
                            )}
                            
                           

                             <Button variant="link" className="text-danger text-decoration-none" onClick={handleLogout}>
                                Logout
                            </Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
export default profile;
