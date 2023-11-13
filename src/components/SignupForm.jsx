import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomeInput from "./CustomeInput";

const SignupForm = () => {
  const inputs = [
    {
      label: "First Name",
      type: "text",
      name: "fName",
      required: true,
      placeholder: "First Name",
    },
    {
      label: "Last Name",
      type: "text",
      name: "LName",
      required: true,
      placeholder: "Last Name",
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
      <p>Already have an account? <a href="/">login</a> now</p>
    </Form>
  );
};

export default SignupForm;
