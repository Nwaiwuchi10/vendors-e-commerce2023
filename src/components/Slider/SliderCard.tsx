import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../../Data/Data";
import Slider from "react-slick";
import "./style.css";
import "../Hero/Hero.css";
import { Image } from "react-bootstrap";
import axios from "axios";
import { VendorsApi } from "../../Data/Api";
import Message from "../Messages/Message";
import Loader from "../../components/Loading/Loader";
const SliderCard = () => {
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

      localStorage.setItem("Vendors", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots: any) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">error</Message>
      ) : (
        <Slider {...settings}>
          {data?.slice(0, 3).map((value: any) => {
            return (
              <>
                <section className="container homeSlide contentWidth">
                  <div className="box slider-content-display" key={value.id}>
                    <div className="left-content-slide">
                      <h1>50% Off For Vendor Of The Week</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quis lobortis consequat eu, quam etiam at quis ut
                        convallis.
                      </p>
                      <button className="btn-primary">Visit Collections</button>
                    </div>
                    <div className="right-img">
                      <Image
                        thumbnail
                        src={value.imageProductShowCase}
                        alt="img"
                        className="img-img-slide"
                      />
                    </div>
                  </div>
                </section>
              </>
            );
          })}
        </Slider>
      )}
    </>
  );
};

export default SliderCard;
