import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/Login';
import Sidebar from './components/navbar'
import ForgotPassword from './components/ForgotPassword';

function App() {
  return <Routes>
    <Route path='/' element={<SignUp />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/signin' element={<SignIn />} />
    <Route path='/resetpassword' element={<ForgotPassword />} />
  </Routes>
}

export default App;
