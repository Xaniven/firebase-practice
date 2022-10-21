import "./App.scss";
import CreateAccount from "./components/createAcc";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import LogOut from "./components/logOut";
import Account from "./components/account";

import { auth } from "./components/firebase";

const user = auth.currentUser;
function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/newuser' element={<CreateAccount />} />
          <Route path='/LogOut' element={<LogOut />} />
          <Route path='/Account' element={<Account />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
