import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import "./style.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserDashBoard from "../../userScreen/userDashboard/userDashboard";
import { VendorsApi } from "../../Data/Api";
import { Vendors } from "../../Data/Data.Type";
import vend from "../../assets/Images/tt.jpg";
import CircularIndeterminate from "../../components/Loading/Progress";
type Props = {
  // base64: (file: File | null) => void;
};
const VendorsApplication: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [officeLocation, setOfficeLocation] = useState("");
  const [imageProductShowCase, setImageProductShowCase] = useState("");
  const [brandName, setBrandName] = useState("");
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [brandDescription, setBrandDescription] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [weeklyAvaliability, setWeeklyAvaliability] = useState(false);
  const [socialMediaHandles, setSocialMediaHandles] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageProductShowCase(reader.result as any);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadimage = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convert2base64(file);
    setImageProductShowCase(base64);
    // setImage({ ...image, image: base64 });
    console.log(base64);
    // const reader = new FileReader();
  };
  const convert2base64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  //////music file

  //////

  /////
  const handlePostNavigation = (id: string) => {
    // Navigate to the specified ID
    navigate(`/vendorsclips/${id}`);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: Vendors = {
      user: user,
      officeLocation: officeLocation,
      imageProductShowCase: imageProductShowCase,
      brandName: brandName,
      contactNumber: contactNumber,
      brandDescription: brandDescription,
      category: category,
      socialMediaHandles: socialMediaHandles,
      email: email,
      priceRange: priceRange,
      weeklyAvaliability: weeklyAvaliability,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(VendorsApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setBrandName("");
          setUser("");
          setBrandDescription("");
          setCategory("");
          setOfficeLocation("");
          setImageProductShowCase("");

          setPriceRange("");
          setEmail("");
          setWeeklyAvaliability(false);
          setContactNumber("");
          setSocialMediaHandles("");

          localStorage.setItem("officeLocation", res.data.officeLocation);
          localStorage.setItem(
            "imageProductShowCase",
            res.data.imageProductShowCase
          );
          localStorage.setItem("vendorId", res.data._id);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("user", res.data.user);
          localStorage.setItem("priceRange", res.data.priceRange);
          localStorage.setItem("phoneNumber", res.data.phoneNumber);
          localStorage.setItem("category", res.data.category);
          localStorage.setItem("socialMedia", res.data.socialMediaHandles);
          localStorage.setItem("contactNumber", res.data.contactNumber);
          localStorage.setItem("brandName", res.data.brandName);
          localStorage.setItem("brandDescription", res.data.brandDescription);
          console.log(res.data);
          toast.success("post sucessful");
          handlePostNavigation(res.data._id);
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
                Create a Vendor
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
                      label="Brand-Name "
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>
                  <div className="col mb-4">
                    <TextField
                      className="input-label-input-divs"
                      required
                      rows={4}
                      id="outlined-required"
                      label="Office-Address "
                      type="text"
                      value={officeLocation}
                      onChange={(e) => setOfficeLocation(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>
                  <div className="col mb-4">
                    <TextField
                      className="input-label-input-divs"
                      required
                      rows={4}
                      id="outlined-required"
                      label="Phone-Number "
                      type="text"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>
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
                  <div className="col mb-4">
                    <TextField
                      className="input-label-input-divs"
                      required
                      rows={4}
                      id="outlined-required"
                      label="Category "
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>
                  <div className="col mb-4">
                    <TextField
                      className="input-label-input-divs"
                      required
                      rows={4}
                      id="outlined-required"
                      label="Social Media Handles "
                      type="text"
                      value={socialMediaHandles}
                      onChange={(e) => setSocialMediaHandles(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>
                  <div className="col mb-4">
                    <TextField
                      className="input-label-input-divs"
                      required
                      rows={4}
                      id="outlined-required"
                      label="Desribe your Brand-Name"
                      type="text"
                      value={brandDescription}
                      onChange={(e) => setBrandDescription(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>
                  <div className="col mb-4">
                    <TextField
                      className="input-label-input-divs"
                      required
                      rows={4}
                      id="outlined-required"
                      label="Event Price-Range e.g 0-1million naira "
                      type="text"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}

                      //   defaultValue="Match Day"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            checked={weeklyAvaliability}
                            onChange={(e) =>
                              setWeeklyAvaliability(e.target.checked)
                            }
                          />
                        }
                        label="Present Weekly Avaliability"
                      />
                    </FormGroup>
                  </div>
                  <div className="col mb-4">
                    {/* <label className="">Cover Photo</label> */}
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
                        className="div-btn-btn"
                        onSubmit={handleLoader}
                        type="submit"
                        variant="contained"
                      >
                        Upload
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
    </div>
  );
};

export default VendorsApplication;
