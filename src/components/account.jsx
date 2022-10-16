import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import "./account.scss";

// Account pages
export default function Account() {
  const [user, setuser] = useAuthState(auth);

  if (user != null)
    return (
      <div className='accountWrap container-fluid'>
        <h1>Welcome User: {user.uid}</h1>
        <p>Email: {user.email}</p>
      </div>
    );
  if (user == null)
    return (
      <>
        <h1>No User Logged-</h1>
      </>
    );
}
