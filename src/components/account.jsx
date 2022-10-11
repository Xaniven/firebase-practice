import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function Account() {
  const [user, setuser] = useAuthState(auth);

  return (
    <div>
      <h1>{user.uid}</h1>
      <p>{user.displayName}</p>
    </div>
  );
}
