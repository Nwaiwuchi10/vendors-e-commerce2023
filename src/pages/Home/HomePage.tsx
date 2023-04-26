import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import VendorsCard from "../../screens/Vendoscreen/VendorsCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import VendorsScreen from "../../screens/Vendoscreen/VendorsScreen";
type Props = {
  addToCart?: () => void;
  productItem?: any;
};
const HomePage: React.FC<Props> = () => {
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
    <div>
      <Header cartItems={cartItems} />

      <div className="container">
        {" "}
        <Hero />
      </div>
      <VendorsScreen onAddToCarts={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default HomePage;
