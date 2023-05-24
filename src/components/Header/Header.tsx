import React from "react";

import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import Hero from "../Hero/Hero";
interface Props {
  cartItems: any[];
}
const Header = (props: Props) => {
  const { cartItems } = props;
  return (
    <div>
      {/* <TopNavbar cartItems={cartItems} /> */}

      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
