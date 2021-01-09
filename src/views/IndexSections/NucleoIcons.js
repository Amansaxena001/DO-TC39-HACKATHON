/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png").default} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">
              New Technologies to learn in <span style={{ fontSize: "44px" }}>2021</span>
            </h2>
            <h4 className="description">
              Web development, over the years, has proved itself as an indispensable element in the success of any
              organization/business. It is a window to your business, which helps you grow it globally. Here we have
              gathered some trends after analyzing tendencies across industries in this list of{" "}
              <span style={{ color: "#34ebcf", opacity: "1", fontWeight: 700 }}>web development trends 2021</span> .
              You’ll get to know about the top web technology stacks worth your attention in the coming year.
            </h4>
            <div className="btn-wrapper"></div>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="https://discord.gg/uykHeMXzFM">
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}
              <i className="icon tim-icons icon-coins" />
              {/* Right 1 */}
              <i className="icon icon-sm tim-icons icon-spaceship" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* Right 2 */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* Left 1 */}
              <i className="icon icon-sm tim-icons icon-key-25" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* Left 2 */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            <span className="blur-hidden h5 text-primary">Eplore our community at discord</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
