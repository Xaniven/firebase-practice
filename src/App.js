import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Account from './components/account';
import CreateAccount from './components/createAcc';
import Login from './components/login';
import LogOut from './components/logOut';
import NavBar from './components/navBar';

function App() {
  // const user = auth.currentUser;
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/newuser" element={<CreateAccount />} />
          <Route path="/LogOut" element={<LogOut />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
