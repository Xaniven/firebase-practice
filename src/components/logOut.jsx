import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function LogOut() {
  signOut(auth);
  return (
    <>
      <h1> See ya</h1>
    </>
  );
}
