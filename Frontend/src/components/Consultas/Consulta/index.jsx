import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getConsultas } from '../../../service/Consultas/getConsultas'
import { Link, useParams } from 'react-router-dom'
import UpdateConsulta from '../UpdateConsulta';
import { DeleteConsulta } from '../deleteConsulta';

export default function Consulta() {
  const [consultas, setConsultas] = useState([])
  const [loading, setLoading] = useState(false)
  const [openConsulta, setOpenConsulta] = useState(false)
  const [deleteConsulta, setDeleteConsulta] = useState(false)

  const { id, id_consulta } = useParams()

  const handleCloseDelete = () => setDeleteConsulta(false);
  const handleOpenDelete = () => setDeleteConsulta(true);

  const handleCloseUpdate = () => setOpenConsulta(false);
  const handleOpenUpdate = () => setOpenConsulta(true);

  useEffect(() => {
    getConsultas(id)
      .then(res => {
        setConsultas(res)
        setLoading(true)
      })
  },[id])

  return (
    <>    
      <Link to="/">
        <button className="btn btn-primary  ms-5">
          Volver
        </button>
      </Link>
      <div className="d-flex justify-content-center align-items-center ">
        {loading ? (
          consultas.length > 0 
            ? (
              <Table striped bordered hover className='mt-5'>
                <thead className='bg-secondary' >
                  <tr className='text-center'>
                    <th>#</th>
                    <th>Fecha</th>
                    <th >Consulta</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {consultas.map((consulta) => (
                    <tr key={consulta.id} className='text-center'>
                      <td>{consulta.consulta_paciente}</td>
                      <td className=''>{consulta.createdAt.slice(0, 10)}</td>
                      <td className="text-truncate" style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', whiteSpace: 'pre-line'}}>{consulta.consultas}</td>
                      <td>
                        <Link to={`/consultas/${id}/${consulta.id}`} className='me-2'>
                          <button className='btn btn-info' onClick={handleOpenUpdate}>
                            Editar
                          </button>
                        </Link> 
                        <Link to={`/consultas/${id}/${consulta.id}`}>
                        <button className='btn btn-info' onClick={handleOpenDelete}>
                          Eliminar
                        </button>
                        </Link>
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

      {
        openConsulta
          ? <UpdateConsulta openConsulta={openConsulta} handleCloseUpdate={handleCloseUpdate}/> 
          : null
      }
      {
        deleteConsulta
          ? <DeleteConsulta deleteConsulta={deleteConsulta} handleCloseDelete={handleCloseDelete}/>
          : null
      }
    </>
  );
  
}
