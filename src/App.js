
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
 <Navbar/>
 <Routes>
  <Route path='home' element={<Home/>}/>
  <Route path='portfolio' element={<Portfolio/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={ <Contact/>}/>
 </Routes>
 <Footer/>
    </div>
  );
}

export default App;
