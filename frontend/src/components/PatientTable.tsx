
import React from 'react'
import Table from 'react-bootstrap/Table'

      // id: 1,
      // name: 'michael',
      // familyEmail: '1@g.co',
      // code: 1328,
      // status: 'procedure',

const PatientTable = (props: any) => {

  return (
    <>
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
    </>
  )
}

export default PatientTable;