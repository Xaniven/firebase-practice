import "./navBar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import img1 from "../img/116.PNG";

export default function NavBar() {
  const [user] = useAuthState(auth);
  const cu = auth.currentUser;
  return (
    <>
      <div className='imgWrap'>
        <img id='topImg' src={img1} />
      </div>
      <div className='navWrap mb-4'>
        <Navbar id='navMain' bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='/'>Re:Natured CBD</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='logWrap me-auto'>
                <Nav.Link as={Link} to=''>
                  Home
                </Nav.Link>
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link as={Link} to='/Products'>
                  Products
                </Nav.Link>
              </Nav>
              <Nav>
                <div className='logSec justify-content-center'>
                  <Nav.Link as={Link} to={user == null ? "/Login" : "/Account"}>
                    {cu == null ? "Log-in" : "Account"}
                  </Nav.Link>
                  <Nav.Link as={Link} to={user != null ? "/LogOut" : "/newUser"}>
                    {cu == null ? "Create Account" : "Log-out"}
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
