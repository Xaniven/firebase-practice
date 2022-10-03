import { useRef } from "react";
import { login } from "./firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  return (
    <div className='logWrap'>
      <div className='logBox p-4'>
        <Form onSubmit={() => login(emailRef.current.value, passRef.current.value)}>
          <h1>Sign-in</h1>
          <Form.Group className=' mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address:</Form.Label>
            <Form.Control ref={emailRef} type='email' placeholder='Enter email' required />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password:</Form.Label>
            <Form.Control ref={passRef} type='password' placeholder='Password' required />
          </Form.Group>
          <Button className='mt-3' variant='primary' type='submit'>
            Submit
          </Button>
          <h5 className='mt-3'>
            Don't have an account? <Link to='/newuser'>Sign-Up</Link>
          </h5>
        </Form>
      </div>
    </div>
  );
}
export default Login;
