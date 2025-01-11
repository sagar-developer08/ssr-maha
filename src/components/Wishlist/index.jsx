import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Products from "./Products/index";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
function index() {
  const wishlistItems = useSelector((state) => state.wishlist.products);
  const navigate = useNavigate();

  return (
    <div className="wishlistPage33d py-60">
      <Container>
        {wishlistItems?.length ? (
          <Row className="gx-lg-5">
            <Col>
              <Products />
            </Col>
          </Row>
        ) : (
          <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <FaHeart className="wishBtl" size={220} />
            <div className="sec-title mb-3">
              Your Wishlist is currently empty.!
            </div>
            <button
              className="btnNl btnNl-secondary btnLk"
              onClick={() => {
                navigate(`/`);
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default index;
