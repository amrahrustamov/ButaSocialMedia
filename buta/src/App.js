import './App.css';
import SignIn from './components/signIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/signUp/SignUp';
import ResetPassword from './components/resetPassword/ResetPassword';
import Homepage from './pages/public/home/Homepage';
// import { useContext } from 'react';
// import { UserContext } from './context/UserProvider';

function App() {
  // const userData = useContext(UserContext);
  // const userEmail = userData.user;
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          {/* localStorage.getItem('userEmail') === null  ? <Route path='*' element={<SignIn />}></Route> :  */}
          <Route path='/' element={<SignIn />}></Route>
          <Route path='/home' element={<Homepage />}></Route>
          <Route path='/sign_in' element={<SignIn />}></Route>
          <Route path='/sign_up' element={<SignUp />}></Route>
          <Route path='/reset_Password' element={<ResetPassword />}></Route>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
