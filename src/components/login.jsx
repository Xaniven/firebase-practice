import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './login.scss';

//Login component
export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  //function to handle log in w/ e-mail & password
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
      });
  }
  //if user state is null, render sign in box. else navigate to account page

  if (user) {
    navigate('/Account');
  }

  return (
    <div className="logWrap">
      <div className="logBox p-4">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            login(emailRef.current.value, passRef.current.value);
          }}
        >
          <h1>Sign-in</h1>
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control ref={passRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
          <h5 className="mt-3">
            Don't have an account? <Link to="/newuser">Sign-Up</Link>
          </h5>
        </Form>
      </div>
    </div>
  );
}
