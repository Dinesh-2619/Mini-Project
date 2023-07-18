import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Home from "./Home";
import Signup from "./pages/login/Signup";
import Login from "./pages/login/login";
import Contact from "./pages/contact";
import { Privacy } from "./privacy";
import FAQ from "./faq";
import About from "./about";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/faq" element ={<FAQ />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
