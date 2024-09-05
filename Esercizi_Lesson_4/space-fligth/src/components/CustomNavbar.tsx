import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
    const navigate = useNavigate();

    const goToFav = () => {
        navigate('/favorites')
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className='text-decoration-none text-light'>space facts</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/favorites" onClick={goToFav} className='text-decoration-none text-light'> favorites articles</Link>
                    </Nav>
                </Container>
            </Navbar >
        </>
    )
}

export default CustomNavbar;