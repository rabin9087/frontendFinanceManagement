import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { deleteTrans } from "../helper/axiosHelper";

const TransTable = ({ transList, getAllTrans }) => {
  const [idsToDeleteData, setIdsToDeleteData] = useState([]);
  const [resp, setResp] = useState({});

  const handelOnDelete = async () => {
    if (
      !window.confirm(
        `Are you sure want to delete ${idsToDeleteData.length} transaction ?`
      )
    ) {
      return;
    }
    const result = await deleteTrans(idsToDeleteData);
    setResp(result);
    if (result?.status === "success") {
      getAllTrans() && setIdsToDeleteData([]);
    }
  };

  const handelOnCheck = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);

    if (checked) {
      setIdsToDeleteData([...idsToDeleteData, value]);
    } else {
      setIdsToDeleteData(idsToDeleteData.filter((item) => item !== value));
    }
  };
  console.log(idsToDeleteData);

  const handelOnSelectAll = (e) => {
    const { checked } = e.target;

    if (checked) {
      const ids = transList.map(({ _id }) => _id);
      console.log(ids);
      setIdsToDeleteData(ids);
    } else {
      setIdsToDeleteData([]);
    }
  };

  return (
    <div className="mt-2">
      <div className="text-center">
        <h1 className="text-warning m-3 text-decoration-underline">
          Your Transation Records
        </h1>
      </div>

      <div className="text-center fw-bold">
        <span className="text-success text-lg"> {transList.length}</span>{" "}
        Transaction Record Found
      </div>

      {resp.message && (
        <Alert variant={resp.status === "success" ? "success" : "danger"}>
          {resp.message}
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              {transList.length > 0 && (
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={idsToDeleteData.length === transList.length}
                  onChange={handelOnSelectAll}
                />
              )}{" "}
              S.N.
            </th>
            <th>Date</th>
            <th>Title</th>
            <th>Incomes</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {transList.map(({ _id, title, date, amount, type }, i) => (
            <tr key={_id}>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input border"
                  onChange={handelOnCheck}
                  value={_id}
                  checked={idsToDeleteData.includes(_id)}
                />{" "}
                {i + 1}.
              </td>
              <td>{new Date(date).toLocaleDateString()}</td>
              <td>{title}</td>
              {type === "income" ? (
                <>
                  <td className="text-success">{amount} </td>
                  <td></td>
                </>
              ) : (
                <>
                  <td></td>
                  <td className="text-danger">{amount}</td>
                </>
              )}
            </tr>
          ))}

          <tr className="fw-bolder">
            <td colSpan={3} className="text-end">
              Total Balance
            </td>
            <td>
              {transList.reduce((acc, { amount, type }) => {
                return type === "income" ? acc + amount : acc - amount;
              }, 0)}
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="">
        {idsToDeleteData.length > 0 && (
          <div className="d-flex flex-wrap justify-content-center">
            <Button
              variant="danger"
              className="fw-bold f-20 align-items-center"
              onClick={handelOnDelete}
            >
              <i class="fa-solid fa-trash-can"></i> Delete{" "}
              {idsToDeleteData.length} records
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransTable;
