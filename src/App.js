import './App.css';
import Navbar from './Components/Routes/Navbar';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services';
import Product from './Components/Pages/Product';
import Signup from './Components/Pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
       <Routes>
         <Route path='/'element= {<Home />}/>
         <Route path='/services'element= {<Services />}/>
         <Route path='/products'element= {<Product/>}/>
         <Route path='/sign-up'element= {<Signup />}/>
       </Routes>
         
      </Router>
      
    </>
  );
}

export default App;
