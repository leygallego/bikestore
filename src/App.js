import './App.css';
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import Categorias from './pages/Categorias';
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';
import Category from './pages/Category';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/marcas" element={<Bikes />} />
    <Route path="/categorias" element={<Categorias />} />
    <Route path="/categorias/:id" element={<Category />} />
    <Route path="*" element={<NotFound />} />




    </Routes>

     {/* <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />}>
           <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> 
        </Route>
      </Route>
    </Routes>  */}
  </BrowserRouter>
  
  )
}

export default App;
