import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

export default function LogOut() {
  //log out user
  signOut(auth);

  //redirect to home after logout
  const navi = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navi('/');
    }, 2500);
  }, []);
  return (
    <div className="d-flex justify-content-center allign-items-center">
      <h1> See ya! </h1>
    </div>
  );
}
