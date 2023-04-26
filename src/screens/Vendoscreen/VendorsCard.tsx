import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../../Data/Data";
import "./style.css";
import { Image } from "react-bootstrap";
import axios from "axios";
import { VendorsApi } from "../../Data/Api";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  onClick?: () => any;
  addToCart?: () => void;
  cover?: any;
  name?: any;
  price?: any;
  Avaliability?: any;
  productItem?: any;

  // onAddToCart?: () => void;
  onAddToCart?: any;
};
const SampleNextArrow = (props: Props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props: Props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const VendorsCard: React.FC<Props> = ({
  cover,
  price,
  name,
  Avaliability,
  onAddToCart,

  productItem,
}) => {
  const navigate = useNavigate();
  const handleAddToCart = (productItem: any) => {
    onAddToCart(productItem);

    // localStorage.setItem("cartPriceRanger", productItem.priceRange);
    // localStorage.setItem("cartContactNumber", productItem.contactNumber);
    // localStorage.setItem("cartVendorId", productItem._id);
    // localStorage.setItem("cartEmail", productItem.email);

    // localStorage.setItem("cartCategory", productItem.category);
    // localStorage.setItem("CartSocialMedia", productItem.socialMediaHandles);

    // localStorage.setItem("cartBrandName", productItem.brandName);
    // localStorage.setItem(
    //   "cartImagProductShowCase",
    //   productItem.imageProductShowCase
    // );
    // localStorage.setItem("cartBrandDescription", productItem.brandDescription);

    navigate("/cart");
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      {/* <Slider {...settings} className="slider-settings"> */}
      <div className="box">
        <div className="product mtop">
          <div className="img">
            <span className="discount">
              <span>
                {Avaliability.weeklyAvaliability === "true" ? (
                  <div>Booked</div>
                ) : (
                  <div>Book</div>
                )}
              </span>
            </span>
            <div className="vendor-img-div">
              <img src={cover} alt="dghdgd" className="vendor-img" />
            </div>

            <div className="product-like">
              {/* <label></label> */}
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
          <div className="product-details">
            <h3>
              <Link
                to={`/vendorsDetails/${productItem._id}`}
                style={{ color: "initial" }}
              >
                {name}
              </Link>{" "}
            </h3>
            <div className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="price">
              <h4>&#8358;{price} </h4>
              {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
              <button onClick={handleAddToCart}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </Slider> */}
    </>
  );
};

export default VendorsCard;