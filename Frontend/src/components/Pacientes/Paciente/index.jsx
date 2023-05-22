import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { UpdatePaciente } from '../UpdatePaciente';
import { DeletePaciente } from '../DeletePaciente';
export function Paciente({ pacientes, loading }) {

  const [openDelete, setOpenDelete] = useState(false);
  const [show, setShow] = useState(false);

  const [search, setSearch] = useState('')

 
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenDelete = () => setOpenDelete(true);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const results = search 
    ? pacientes.filter((paciente) => paciente.dni.includes(search)) 
    : pacientes

  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <label className="fw-bold mb-2 mt-3">Buscar por DNI</label>
        <input className="form-control w-25 border border-primary" type="text" value={search} onChange={handleChange} />
      </div>
      <Table striped bordered hover className='mt-4'>
          <thead className='bg-secondary'>
            <tr className='text-center'>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Localidad</th>
              <th>Fecha Nac</th>
              <th>Dni</th>
              <th>Edad</th>
              <th>Telefono</th>
              <th>Obra Social</th>
              <th>Consultas</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
              {
                loading
                  ? results.map((paciente) => (
                      <tr key={paciente.id} className='text-center'>
                        <td>{paciente.id}</td>
                        <td>{paciente.nombre}</td>
                        <td>{paciente.apellido}</td>
                        <td>{paciente.localidad}</td>
                        <td>{paciente.fecha_nacimiento}</td>
                        <td>{paciente.dni}</td>
                        <td>{paciente.edad}</td>
                        <td>{paciente.telefono}</td>
                        <td>{paciente.obra_social}</td>
                        <td>
                          <Link to={`/consultas/${paciente.id}`}>
                            <button className='btn btn-info'>
                              Consultas
                            </button>
                          </Link> 
                        </td>
                        <td>
                          <Link to={`/${paciente.id}`}>
                            <button className='btn btn-info me-2' onClick={handleShow}>
                              Editar
                            </button> 
                          </Link>
                          <Link to={`/${paciente.id}`}>
                            <button className='btn btn-info' onClick={handleOpenDelete}>
                              Eliminar
                            </button> 
                          </Link>
                        </td>
                      </tr>
                    ))
                    : <p className='text-center'>Cargando...</p>
                  }
          </tbody>
      </Table>  
      {
        show
          ? <UpdatePaciente show={show} handleClose={handleClose}/>
          :null
      }
      {
        openDelete 
        ? <DeletePaciente openDelete={openDelete} handleCloseDelete={handleCloseDelete}/>
        : null
      }
    </>
  )
}
