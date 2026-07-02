import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Aboutus from './Aboutus';
import Services from './Services';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import Signup from './Signup';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>


          <Route path='/*'  element={
              <>
                <Header/>
                <div>
                  <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/aboutus' element={<Aboutus/>}/>
                  <Route path='/services' element={<Services/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/signup' element={<Signup/>}/>
                  
                </Routes>

                </div>
                <Footer/>
              
                
              </>
            }/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;