import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.scss";
import { Link, Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function CreateAccount() {
  // pulls e-mail & password from form
  const emailRef = useRef();
  const passRef = useRef();

  return (
    <div className='logWrap'>
      <div className='logBox p-4'>
        <Form onSubmit={() => signup(emailRef.current.value, passRef.current.value)}>
          <h2>Create Account</h2>
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
          <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Label>Re-enter Password:</Form.Label>
            <Form.Control type='password' placeholder='Password' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Agree To Terms' required />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>

          <h5 className='mt-3'>
            Already have an account? <Link to='/login'>Log-In</Link>{" "}
          </h5>
        </Form>
      </div>
    </div>
  );
}
async function signup(email, password) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      signInWithEmailAndPassword(auth, email, password).then(<Navigate to='/Account' />);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default CreateAccount;
