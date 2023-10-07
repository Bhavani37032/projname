import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/Login';
import Sidebar from './components/navbar'
import ForgotPassword from './components/ForgotPassword';
import OtpAuth from './components/otpAuth';
import PhoneSignUp from './components/PhoneSignUp';

function App() {
  return <Routes>
    <Route path='/' element={<SignUp />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/login' element={<SignIn />} />
    <Route path='/resetpassword' element={<ForgotPassword />} />
    <Route path='/otp' element={<OtpAuth />} />
    <Route path='/phonelogin' element={<PhoneSignUp />} />
  </Routes>
}

export default App;
