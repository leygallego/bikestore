import React from 'react';
import firebaseApp from '../credenciales';
import { getAuth, signOut } from 'firebase/auth'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import Bikes from './Bikes';
  import Categorias from './Categorias';
  import NotFound from './NotFound'
  import Navbar from '../components/Navbar';
  import Category from './Category';
import LandingPage from './LandingPage';

// import { Link } from 'react-router-dom';

const auth = getAuth(firebaseApp);

function Home() {
    return (
   <>

   <BrowserRouter>
       <Navbar />
     <Routes>
     <Route path="/" element={ <LandingPage /> } />
     <Route path="/marcas" element={<Bikes />} />
    <Route path="/categorias" element={<Categorias />} />
     <Route path="/categorias/:id" element={<Category />} />
     <Route path="*" element={<NotFound />} />




     </Routes>

     
   </BrowserRouter>
        <div>

        <input type="button"
        value="Cerrar Sesión"
        onClick={()=>{signOut(auth)}}
        />
        {/* <Link to={'/marcas'}>Motocicletas</Link> */}
        </div>
       </> 
    )
}

export default Home
