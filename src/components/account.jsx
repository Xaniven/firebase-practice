import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import "./account.scss";
import { Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { updateProfile } from "firebase/auth";

// Account pages

export default function Account() {
  async function update(auth, userRef) {
    await updateProfile(auth.currentUser, {
      displayName: userRef.current.value,
    })
      .preventDefault.then(() => {
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  }

  const userRef = useRef();
  const [user] = useAuthState(auth);

  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });

    return (
      <div className='accountWrap container-fluid'>
        <Form>
          <Form.Group
            className=' mb-3'
            controlId='userNameChange'
            onSubmit={() => update(auth.currentUser, userRef.current.value)}
          >
            <Form.Label>
              Current Username:{" "}
              {user.displayName == null ? "No username set" : user.providerId.displayName}
            </Form.Label>
            <Form.Control ref={userRef} type='text' placeholder='Enter new username' required />
            <Form.Text className='text-muted'>Enter a new username</Form.Text>
            <Button type='submit' className='m-2'>
              Save
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
  if (user === null) return <Navigate to='/Login' />;
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
