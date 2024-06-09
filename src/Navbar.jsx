import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../src/Style/navbar.css"
import { BiLogIn } from "react-icons/bi"
import {
  BrowserRouter as Router,
  Link
}
  from 'react-router-dom';
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbarr">
      <Container>
        <Navbar.Brand href="#"><Link to="/">  <img src="../src/Assests/LOGO.png" width={50} height={50} className='img-fluid' alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link></Nav.Link>

            <Nav.Link><Link to="/about" style={{ textDecoration: "none", color: "black" }}>About</Link></Nav.Link>
            <Nav.Link><Link to="morecourses" style={{ textDecoration: "none", color: "black" }}>Courses</Link></Nav.Link>
            <Nav.Link><Link to="contact" style={{ textDecoration: "none", color: "black" }}>Contact Us</Link></Nav.Link>



          </Nav>

          <Link to="login" > <Button className="btn-1" to="login"><span className='loginicon'><BiLogIn /></span>  LOGIN</Button></Link>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;