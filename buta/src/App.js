import './App.css';
import SignIn from './components/signIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<SignIn />}></Route>
          <Route path='/sign_in' element={<SignIn />}></Route>
          <Route path='/sign_up' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
