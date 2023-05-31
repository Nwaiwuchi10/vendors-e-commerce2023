import React from "react";

const Rough = () => {
  return <div>Rough</div>;
};

export default Rough;

// import React from 'react'

// const Rough = () => {
//   return (
//     <div>
// <Row>
// <Col md={8}>
//   <ListGroup variant="flush">
//     <ListGroup.Item>
//       <h4>
//         <strong>Event Details:</strong>
//       </h4>
//       <p>
//         {localStorage.getItem("eventType")},{" "}
//         {localStorage.getItem("eventLocation")},{" "}
//         {localStorage.getItem("eventCity")}{" "}
//         {localStorage.getItem("eventDuration")},{" "}
//         {localStorage.getItem("eventDate")}
//         {localStorage.getItem("eventTime")}
//       </p>
//     </ListGroup.Item>

//     {/* <ListGroup.Item>
//   <h2>Payment Method</h2>
//   <strong>Method: </strong>
//   {cart.paymentMethod}
// </ListGroup.Item> */}

//     <ListGroup.Item>
//       <h2>Order Items</h2>
//       {cart.length === 0 ? (
//         <div>Your cart is empty</div>
//       ) : (
//         <ListGroup variant="flush">
//           <ListGroup.Item>
//             <Row>
//               <Col md={4}>
//                 <Image
//                   src={cart.imageProductShowCase}
//                   alt="tejjd"
//                   fluid
//                   rounded
//                 />
//               </Col>
//               <Col>
//                 <Link to={`/product/${cart.product}`}>
//                   {cart.brandName}
//                 </Link>
//               </Col>
//               <Col md={4}>${pricing} </Col>
//               <Col md={4}>
//                 <TextField
//                   className="input-label-input-divs"
//                   required
//                   rows={4}
//                   id="outlined-required"
//                   label="Agreed Pice with Vendor "
//                   type="number"
//                   value={pricing}
//                   onChange={(e) =>
//                     setPricing(parseInt(e.target.value))
//                   }

//                   //   defaultValue="Match Day"
//                 />
//               </Col>
//               {/* <Col md={4}>
//               {item.qty} x ${item.price} = ${item.qty * item.price}
//             </Col> */}
//             </Row>
//           </ListGroup.Item>
//         </ListGroup>
//       )}
//     </ListGroup.Item>
//   </ListGroup>
// </Col>
// <Col md={4}>
//   <Card>
//     <ListGroup variant="flush">
//       <ListGroup.Item>
//         <h2>Order Summary</h2>
//       </ListGroup.Item>
//       <ListGroup.Item>
//         <Row>
//           <Col>Items</Col>
//           <Col>${pricing}</Col>
//         </Row>
//       </ListGroup.Item>
//       <ListGroup.Item>
//         <Row>
//           <Col>Shipping</Col>
//           <Col>${cart.shippingPrice}</Col>
//         </Row>
//       </ListGroup.Item>
//       <ListGroup.Item>
//         <Row>
//           <Col>Tax</Col>
//           <Col>$0.00</Col>
//         </Row>
//       </ListGroup.Item>
//       <ListGroup.Item>
//         <Row>
//           <Col>Total</Col>
//           <Col>${pricing}</Col>
//         </Row>
//       </ListGroup.Item>
//       <ListGroup.Item>
//         {/* {error && <Message variant="danger">{error}</Message>} */}
//       </ListGroup.Item>
//       <ListGroup.Item>
//         {loading ? (
//           <CircularIndeterminate />
//         ) : (
//           <div>
//             <Button
//               type="submit"
//               className="btn-block"
//               // disabled={cart === 0}
//             >
//               Place Order
//             </Button>
//             <ToastContainer />
//           </div>
//         )}
//       </ListGroup.Item>
//     </ListGroup>
//   </Card>
// </Col>
// </Row>

//     </div>
//   )
// }

// export default Rough
