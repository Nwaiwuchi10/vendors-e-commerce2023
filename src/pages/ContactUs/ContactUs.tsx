import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
interface Props {
  cartItems?: any;
}
const ContactUs = ({ cartItems }: Props) => {
  return (
    <div>
      <Header cartItems={cartItems} />
      <Container>
        <div className="text-center mt-3 mb-4 ">
          <h3>Contact Us </h3>
          <div>
            For Enquiries and Information, please kindly mail
            <strong style={{ color: "#e94560" }}> djnchrys@gmail.com</strong> or
            Call us with this Phone number{" "}
            <strong style={{ color: "#e94560" }}>08136757488</strong>
          </div>
          <div>
            Note* that our support team is always there to atend to your
            request.
          </div>
          <div>
            *Your Patronage and event satisfaction is always our concern*.
          </div>
          <p className="mb-5">Thanks</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
