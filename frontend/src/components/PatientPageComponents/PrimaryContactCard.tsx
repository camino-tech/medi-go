
import React from 'react'
import Table from 'react-bootstrap/Table'

const PrimaryContactCard = (props: any) => {

  return (
    <div className='box-shadow mt-3 mb-3'>
      <h2 className='center'>Patients</h2>
      <div className="fixed-height-overflow">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Family Email</th>
            <th>Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            props.props.patients.map((patient: any) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.familyEmail}</td>
                <td>{patient.code}</td>
                <td>{patient.status}</td>
              </tr>
            ))
          }
          </tbody>
        </Table>       
      </div>
    </div>
  )
}

export default PrimaryContactCard;