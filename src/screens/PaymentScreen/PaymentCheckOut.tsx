import UserDashBoard from "../../userScreen/userDashboard/userDashboard";
import Checkoutsteps from "../../components/Checkout/Checkoutsteps";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { EvenTAddress, OrderItem } from "../../Data/Data.Type";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { PaymentApi } from "../../Data/Api";
import vend from "../../assets/Images/vend.jpg";
import CircularIndeterminate from "../../components/Loading/Progress";
type Props = {
  step4: any;
};
const PaymentCheckOut: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [transactionReceipt, setTransactionReceipt] = useState("");
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [order, setOrder] = useState(localStorage.getItem("orderId"));
  const [loading, setLoading] = useState(false);
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const handleFileInputChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTransactionReceipt(reader.result as any);
      };
      reader.readAsDataURL(file);
    }
  };

  //////

  /////

  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = {
      user: user,

      order: order,
      transactionReceipt: transactionReceipt,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(PaymentApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setOrder("");
          setUser("");
          setTransactionReceipt("");

          localStorage.setItem("payment", res.data._id);

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/userDashboard");
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
    <UserDashBoard>
      <Checkoutsteps step4 />
      <div>
        <div
          className="img-background"
          style={{
            backgroundImage: `url(${vend})`,
          }}
        ></div>
        <div className="form-background-color">
          <div className="form-card">
            <div className=" card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                Upload Transaction Receipt
              </h3>
              <p
                className="d-flex justify-content-center"
                style={{ marginLeft: "15px" }}
              >
                *pls note that an evidence of your transaction will be sent to
                the vendor and admin before confirmation*
              </p>
              <form onSubmit={submitHandler}>
                <div className="form-div-input">
                  <div className="col mb-4">
                    <label className="">
                      Evidence of Payment/Transaction Receipt
                    </label>
                    <TextField
                      className="input-label-input-divs"
                      required
                      id="outlined-required"
                      type="file"
                      // accept="image/png image/jpeg image/jpg"
                      onChange={handleFileInputChange}
                    />
                  </div>

                  {loading ? (
                    <CircularIndeterminate />
                  ) : (
                    <div
                      className=""

                      // onClick={handleLoader}
                    >
                      <Button
                        // className="div-btn-btn"
                        className="btn-block"
                        onSubmit={handleLoader}
                        type="submit"
                        variant="contained"
                      >
                        Upload Your Transaction Receipt
                      </Button>
                      <ToastContainer />
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </UserDashBoard>
  );
};

export default PaymentCheckOut;
