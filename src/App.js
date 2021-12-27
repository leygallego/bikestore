import './App.css';
import { useState } from 'react';
// import { render } from "react-dom";

import Home from './pages/Home';
import Login from './components/Login';
import firebaseApp from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp)

function App() {

  const [usuarioGlobal, setUsuarioGlobal ] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase) {
    setUsuarioGlobal(usuarioFirebase)
  } else {
    setUsuarioGlobal(null)
  }

} )

  return <>
      {
       usuarioGlobal ? <Home /> : <Login /> 
      }
  
  </>

  
  
}

export default App;
