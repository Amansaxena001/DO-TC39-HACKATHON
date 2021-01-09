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
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container style={{ height: "300px" }}>
        <div className="title">
          <h3 className="mb-3">Top Stacks of 2020</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="12" style={{ marginTop: "20px" }}>
            <Nav className="nav-tabs-info" role="tablist" tabs style={{ justifyContent: "space-around" }}>
              <NavItem
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#37d67a",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span
                  className={classnames({
                    active: iconTabs === 1,
                  })}
                  style={{ fontSize: "20px", marginTop: "2.2em", cursor: "pointer" }}
                  onClick={(e) => setIconsTabs(1)}
                  href="#pablo"
                >
                  Vue
                </span>
              </NavItem>
              <NavItem
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#01579B",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span
                  className={classnames({
                    active: iconTabs === 1,
                  })}
                  style={{ fontSize: "20px", marginTop: "2.2em" }}
                  onClick={(e) => setIconsTabs(1)}
                  href="#pablo"
                >
                  React
                </span>
              </NavItem>
              <NavItem
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "#f83c2e",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span
                  className={classnames({
                    active: iconTabs === 1,
                  })}
                  style={{ fontSize: "20px", marginTop: "2.2em" }}
                  onClick={(e) => setIconsTabs(1)}
                  href="#pablo"
                >
                  Angular
                </span>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
