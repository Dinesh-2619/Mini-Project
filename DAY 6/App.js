import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Home from "./Home";
import Signup from "./pages/login/Signup";
import Login from "./pages/login/login";
// import FAQ from "./FAQ/FAQ";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/FAQ" element ={<FAQ />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
