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
  handleAddToCart: (event: React.MouseEvent<HTMLButtonElement>) => void;

  onAddToCart?: any;
};

const VendorsCard: React.FC<Props> = ({
  cover,
  price,
  name,
  Avaliability,
  onAddToCart,
  handleAddToCart,
  productItem,
}) => {
  const navigate = useNavigate();
  // const handleAddToCart = () => {
  //   try {
  //     onAddToCart(productItem);
  //     const items = productItem.toString();
  //     console.log(items);
  //     localStorage.setItem("cartItemsDis", JSON.stringify(items));
  //     // localStorage.setItem("cartItems", JSON.stringify(items));

  //     // navigate("/cart");
  //   } catch (error) {
  //     console.log(error);
  //   }

  // };
  // const handleAddToCart = (productItem:any) => {

  //   onAddToCart(productItem);
  //   const items = productItem.toString();
  //   console.log(items);
  //   localStorage.setItem("cartItemsDis", JSON.stringify(items));

  // };

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
                {productItem.brandName}
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
            <div className="price">
              <h6>Negotiable</h6>
            </div>
          </div>
        </div>
      </div>
      {/* </Slider> */}
    </>
  );
};

export default VendorsCard;
