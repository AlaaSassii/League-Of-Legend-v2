import React from 'react'
import Navbar from './components/Navbar';
import './App.css'
import {Route , Routes , BrowserRouter as Router} from 'react-router-dom'
import Landing from './routes/Landing';
import SignUp from './routes/SignUp';
import Home from './routes/Home';
import PostInfo from './components/PostInfo';
import Accout from './routes/Accout';
import Champions from './routes/Champions';
import ChampionInfo from './routes/ChampionInfo';
import MatchHistory from './routes/MatchHistory';
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Landing/>} /> 
        <Route path='/Signup' element={<SignUp/>} /> 
        <Route path='/Home/:id' element={<Home/>} /> 
        <Route path='/Home/:id/:postId' element={<PostInfo/>} />
        <Route path='/Account/:id' element={<Accout/>} />
        <Route path='/Champions' element={<Champions/>} />
        <Route path='/Champions/:id' element={<ChampionInfo/>} />
        <Route path="/Matchhistroy"  element={<MatchHistory/>} />
      </Routes>
    </Router>
  );
}

export default App;
