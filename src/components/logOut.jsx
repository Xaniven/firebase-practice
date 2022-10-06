import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function LogOut() {
  signOut(auth);
  return (
    <div className='d-flex justify-content-center allign-items-center'>
      <h1> See ya</h1>
    </div>
  );
}
