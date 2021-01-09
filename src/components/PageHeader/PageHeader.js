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
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand" style={{ width: "100%" }}>
          <h1 className="h1-seo">A home for Web Developers</h1>
          <h3 className="d-none d-sm-block">
            Welcome to TC-39 <span style={{ color: "#f4a330", fontSize: "44px" }}>INDIA</span>
          </h3>
        </div>
      </Container>
    </div>
  );
}
