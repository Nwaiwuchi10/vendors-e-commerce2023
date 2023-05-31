import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../VendorsAppliForm/style.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { UserLoginApi, UserRegApi } from "../../Data/Api";
import { UserLogin, UserReg } from "../../Data/Data.Type";
import pple from "../../assets/Images/pple.jpg";
import CircularIndeterminate from "../../components/Loading/Progress";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkoutsteps from "../../components/Checkout/Checkoutsteps";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
type Props = {
  cartItems: any;
};
const LoginScreen: React.FC<Props> = ({ cartItems }) => {
  const user = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };

  //////

  /////
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: UserLogin = {
      email: email,
      password: password,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(UserLoginApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setEmail("");
          setPassword("");

          localStorage.setItem("firstName", res.data.firstName);
          localStorage.setItem("lastName", res.data.lastName);

          localStorage.setItem("email", res.data.email);
          localStorage.setItem("userId", res.data._id);
          localStorage.setItem("roles", res.data.roles);
          localStorage.setItem("phoneNumber", res.data.phoneNumber);
          localStorage.setItem("contactAdress", res.data.contactAdress);
          localStorage.setItem("isAdmin", res.data.isAdmin);
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
    <div>
      <Header cartItems={cartItems} />
      <Container>
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
                Login Form
              </h3>
              <p
                className="d-flex justify-content-center"
                style={{ marginLeft: "15px" }}
              >
                *pls all the blanck inputs are been required*
              </p>
              <form onSubmit={submitHandler}>
                <div className="form-div-input">
                  <div className="col mb-4">
                    <TextField
                      className="input-label-input-divs"
                      required
                      rows={4}
                      id="outlined-required"
                      label="Email Address "
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    <FormControl
                      sx={{ m: 1 }}
                      variant="outlined"
                      className="input-label-input-divs"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
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
                        Login
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
      <Footer />
    </div>
  );
};

export default LoginScreen;