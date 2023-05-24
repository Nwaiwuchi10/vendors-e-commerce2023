import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../components/Messages/Message";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { AnyMxRecord } from "dns";
import "./Style.css";
type Props = {
  change?: any[];
  cartItems?: any;
  savedCartItems?: any;
};
const CartScreen: React.FC<Props> = ({ cartItems }) => {
  const [cart, setCart] = useState({} as any);

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
      console.log(savedCartItems);
    }
  }, []);

  const navigate = useNavigate();

  // const prices: any = localStorage.getItem("cartPriceRange");
  const removeFromCartHandler = () => {
    try {
      localStorage.removeItem("cartItems");

      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };
  const checkoutHandler = () => {
    navigate("/booking");
  };
  return (
    <>
      <Header cartItems={cartItems} />
      <Container>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        {cart.lenght === 0 ? (
          <Message variant="danger">Your cart is empty</Message>
        ) : (
          <section
            className="h-100"
            style={{ backgroundColor: "#eee", marginBottom: "70px" }}
          >
            <div className="container h-100 py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-normal mb-0 text-black">Booking Cart</h3>
                  </div>
                  <div className="cartCard">
                    {/* <div className="cartScreendisp"> */}
                    <div className="div-cart-img">
                      <img
                        src={cart.imageProductShowCase}
                        alt="jeir"
                        className="cartimage"
                      />
                    </div>
                    <div>
                      <div>
                        <strong>{cart.brandName}</strong>{" "}
                      </div>
                      <div>
                        <strong>{cart.category}</strong>{" "}
                      </div>
                    </div>
                    <div>
                      <div>
                        <strong>{cart.contactNumber} </strong>{" "}
                      </div>
                    </div>
                    <div>
                      <div>
                        <strong> ${cart.priceRange} Negotiable</strong>{" "}
                      </div>
                    </div>
                    <div>
                      <div>
                        <Button
                          type="button"
                          // variant="light"
                          onClick={() => removeFromCartHandler()}
                        >
                          <FaTrash
                            className="fa-fas"
                            style={{ color: "red", fontSize: "20px" }}
                          >
                            {" "}
                          </FaTrash>
                        </Button>
                      </div>
                    </div>

                    {/* </div> */}
                  </div>

                  <Button
                    type="button"
                    variant="contained"
                    className="div-btn-btn-dash"
                    onClick={checkoutHandler}
                  >
                    Proceed To Book
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CartScreen;
