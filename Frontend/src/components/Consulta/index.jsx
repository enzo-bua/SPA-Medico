import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getConsulta } from '../../service/getConsulta'
import { Link, useParams } from 'react-router-dom'

export default function Consulta() {
  const [consultas, setConsultas] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    getConsulta(id)
      .then(res => {
        setConsultas(res)
        setLoading(true)
      })
  },[])

  return (
    <>    
      <Link to="/">
        <button className="btn btn-primary mt-5 ms-5 w-25">
          Volver
        </button>
      </Link>
      <div className="d-flex justify-content-center align-items-center ">
        {loading ? (
          consultas.length > 0 
            ? (
              <Table striped bordered hover className='mt-5'>
                <thead className='bg-secondary'>
                  <tr className='text-center'>
                    <th>#</th>
                    <th>Consulta</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {consultas.map((consulta) => (
                    <tr key={consulta.id} className='text-center'>
                      <td>{consulta.id}</td>
                      <td>{consulta.consultas}</td>
                      <td>
                        <Link className='me-2'>
                          <button className='btn btn-info'>
                            Editar
                          </button>
                        </Link> 
                        <button className='btn btn-info'>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </Table>
          ) : (
            <p className='text-center text-danger fs-5 fw-bold'>Paciente sin consultas!</p>
          )
        ) : (
          <p className='text-center'>Cargando...</p>
        )}
      </div>
    </>
  );
  
}
