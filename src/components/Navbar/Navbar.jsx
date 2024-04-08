import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <div className="container">
        <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#acerca" style={{ fontSize: '20px' }}>Acerca</Nav.Link>
            <Nav.Link href="#educacion" style={{ fontSize: '20px' }}>Educación</Nav.Link>
            <Nav.Link href="#skills" style={{ fontSize: '20px' }}>Skills</Nav.Link>
            <Nav.Link href="#experiencia" style={{ fontSize: '20px' }}>Experiencia</Nav.Link>
            <Nav.Link href="#proyectos" style={{ fontSize: '20px' }}>Proyectos</Nav.Link>
            <Nav.Link href="#footer" style={{ fontSize: '20px' }}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
