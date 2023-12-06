import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import Checkout from "./pages/checkout";
import ThankYou from "./pages/thankyou";

function App() {
  return (
    <Router>
      <NavBar cartTotalItems="10"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
