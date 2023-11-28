import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import { Button, Container } from "react-bootstrap";
import TransForm from "../components/TransForm";
import TransTable from "../components/TransTable";
import { getTrans } from "../helper/axiosHelper";
import { CustomModal } from "../components/CustomModal";

const Dashboard = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [transList, setTransList] = useState([]);

  useEffect(() => {
    getAllTrans();
  }, []);

  const getAllTrans = async () => {
    const { status, transList } = await getTrans();
    status === "success" && setTransList(transList);
  };

  return (
    <div className="bg-dark">
      {/* navbar */}
      <TopNav />
      <Container fluid>
        <div className="mt-5 text-end">
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Add New Transaction
          </Button>
        </div>
        <CustomModal show={modalShow} onHide={() => setModalShow(false)}>
          <TransForm getAllTrans={getAllTrans} />
        </CustomModal>
        {/* Table */}
        <TransTable transList={transList} getAllTrans={getAllTrans} />
      </Container>
    </div>
  );
};

export default Dashboard;
