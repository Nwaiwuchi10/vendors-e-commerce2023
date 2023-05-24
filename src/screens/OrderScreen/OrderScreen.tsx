import React, { useEffect, useState } from "react";
import UserDashBoard from "../../userScreen/userDashboard/userDashboard";
import Checkoutsteps from "../../components/Checkout/Checkoutsteps";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { EvenTAddress, OrderItem } from "../../Data/Data.Type";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Message from "../../components/Messages/Message";
import { TextField } from "@mui/material";
import CircularIndeterminate from "../../components/Loading/Progress";
import { OrderApi } from "../../Data/Api";
// import "./Style.css";
type Props = {
  cartItems: any;

  step3: any;
};

const OrderScreen: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [eventAddress, setEventAddress] = useState({});
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [usersEmail, setUsersEmail] = useState(localStorage.getItem("email"));
  const [pricing, setPricing] = useState(Number);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({} as any);

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
      console.log(savedCartItems);
    }
  }, []);
  const eventLocation = localStorage.getItem("eventLocation");
  const city = localStorage.getItem("eventCity");
  const eventDuration = localStorage.getItem("eventDuration");
  const eventDate = localStorage.getItem("eventDate");
  const eventType = localStorage.getItem("eventType");
  const eventTime = localStorage.getItem("eventTime");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const brandName = cart.brandName;
    const priceAgreed = pricing;
    const image = cart.imageProductShowCase;

    const product = cart._id;
    // Create a new order item object
    const bookingadress: any = {
      city,
      eventDuration,
      eventLocation,
      eventDate,
      eventType,
      eventTime,
    };
    const userdata: any = {
      user: user,
      eventAddress: eventAddress,
      orderItems: orderItems,
      usersEmail: usersEmail,
    };
    setEventAddress(bookingadress);
    const data: OrderItem = {
      brandName,
      priceAgreed,
      image,
      product,
      // Add other fields if needed
    };
    setOrderItems((prevOrderItems) => [...prevOrderItems, data]);

    // Reset the form or perform any other necessary actions
    e.currentTarget.reset();

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(
        OrderApi,

        userdata,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setOrderItems([]);

          setEventAddress({});
          setUser("");
          setUsersEmail("");
          localStorage.setItem("orderId", res.data._id);

          localStorage.setItem(
            "orderItems",
            JSON.stringify(res.data.orderItems)
          );
          localStorage.setItem("orderUser", res.data.user);
          localStorage.setItem("orderUserEmail", res.data.usersEmail);
          localStorage.setItem("ordereventAdress", res.data.eventAddress);

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/payment");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };
  return (
    <>
      <UserDashBoard>
        <Checkoutsteps step3 />
        <form onSubmit={submitHandler}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>
                    <strong>Event Details:</strong>
                  </h4>
                  <p>
                    {localStorage.getItem("eventType")},{" "}
                    {localStorage.getItem("eventLocation")},{" "}
                    {localStorage.getItem("eventCity")}{" "}
                    {localStorage.getItem("eventDuration")},{" "}
                    {localStorage.getItem("eventDate")}
                    {localStorage.getItem("eventTime")}
                  </p>
                </ListGroup.Item>

                {/* <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item> */}

                <ListGroup.Item>
                  <h2>Order Items</h2>
                  {cart.length === 0 ? (
                    <div>Your cart is empty</div>
                  ) : (
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <Col md={4}>
                            <Image
                              src={cart.imageProductShowCase}
                              alt="tejjd"
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${cart.product}`}>
                              {cart.brandName}
                            </Link>
                          </Col>
                          <Col md={4}>${pricing} </Col>
                          <Col md={4}>
                            <TextField
                              className="input-label-input-divs"
                              required
                              rows={4}
                              id="outlined-required"
                              label="Agreed Pice with Vendor "
                              type="number"
                              value={pricing}
                              onChange={(e) =>
                                setPricing(parseInt(e.target.value))
                              }

                              //   defaultValue="Match Day"
                            />
                          </Col>
                          {/* <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col> */}
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Order Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>${pricing}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>${cart.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>$0.00</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>${pricing}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {/* {error && <Message variant="danger">{error}</Message>} */}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {loading ? (
                      <CircularIndeterminate />
                    ) : (
                      <div>
                        <Button
                          type="submit"
                          className="btn-block"
                          // disabled={cart === 0}
                        >
                          Place Order
                        </Button>
                        <ToastContainer />
                      </div>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </form>
      </UserDashBoard>
    </>
  );
};

export default OrderScreen;
