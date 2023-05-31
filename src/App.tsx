import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

import UserProfile from "./userScreen/userProfile/UserProfile";
import VendorsRegister from "./screens/VendorRegistration/VendorsRegister";
import VendorsDetails from "./screens/Vendoscreen/VendorsDetails";
import CartScreen from "./screens/CartScreen/CartScreen";
import VendorImageClips from "./screens/VendorsAppliForm/VendorImageClips";
import EventAddress from "./screens/BookingScreen/EventAddress";
import UserRegister from "./screens/UserRegisterScreen/UserRegister";
import OrderScreen from "./screens/OrderScreen/OrderScreen";
import TopNavbar from "./components/Header/TopNavbar";
import PaymentCheckOut from "./screens/PaymentScreen/PaymentCheckOut";
import UserHomePage from "./userScreen/userDashboard/userDashBoardHome/UserHomePage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

function App() {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  const [cartItems, setCartItems] = useState([] as any);

  const handleAddToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };
  // function removeFromCart(item) {
  //   const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  //   if (index !== -1) {
  //     const newCartItems = [...cartItems];
  //     newCartItems.splice(index, 1);
  //     setCartItems(newCartItems);
  //   }
  // }
  useEffect(() => {
    if (user) {
      navigate("/userDashboard");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <TopNavbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userDashboard" element={<UserHomePage />} />
        <Route path="/productCreate" element={<UserProfile />} />
        <Route path="/vendorsUserReg" element={<VendorsRegister />} />
        <Route path="/createVendorImages" element={<VendorImageClips />} />
        <Route
          path="/vendorsDetails/:id"
          element={
            <VendorsDetails
              onAddToCarts={handleAddToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/cart" element={<CartScreen cartItems={cartItems} />} />
        <Route
          path="/register"
          element={<UserRegister step1 cartItems={cartItems} />}
        />
        <Route path="/login" element={<LoginScreen cartItems={cartItems} />} />
        <Route
          path="/booking"
          element={<EventAddress step1 step2 cartItems={cartItems} />}
        />
        <Route
          path="/order"
          element={<OrderScreen step3 cartItems={cartItems} />}
        />
        <Route path="/payment" element={<PaymentCheckOut step4 />} />
        <Route path="/vendorsclips/:id" element={<VendorImageClips />} />
      </Routes>
    </div>
  );
}

export default App;
