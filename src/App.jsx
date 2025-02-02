import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Home from './pages/Home';
import Captainhome from './pages/captain-home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/captain-home' element={<Captainhome/>}/>
      </Routes>
    </div>
  )
}

export default App; 