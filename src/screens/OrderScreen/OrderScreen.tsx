import React, { useEffect, useState } from "react";
import UserDashBoard from "../../userScreen/userDashboard/userDashboard";
import Checkoutsteps from "../../components/Checkout/Checkoutsteps";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { EvenTAddress, OrderItem } from "../../Data/Data.Type";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Message from "../../components/Messages/Message";
import { Button, TextField } from "@mui/material";
import CircularIndeterminate from "../../components/Loading/Progress";
import { OrderApi } from "../../Data/Api";
import "./Style.css";
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
        <Container>
          <Checkoutsteps step3 />
          <form onSubmit={submitHandler}>
            {cart.length === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              <div className="oderHead-main">
                <div>
                  <div className="orderCardCart">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        marginTop: "20px",
                        marginBottom: "auto",
                        marginLeft: "30px",
                        fontSize: "large",
                      }}
                    >
                      Order Items
                    </div>
                    <hr />
                    <div className="order-items-display">
                      <div>
                        <img
                          src={cart.imageProductShowCase}
                          alt="yesd"
                          className="img-order"
                        />{" "}
                      </div>
                      <div>
                        <div className="mb-3">{cart.brandName} </div>
                        <div>{cart.category} </div>
                      </div>
                      <div>${pricing}</div>
                    </div>
                  </div>
                  <div className="orderCardCarts">
                    <div>
                      <strong>Event Details</strong>{" "}
                    </div>
                    <hr />
                    <div>
                      {" "}
                      Event City/L.G.A: {localStorage.getItem("eventCity")}{" "}
                    </div>
                    <div>Event Type: {localStorage.getItem("eventType")}</div>
                    <div>
                      Event Location: {localStorage.getItem("eventLocation")}{" "}
                    </div>
                    <div>Event Date: {localStorage.getItem("eventDate")} </div>
                    <div> Event Time: {localStorage.getItem("eventTime")}</div>
                    <div className="mb-4">
                      Event Duration: {localStorage.getItem("eventDuration")}{" "}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="orderCardCarts">
                    <div> Pricing</div>
                    <hr />
                    <div className="mb-4">
                      <TextField
                        className="textfield-write"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Agreed Price with Vendor "
                        type="number"
                        value={pricing}
                        onChange={(e) => setPricing(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="orderCardCartst">
                    <div className="dive">Summary</div>
                    <hr />
                    <div className="order-total">
                      <div>
                        <strong> Vendors Charge</strong>
                      </div>
                      <div>
                        <strong>${pricing}</strong>
                      </div>
                    </div>
                    <div className="order-total">
                      <div>
                        <strong>Tax Charge</strong>{" "}
                      </div>
                      <div>
                        <strong>$0.00</strong>
                      </div>
                    </div>
                    <hr />
                    <div className="order-total">
                      <div>
                        <strong>Total Price</strong>{" "}
                      </div>
                      <div>
                        <strong>${pricing}</strong>{" "}
                      </div>
                    </div>

                    {loading ? (
                      <CircularIndeterminate />
                    ) : (
                      <div className="mb-4 dive">
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={cart === 0}
                        >
                          Place Order
                        </Button>
                        <ToastContainer />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </form>
        </Container>
      </UserDashBoard>
    </>
  );
};

export default OrderScreen;
