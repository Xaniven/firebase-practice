import "./App.scss";
import CreateAccount from "./components/createAcc";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import LogOut from "./components/logOut";
import Account from "./components/account";
import { auth } from "./components/firebase";
import Products from "./pages/products";
import Hero from "./pages/hero";
import Footer from "./components/footer";

//TODO Hero, about
const user = auth.currentUser;
function App() {
  return (
    <div className='App' fluid>
      <NavBar />
      <Routes>
        <Route path='' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newuser' element={<CreateAccount />} />
        <Route path='/LogOut' element={<LogOut />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/* <Items title='Hello world' prodDescrip=' blah ' price='19.99' /> */
