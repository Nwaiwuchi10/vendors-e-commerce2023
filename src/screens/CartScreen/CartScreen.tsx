import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../components/Messages/Message";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { AnyMxRecord } from "dns";
type Props = {
  change?: any[];
  cartItems?: any;
};
const CartScreen: React.FC<Props> = ({ cartItems }) => {
  const [cart, setCart] = useState({});

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCart(JSON.parse(savedCartItems));
    }
  }, []);
  const [change, setChange] = useState([] as any);
  const navigate = useNavigate();
  //   const VendorId: any = localStorage.gtItem("cartVendorId");
  const item: any = localStorage.getItem("cartImagProductShowCase");
  //   setChange(item);
  const brad: any = localStorage.getItem("cartBrandName");
  const prices: any = localStorage.getItem("cartPriceRange");
  const removeFromCartHandler = () => {
    try {
      localStorage.removeItem("cartImagProductShowCase");
      localStorage.removeItem("cartBrandName");
      localStorage.removeItem("cartPriceRange");
      setChange([]);
    } catch (error) {
      console.log(error);
    }
  };
  const checkoutHandler = () => {
    navigate("/booking");
  };
  return (
    <div>
      <Header cartItems={cartItems} />
      <Container>
        <Row style={{ width: "100%" }}>
          <Link className="btn btn-light my-3" to="/homescreen">
            Go Back
          </Link>

          {/* <PersistentDrawerLeft /> */}
          <Col md={8}>
            <h1>Booking Cart</h1>

            <div></div>

            {/* {change.lenght === 0 ? (
            <Message variant="danger">Your cart is empty</Message>
          ) : ( */}
            <Link to="/">Go Back</Link>
            <ListGroup variant="flush">
              {/* {change?.map((changes: any) => ( */}
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    {/* <Image src={item} alt="jfjhf" fluid rounded /> */}
                  </Col>
                  <Col md={3}>
                    {/* {brad} */}
                    {/* <Link to={`/vendorsDetails/${cartVendorId}`}>
                 {cartBrandName}
                    </Link> */}
                  </Col>
                  {/* <Col md={2}> &#8358;{prices}</Col> */}

                  <Col>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler()}
                    >
                      <FaTrash className="fa-fas"> </FaTrash>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* ))}  */}
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>
                    Subtotal Amount ( (
                    {/* {change.reduce((acc, changes) => acc + changes.qty, 0)}) */}
                  </h2>
                  &#8358; Negotiable
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    // disabled={change.lenght === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed to checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default CartScreen;
