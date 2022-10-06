import "./navBar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function NavBar() {
  const [user] = useAuthState(auth);
  const cu = auth.currentUser;
  return (
    <>
      <div className='navWrap mb-4'>
        <Navbar id='navMain' bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='/'>SpotBloc</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='logWrap me-auto'>
                <Nav.Link as={Link} to='/login'>
                  Home
                </Nav.Link>
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href='#link'>Mint</Nav.Link>
              </Nav>
              <Nav>
                <div className='logSec justify-content-center'>
                  <Nav.Link as={Link} to='/login'>
                    {cu == null ? "Log-in" : ""}
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
export default NavBar;
