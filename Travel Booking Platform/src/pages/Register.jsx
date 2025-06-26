import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import commonApi from '../services/commonApi';
import allApi from '../services/allApi';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'username') setUsername(value);
        else if (id === 'email') setEmail(value);
        else if (id === 'password') setPassword(value);
        else if (id === 'confirmPassword') setConfirmPassword(value);
        else if (id === 'role') setRole(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        try {
            const response = await commonApi.post(allApi.register, { username, email, password, role });
            toast.success(response.data.message || "Registered successfully!");
        } catch (error) {
            toast.error(error.response?.data?.error || "Registration failed! Please try again.");
        }
    };

    return (
        <section style={{ backgroundColor: '#f1f3f5', padding: '5rem 0' }}>
            <Container>
                <ToastContainer />
                <Row className="justify-content-center">
                    <Col lg="5" sm="8">
                        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '2rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h2 className="text-center" style={{ color: '#495057', fontWeight: '600', marginBottom: '2rem' }}>Create an Account</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your username" required value={username} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required value={email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" required value={password} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm your password" required value={confirmPassword} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="role">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select value={role} onChange={handleChange}>
                                        <option value="user">User</option>
                                        <option value="agent">Agent</option>
                                        <option value="admin">Admin</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button type="submit" style={{ width: '100%', backgroundColor: '#007bff', border: 'none' }}>Register</Button>
                            </Form>
                            <div className="text-center mt-3">
                                <p>Already have an account? <Link to="/login">Log In</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Register;
