import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
const LoginPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-primary text-light vh-100 d-flex justify-content-center align-items-center">
          <div className="shadow -lg rounded p-3">
            <h1>Welcome Back!</h1>
            <p>login to our system and take controll of your transication</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <div className="shadow-lg p-3 border rounded">
            <h1>Login Now</h1>
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
