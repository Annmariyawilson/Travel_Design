import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'email') setEmail(value);
        else setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            const { token, role } = response.data;

            // Save token to localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            toast.success('Login successful!');
            navigate(role === 'Admin' ? '/admindashboard' : role === 'Agent' ? '/agentdashboard' : '/userdashboard');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Login failed. Please try again.');
        }
    };

    return (
        <section style={{ backgroundColor: '#f1f3f5', padding: '5rem 0' }}>
            <Container>
                <ToastContainer />
                <Row className="justify-content-center">
                    <Col lg="5" sm="8">
                        <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '2rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h2 className="text-center" style={{ color: '#495057', fontWeight: '600', marginBottom: '2rem' }}>Sign In</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required value={email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" required value={password} onChange={handleChange} />
                                </Form.Group>
                                <Button type="submit" style={{ width: '100%', backgroundColor: '#007bff', border: 'none' }}>Log In</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Login;
