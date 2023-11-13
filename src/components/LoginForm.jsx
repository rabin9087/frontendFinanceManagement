import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomeInput from "./CustomeInput";

const LoginForm = () => {
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
    <Form>
      {inputs.map((item, i) => (
        <CustomeInput key={i} {...item} />
      ))}
      <div className="d-grid">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
      <p>Are you new here? <a href="/signup">signup</a> now</p>
    </Form>
  );
};

export default LoginForm;
