import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import "./Home.css";
import guyImg from "../assets/images/Front-page.jpg";
import "../styles/hero-section.css";
import Slider1 from "./Slider.jsx";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">D-06 Online Appliance Store</h5>
                <h1 className="mb-4 hero__title">
                  <span>Buy</span> your favorite Appliance
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/appliance">
                    Appliances <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <>
        <center> <section className='home'>
          <div className='container d_flex'>
            <Slider1 />
          </div>
        </section></center>
      </>
    </Helmet>
  );
};

export default Home;
