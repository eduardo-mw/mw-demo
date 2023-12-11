import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import ThankYou from "./pages/thankyou";

function App() {
  const [userCart, setUserCart] = useState({sessionID: "", cart: []});

  return (
    <Router>
      <NavBar/>
      <ShoppingCart userCart={userCart} setUserCart={setUserCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
