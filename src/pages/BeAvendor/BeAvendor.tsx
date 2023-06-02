import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
interface Props {
  cartItems?: any;
}
const BeAvendor = ({ cartItems }: Props) => {
  return (
    <div>
      <Header cartItems={cartItems} />
      <Container>
        <div className="text-center mt-3 mb-4 ">
          <h3>Contact Us </h3>
          <div>
            For Vendor Application and Enquiries, please kindly mail
            <strong style={{ color: "#e94560" }}> djnchrys@gmail.com</strong> or
            Call us with this Phone number{" "}
            <strong style={{ color: "#e94560" }}>08136757488</strong>
          </div>
          <div>
            Note* that a physical verification will be done to you through our
            support team to ensure your business authenticity.
          </div>
          <div className="mb-5">
            After Passing this process, Vendor Application url link will be sent
            to you. Thanks{" "}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default BeAvendor;
