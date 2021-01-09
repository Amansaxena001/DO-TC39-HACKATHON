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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              The ever growing digital world has over 1.8B
              <span className="text-white"> web applications and 200 million active websites till date.</span>
            </h3>
            <p className="text-white mb-3">
              There has been a drastic transformation in the applications of website technology. Today, everything from
              connecting to unknown people to buying stuff happens online. There are billions of users accessing the
              internet everyday. Browsers and applications have become so complex that they can sense the mood of users
              and display appropriate content on web pages.
            </p>
            <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                Register Page
              </Button>
            </div>
          </Col>
          <Col className="mb-lg-auto" lg="6"></Col>
        </Row>
      </Container>
    </div>
  );
}
