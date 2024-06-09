import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../src/Style/navbar.css"
import { BiLogIn } from "react-icons/bi"
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbarr">
      <Container>
        <Navbar.Brand href="#"><Link to="/" style={{textDecoration: "none" , color:"black"}}>ASK Couching</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
<Nav.Link><Link to="/" style={{textDecoration: "none" , color:"black"}}>Home</Link></Nav.Link>

<Nav.Link><Link to="courses" style={{textDecoration: "none" , color:"black"}}>About</Link></Nav.Link>
            <Nav.Link><Link to="morecourses" style={{textDecoration: "none" , color:"black"}}>Courses</Link></Nav.Link>
            <Nav.Link><Link to="contact" style={{textDecoration: "none" , color:"black"}}>Contact Us</Link></Nav.Link>

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
         
           <Link to="login" > <Button className="btn-1" to="login"><span className='loginicon'><BiLogIn /></span>  LOGIN</Button></Link>
            

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;