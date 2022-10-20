import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './account.scss';
import { auth } from './firebase';

// Account pages
export default function Account() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  if (!user) {
    navigate('/Login');
  }
  return (
    <div className="accountWrap container-fluid">
      <h1>Welcome User: {user?.uid}</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
}
