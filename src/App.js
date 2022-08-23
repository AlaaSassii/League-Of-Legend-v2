import React from 'react'
import Navbar from './components/Navbar';
import './App.css'
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import Landing from './routes/Landing';
import SignUp from './routes/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} /> 
        <Route path='/SingUp' element={<SignUp/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
