import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../../Data/Data";
import "./style.css";
import { Image } from "react-bootstrap";

import { VendorsApi } from "../../Data/Api";
import VendorsCard from "./VendorsCard";
import Message from "../../components/Messages/Message";
import Loader from "../../components/Loading/Loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
type Props = {
  onClick?: () => any;
  addToCart?: () => void;
  onAddToCarts?: (item: String) => void;
  handleAddToCart?: any;
  onAddToCart?: any;
  // addToCart?: any[];
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
const VendorsScreen: React.FC<Props> = ({ onAddToCarts, onAddToCart }) => {
  const handleCartAdd = () => {
    try {
      onAddToCart(data);

      console.log(data);
      localStorage.setItem("cartItemsDis", JSON.stringify(data));
      // localStorage.setItem("cartItems", JSON.stringify(items));

      // navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(VendorsApi);
      console.log(data);
      setData(data);
      setLoading(false);
      setError(false);

      // localStorage.setItem("Vendors", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  //   const { addToCart } = props;
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading  d-flex ">
            <i className="fa fa-bolt"></i>
            <h1>Our Vendors</h1>
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">error </Message>
          ) : (
            <>
              <Slider {...settings} className="slider-settings">
                {data?.map((productItems: any, index) => {
                  return (
                    <div className="box" key={index}>
                      <VendorsCard
                        handleAddToCart={handleCartAdd}
                        onAddToCart={onAddToCarts}
                        cover={productItems?.imageProductShowCase}
                        name={productItems?.brandName}
                        price={productItems?.priceRange}
                        Avaliability={productItems}
                        productItem={productItems}
                      />
                    </div>
                  );
                })}
              </Slider>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default VendorsScreen;
