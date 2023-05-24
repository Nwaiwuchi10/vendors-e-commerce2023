import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Message from "../../components/Messages/Message";
import Loader from "../../components/Loading/Loader";
import "./VendorsDetails.css";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
type Props = {
  cartItems: any;
  onAddToCart?: any;
  onAddToCarts?: any;
};
const VendorsDetails: React.FC<Props> = ({
  cartItems,
  onAddToCart,
  onAddToCarts,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = useState({} as any);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/vendors/${id}`
      );
      console.log(data);
      setVendor(data);
      setLoading(false);
      setError(false);
    };

    fetchPosts();
  }, [id]);
  const addToCartHandler = () => {
    try {
      onAddToCarts(vendor);
      const items = vendor;
      localStorage.setItem("cartItems", JSON.stringify(items));
      //   localStorage.setItem("cartPriceRange", items.priceRange);
      //   localStorage.setItem("cartContactNumber", items.contactNumber);
      //   localStorage.setItem("cartVendorId", items._id);
      //   localStorage.setItem("cartEmail", items.email);

      //   localStorage.setItem("cartCategory", items.category);
      //   localStorage.setItem("CartSocialMedia", items.socialMediaHandles);

      //   localStorage.setItem("cartBrandName", items.brandName);
      //   localStorage.setItem(
      //     "cartImagProductShowCase",
      //     items.imageProductShowCase
      //   );
      //   localStorage.setItem("cartBrandDescription", items.brandDescription);

      //   navigate(`/cart/${id}`);
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
    // navigate(`/cart/${vendor._id}`);
    // localStorage.setItem("items", JSON.stringify(items));
  };
  const handleCallButtonClick = () => {
    window.location.href = `tel:${vendor.contactNumber}`;
  };
  return (
    <>
      <Header cartItems={cartItems} />
      <Container>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">error</Message>
        ) : (
          <div className="vendor-card-height">
            <div className="card-wrapper">
              <div className="card">
                <div className="product-imgs">
                  <div className="img-display">
                    <div className="img-showcase">
                      <img
                        src={vendor?.imageProductShowCase}
                        alt="shoe image"
                      />
                      <img
                        src={vendor?.imageProductShowCase}
                        alt="shoe image"
                      />
                      <img
                        src={vendor?.imageProductShowCase}
                        alt="shoe image"
                      />
                      <img
                        src={vendor?.imageProductShowCase}
                        alt="shoe image"
                      />
                    </div>
                  </div>
                  <div className="img-select">
                    <div className="img-item">
                      <a href="#" data-id="1">
                        <img
                          src={vendor?.imageProductShowCase}
                          alt="shoe image"
                        />
                      </a>
                    </div>
                    <div className="img-item">
                      <a href="#" data-id="2">
                        <img
                          src={vendor?.imageProductShowCase}
                          alt="shoe image"
                        />
                      </a>
                    </div>
                    <div className="img-item">
                      <a href="#" data-id="3">
                        <img
                          src={vendor?.imageProductShowCase}
                          alt="shoe image"
                        />
                      </a>
                    </div>
                    <div className="img-item">
                      <a href="#" data-id="4">
                        <img
                          src={vendor?.imageProductShowCase}
                          alt="shoe image"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-content">
                  <h2 className="product-title">event vendor's page</h2>
                  <a href="#" className="product-link">
                    {vendor?.brandName}
                  </a>
                  <div className="product-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.7(21)</span>
                  </div>

                  <div className="product-price">
                    <p className="new-price">
                      Price: <span>&#8358;{vendor?.priceRange}</span>
                    </p>
                  </div>

                  <div className="product-detail">
                    <h2>about this vendor: </h2>

                    <p>{vendor?.brandDescription}</p>

                    <ul>
                      <li>
                        Office Location: <span>{vendor?.officeLocation}</span>
                      </li>
                      <li>
                        Contact Number: <span>{vendor?.contactNumber}</span>{" "}
                      </li>
                      <li>
                        Standard: <span>Proffesional</span>
                      </li>
                      <li>
                        Available:{" "}
                        <span>{vendor?.weeklyAvaliability === "true"} </span>
                      </li>
                      <li>
                        Category: <span>{vendor?.category} </span>
                      </li>

                      <li>
                        Social Media Handles:{" "}
                        <span>{vendor?.socialMediaHandles} </span>
                      </li>
                    </ul>
                  </div>

                  <div className="purchase-info">
                    {/* <input type="number" min="0" value="1" /> */}
                    <button
                      type="button"
                      className="btn"
                      onClick={() => addToCartHandler()}
                    >
                      Add to Cart <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={handleCallButtonClick}
                    >
                      <i className="fa fa-phone"></i> Call Vendor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default VendorsDetails;
