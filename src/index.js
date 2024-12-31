import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signinpage from './landing_page/signin/Signinpage';
import Productpage from './landing_page/products/Productpage';
import Pricingpage from './landing_page/pricing/Pricingpage';
import Aboutpage from './landing_page/about/Aboutpage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Supportpage from './landing_page/support/Supportpage';
import Login from './landing_page/login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/Signup" element={<Signinpage/>}></Route>
  <Route path="/Products" element={<Productpage/>}></Route>
  <Route path="/Pricing" element={<Pricingpage/>}></Route>
  <Route path="/About" element={<Aboutpage/>}></Route>
  <Route path="/Support" element={<Supportpage/>}></Route>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>

)





 