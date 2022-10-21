import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import "./account.scss";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { updateProfile, getAuth } from "firebase/auth";

// Account pages
const auth = getAuth();
export default function Account() {
  const navigate = useNavigate();
  const userRef = useRef();
  const [user] = useAuthState(auth);
  if (user !== null) {
    return (
      <div className='accountWrap container-fluid'>
        <Form>
          <Form.Group
            onSubmit={(e) => {
              e.preventDefault();
              updateProfile();
            }}
            className='mb-3'
            controlId='userNameChange'
          >
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
      </div>
    );
  }
  if (user === null) return navigate("/Login");
  updateProfile(user.currentUser, {
    displayName: "bob",
    photoURL: "https://example.com/jane-q-user/profile.jpg",
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
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
