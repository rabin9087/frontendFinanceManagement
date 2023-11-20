import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomeInput from "./CustomeInput";
import { loginUser } from "../helper/axiosHelper";
import { Alert, Spinner } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {

  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [resp, setResp] = useState({});
  const navigate = useNavigate();

  const handelOnChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form, [name]: value
    })
  }

  const handelOnSubmit = async(e) => {
    e.preventDefault();
    setResp({});
    setIsLoading(true)
    const result = await loginUser(form);
    setIsLoading(false)
    console.log(result);
    //if login in success then redirect user to dashboard

    if (result?.status === "success"){
      //redirect user
      navigate("/dashboard")
    } else{
      setResp(result)
    }
    //else show error message on the page
  }

  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
      placeholder: "John@email.com",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
      placeholder: "xxxxxx",
    },
  ];
  return (
    <Form onSubmit={handelOnSubmit}>

      {
        resp.message && <Alert variant="danger">
          {resp.message}
        </Alert>
      }
      {inputs.map((item, i) => (
        <CustomeInput key={i} {...item} onChange = {handelOnChange}/>
      ))}
      <div className="d-grid">
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? <Spinner animation = "border" />: "Submit"}
          
        </Button>
      </div>
      <p>Are you new here? <a href="/signup">signup</a> now</p>
    </Form>
  );
};

export default LoginForm;
