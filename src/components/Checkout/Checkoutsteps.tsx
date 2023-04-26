import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  step1?: any;
  step2?: any;
  step3?: any;
  step4?: any;
};

const Checkoutsteps: React.FC<Props> = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Link to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <Link to="/booking">
            <Nav.Link>Event Address </Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>Event Address</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <Link to="/payment">
            <Nav.Link>Payment Slip</Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>Payment Slip</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <Link to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </Link>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default Checkoutsteps;
