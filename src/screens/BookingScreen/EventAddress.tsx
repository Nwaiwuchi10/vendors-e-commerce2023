import TopNavbar from "../../components/Header/TopNavbar";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import "../VendorsAppliForm/style.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { UserRegApi } from "../../Data/Api";

import pple from "../../assets/Images/pple.jpg";
import CircularIndeterminate from "../../components/Loading/Progress";
import UserDashBoard from "../../userScreen/userDashboard/userDashboard";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkoutsteps from "../../components/Checkout/Checkoutsteps";
import { Container } from "react-bootstrap";
type Props = {
  cartItems: any;
  step1: any;
  step2: any;
};
const EventAddress: React.FC<Props> = ({ cartItems }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  useEffect(() => {
    if (user) {
      navigate("/booking");
    } else {
      navigate("/register");
    }
  }, []);

  const [city, setCity] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDuration, setEventDuration] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };

  //////

  /////
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setCity(city);
    setEventDate(eventDate);
    setEventDuration(eventDuration);
    setEventLocation(eventLocation);
    setEventType(eventType);
    setEventTime(eventTime);

    localStorage.setItem("eventLocation", eventLocation);
    localStorage.setItem("eventCity", city);
    localStorage.setItem("eventDuration", eventDuration);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventType", eventType);
    localStorage.setItem("eventTime", eventTime);
    navigate("/order");
    toast.success("post sucessful");
  };
  return (
    <>
      {/* <TopNavbar cartItems={cartItems} /> */}
      <UserDashBoard>
        <Container>
          <Checkoutsteps step1 step2 />

          <div
            className="img-background"
            style={{
              backgroundImage: `url(${pple})`,
            }}
          ></div>
          <div className="form-background-color">
            <div className="form-card">
              <div className=" card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                  Event Description Form
                </h3>
                <p
                  className="d-flex justify-content-center"
                  style={{ marginLeft: "15px" }}
                >
                  *pls all the blanck inputs are been required*
                </p>
                <form onSubmit={submitHandler}>
                  <div className="form-div-input">
                    <div className=" col mb-4">
                      <TextField
                        className=" input-label-input-divs"
                        required
                        id="outlined-required"
                        label="Type Of Event "
                        type="text"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Event City/L.G.A "
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Event Location "
                        type="text"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Event Date "
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Event Time "
                        type="time"
                        value={eventTime}
                        onChange={(e) => setEventTime(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Event Duration "
                        type="text"
                        value={eventDuration}
                        onChange={(e) => setEventDuration(e.target.value)}

                        //   defaultValue="Match Day"
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
                          className="div-btn-btn"
                          onSubmit={handleLoader}
                          type="submit"
                          variant="contained"
                        >
                          Post
                        </Button>
                        <ToastContainer />
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </UserDashBoard>
    </>
  );
};

export default EventAddress;
