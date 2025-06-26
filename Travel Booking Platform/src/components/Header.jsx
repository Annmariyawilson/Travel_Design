import React, { useState } from 'react';
import { Container, Row, Button, Collapse } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const nav_links = [
        { path: '/home', display: 'Home' },
        { path: '/about', display: 'About' },
        { path: '/tours', display: 'Tours' },
    ];

    return (
        <header className='header' style={{ padding: '20px 0', backgroundColor: '#f8f9fa' }}>
            <Container>
                <Row>
                    <div className='nav_wrapper d-flex align-items-center justify-content-between'>

                        <div className="logo d-flex align-items-center" style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>
                            <i className="fa-solid fa-person-walking-luggage fa-2xl" aria-hidden="true" />
                            <span className="ms-2 brand" style={{ marginLeft: '10px' }}>TravelSite</span>
                        </div>

                        <Button 
                            className='d-lg-none'
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-controls="responsive-navbar"
                            aria-expanded={menuOpen}
                            style={{ background: 'none', border: 'none', fontSize: '1.5rem', color: 'black' }}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </Button>

                        <nav className={`navigation ${menuOpen ? 'd-block' : 'd-none d-lg-flex'} align-items-center`}>
                            <ul className="menu d-flex flex-column flex-lg-row align-items-center gap-4">
                                {nav_links.map((item) => (
                                    <li className='nav_item' key={item.path} style={{ listStyleType: 'none' }}>
                                        <NavLink
                                            to={item.path}
                                            style={({ isActive }) => ({
                                                textDecoration: 'none',
                                                color: isActive ? '#007bff' : '#000',
                                                fontWeight: isActive ? 'bold' : 'normal',
                                                padding: '8px 12px',
                                                borderRadius: '5px',
                                                transition: 'color 0.3s ease',
                                            })}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className='nav_right d-none d-lg-flex align-items-center gap-3'>
                            <Button className='btn btn-success' style={{ fontSize: '14px', fontWeight: 'bold', padding: '8px 16px' }}>
                                <Link to='/login' style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
                            </Button>
                            <Button className='btn btn-primary' style={{ fontSize: '14px', fontWeight: 'bold', padding: '8px 16px' }}>
                                <Link to='/register' style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
                            </Button>
                        </div>
                    </div>
                    <Collapse in={menuOpen} className="w-100">
                        <div id="responsive-navbar" className="d-lg-none mt-2">
                            <div className='d-flex flex-column align-items-center gap-2'>
                                <Button className='btn btn-success' style={{ fontSize: '14px', fontWeight: 'bold', padding: '8px 16px' }}>
                                    <Link to='/login' style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
                                </Button>
                                <Button className='btn btn-primary' style={{ fontSize: '14px', fontWeight: 'bold', padding: '8px 16px' }}>
                                    <Link to='/register' style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
                                </Button>
                            </div>
                        </div>
                    </Collapse>
                </Row>
            </Container>
        </header>
        
    );
}

export default Header;
