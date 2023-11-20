import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomeInput from "./CustomeInput";
import { postUser } from "../helper/axiosHelper";
import { Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState(initialState);
  const [resp, setResp] = useState({
    status: "",
    message: ""
  })

  const [isPending, setIsPending] = useState(false);
  const inputs = [
    {
      label: "Full Name",
      type: "text",
      name: "name",
      required: true,
      placeholder: "Full Name",
    },

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
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      required: true,
      placeholder: "xxxxxx",
    },
  ];

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = async(e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;

    //let's check password if they match
    if (confirmPassword !== rest.password) {
      return alert("Password do not match!");
    }

    //call axios helper to make post api call

    setIsPending(true)
    const data = await postUser(rest);
    setResp(data);
    setIsPending(false);
    data?.status === "success" && setForm(initialState)
    alert("Your account has been successfully created")
    navigate("/")
  };

  return (
    
    <Form onSubmit={handelOnSubmit}>
      {
        resp?.message && (
          <Alert varient = {resp.status = "success" ? "success" : "danger"}
          >{resp.message}
          </Alert>
        )
      }
      {inputs.map((item, i) => (
        <CustomeInput key={i} {...item} onChange={handelOnChange} />
      ))}
      <div className="d-grid">
        <Button variant="primary" type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : "Submit"}
        </Button>
      </div>
      <p>
        Already have an account? <a href="/">login</a> now
      </p>
    </Form>
  );
};

export default SignupForm;
