import './App.css';
import SignIn from './components/signIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/signUp/SignUp';
import ResetPassword from './components/resetPassword/ResetPassword';
import Homepage from './pages/public/home/Homepage';
import { UserProvider } from './context/UserProvider';
import Profile from './components/profile/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter >
        <UserProvider>
          <Routes>
            <Route path='/sign_in' element={<SignIn />} />
            <Route path='/sign_up' element={<SignUp />} />
            <Route path='/reset_Password' element={<ResetPassword />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/profile' element={<PrivateRoute element={<Profile />} />}/>
            <Route path='/' element={<PrivateRoute element={<Homepage />} />}/>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
