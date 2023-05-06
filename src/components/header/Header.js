import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import {successToast} from '../alert'

function Header() {

  let token = localStorage.getItem('newKey')
  const navigate = useNavigate()

  function logout(){
    successToast("Bye ! we miss you :(")
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
    
    <Navbar   bg="black" expand="md" collapseOnSelect  variant="dark">
      <Container>
        <Navbar.Brand onClick={()=>successToast("Welcome to AI world !!!")} >AI Generated Images</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             
          </Nav>

          <Nav >
           
            { token ?  "" :  <Nav.Link href='#' > <Link to="/" className="nav-link">Login</Link></Nav.Link> }
            { token ?  "" :  <Nav.Link  href='#'> <Link to="/register" className="nav-link">Register</Link></Nav.Link> }
            { token ?   <Nav.Link  href='#'> <Link to={`/create`} className="nav-link">Create Image</Link></Nav.Link> : "" }
            { token ?   <Nav.Link  href='#'> <Link to={`/get`} className="nav-link">Get Images</Link></Nav.Link>  :  "" }
            { token ?   <Nav.Link href='#' onClick={logout} ><Link to="/" className="nav-link">Logout</Link> </Nav.Link>  :  "" }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>

);
}

export default Header;