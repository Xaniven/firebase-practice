import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  //log out user
  signOut(auth);

  //redirect to home after logout
  const navi = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navi("/");
    }, 800);
  }, []);
  return (
    <div className='d-flex justify-content-center allign-items-center'>
      <h1> See ya! </h1>
    </div>
  );
}
