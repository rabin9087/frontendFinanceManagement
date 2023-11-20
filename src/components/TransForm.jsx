import React, { useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import CustomeInput from "./CustomeInput";
import { postTrans } from "../helper/axiosHelper";

const TransForm = ({getAllTrans}) => {
  const [form, setForm] = useState({});
  const [resp, setResp] = useState({});

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const result = await postTrans(form);
    setResp(result);

    if(result.status === "success"){
      getAllTrans();
    }

    setForm({})

  };

  const inputs = [
    {
      label: "Date",
      type: "date",
      name: "date",
      required: true,
      placeholder: "",
    },
    {
      label: "Title",
      type: "text",
      name: "title",
      required: true,
      placeholder: "",
    },
    {
      label: "Amount",
      type: "number",
      name: "amount",
      required: true,
      placeholder: "",
    },
  ];

  return (
    <div className="mt-5">
      {resp.message && (
        <Alert variant={resp.status === "success" ? "success" : ""}>
          {resp.message}
        </Alert>
      )}
      <Form className="shadow-lg border rounded p-3" onSubmit={handelOnSubmit}>
        <Row>
          <Col md={2}>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select onChange={handelOnChange} name="type" required>
                <option value=""> --select--</option>
                <option value="income"> --Income--</option>
                <option value="expenses"> --Expenses--</option>
              </Form.Select>
            </Form.Group>
          </Col>
          {inputs.map((item, i) => (
            <Col md={2} key={i}>
              <CustomeInput {...item} onChange={handelOnChange} />
            </Col>
          ))}

          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <div className="d-grid mt-2">
                <Button type="submit">Add </Button>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TransForm;
