import React from "react";
import Table from "react-bootstrap/Table";
const TransTable = ({ transList }) => {
  return (
    <div className="mt-5">
      {transList.length} transaction Found
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Date</th>
            <th>Title</th>
            <th>Incomes</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {transList.map(({ _id, title, date, amount, type }, i) => (
            <tr key={_id}>
              <td>{i + 1}.</td>
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
    </div>
  );
};

export default TransTable;
