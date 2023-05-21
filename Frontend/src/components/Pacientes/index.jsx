import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
export function Pacientes({ pacientes, loading }) {
  return (
    <Table striped bordered hover className='mt-5'>
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
                ? pacientes.map((paciente) => (
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
                      <td><button className='btn btn-info'>ed</button></td>
                    </tr>
                  ))
                  : <p className='text-center'>Cargando...</p>
                }
        </tbody>
    </Table>  
  )
}
