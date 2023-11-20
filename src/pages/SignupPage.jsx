import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SignupForm from '../components/SignupForm'

const SignupPage = () => {
  return (
    <Container fluid>
    <Row>
      <Col className="bg-info text-light vh-100 d-flex justify-content-center align-items-center">
        <div className="shadow -lg rounded p-3">
          <h1>Join our Community</h1>
          <p>Leverage our system to track your income </p>
        </div>
      </Col>
      <Col className="d-flex justify-content-center align-items-center ">
        <div className="shadow-lg p-3 border rounded">
          <h1>Signup Now</h1>
          <SignupForm/>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default SignupPage
