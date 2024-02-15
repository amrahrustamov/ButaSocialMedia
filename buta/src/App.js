import './App.css';
import SignIn from './components/signIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/signUp/SignUp';
import ResetPassword from './components/resetPassword/ResetPassword';
import Homepage from './pages/public/home/Homepage';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/home' element={<Homepage />}/>
          <Route path='/sign_in' element={<SignIn />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/reset_Password' element={<ResetPassword />} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
