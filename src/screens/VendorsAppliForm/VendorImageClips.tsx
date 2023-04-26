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

import vend from "../../assets/Images/vend.jpg";
import CircularIndeterminate from "../../components/Loading/Progress";
type Props = {
  // base64: (file: File | null) => void;
};
const VendorImageClips: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [vendorId, setVendorId] = useState(
    localStorage.getItem("vendorId") as any
  );

  const [images, setImages] = useState([] as any);

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
        setImages(reader.result as any);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadimage = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convert2base64(file);
    setImages(base64);
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
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      vendorId: vendorId,
      images: images,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(
        `http://localhost:5000/api/vendors/updateimages/${localStorage.getItem(
          "vendorId"
        )}`,
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setVendorId("");

          setImages("");

          localStorage.setItem("vendorId", res.data._id);
          localStorage.setItem("images", res.data.images);

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/");
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
                style={{ marginLeft: "15px", color: "red" }}
              >
                *pls all the blanck inputs are been required*
              </p>
              <form onSubmit={submitHandler}>
                <div className="form-div-input">
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

export default VendorImageClips;
