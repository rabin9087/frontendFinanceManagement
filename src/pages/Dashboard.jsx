import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import { Container } from 'react-bootstrap'
import TransForm from '../components/TransForm'
import TransTable from '../components/TransTable'
import { getTrans } from '../helper/axiosHelper'

const Dashboard = () => {

  const [transList, setTransList] = useState([]);

  useEffect(() => {
    getAllTrans();
  }, [])

  const getAllTrans = async() =>{
    const {status, transList} = await getTrans();
    status === "success" && setTransList(transList)
  }

  return (
    <div>
      {/* navbar */}
      <TopNav/>
      <Container fluid>

        <TransForm getAllTrans = {getAllTrans} />

        {/* Table */}
        <TransTable transList = {transList} />
        
      </Container>
    </div>  
  )
}

export default Dashboard
