import React, { useRef } from "react";
import "./account.scss";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { updateProfile, getAuth } from "firebase/auth";

// Account pages

export default function Account() {
  const navigate = useNavigate();
  const userRef = useRef();
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    return (
      <div className='accountWrap container-fluid'>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateProfile(user, {
              displayName: userRef.current.value,
            }).then(() => {
              alert("Username Changed");
            });
          }}
        >
          <Form.Group className='m-3' controlId='userNameChange'>
            <Form.Label>
              Current Username: {user.displayName == null ? "No username set" : user.displayName}
            </Form.Label>
            <Form.Control ref={userRef} type='text' placeholder='Enter new username' />
            <Form.Text className='text-muted'>Enter a new username</Form.Text>
            <Button type='submit' className='m-2'>
              Save
            </Button>
          </Form.Group>
        </Form>
        <h2>
          Email: {user.email} {user.emailVerified === null ? "verifed" : "email not verifed"}
        </h2>
      </div>
    );
  }
  if (user === null) return navigate("/Login");
}

// if (user != null)
// return (
//   <div className='accountWrap container-fluid'>
//     <h1>Welcome User: {user.uid}</h1>
//     <p>Email: {user.email}</p>
//   </div>
// );
// if (user == null) return <Navigate to='/Login' />;
// }
