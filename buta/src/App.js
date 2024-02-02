import './App.css';
import SignIn from './components/signIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/signUp/SignUp';
import ResetPassword from './components/resetPassword/ResetPassword';
import Homepage from './pages/public/home/Homepage';
import Profile from './components/profile/Profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Routes>
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/home' element={<Homepage />}></Route>
            <Route path='/sign_in' element={<SignIn />}></Route>
            <Route path='/sign_up' element={<SignUp />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/reset_Password' element={<ResetPassword />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
