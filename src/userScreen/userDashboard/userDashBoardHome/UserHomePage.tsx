import React, { useState } from "react";
import UserDashBoard from "../userDashboard";
import Hero from "../../../components/Hero/Hero";
import VendorsScreen from "../../../screens/Vendoscreen/VendorsScreen";
import Footer from "../../../components/Footer/Footer";

const UserHomePage = () => {
  const [cartItems, setCartItems] = useState([] as any);
  const handleAddToCart = (productItem: any) => {
    setCartItems([...cartItems, productItem]);
    // const productExit = cartItems.find((item: any) => item.id === product.id);

    // if (productExit) {
    //   setCartItems(
    //     cartItems.map((item: any) =>
    //       item.id === product.id
    //         ? { ...productExit, qty: productExit.qty + 1 }
    //         : item
    //     )
    //   );
    // } else {
    //   setCartItems([...cartItems, { ...product, qty: 1 }]);
    //   // localStorage.setItem("vendorCart", JSON.stringify([...cartItems, item]));
    // }
  };
  return (
    <UserDashBoard>
      <Hero />

      <VendorsScreen onAddToCarts={handleAddToCart} />
      <Footer />
    </UserDashBoard>
  );
};

export default UserHomePage;
