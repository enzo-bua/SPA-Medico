import React from 'react'
import Button from 'react-bootstrap/Button';
import { deletePacientes } from '../../../service/Pacientes/deletePacientes';
import { useParams } from 'react-router-dom';
import { Modals } from '../../Modal';


export function DeletePaciente({ openDelete, handleCloseDelete }) {

  const { id } = useParams()

  const handleDelete = () => {
    deletePacientes(id)
      .then(window.location.reload(true))
  }

  return (
    openDelete
      ? <Modals
          title='Eliminar Paciente'
          show={openDelete}
          handleClose={handleCloseDelete}
        >
          <p>Estas seguro que quieres eliminar el paciente?</p>
          <div className="d-flex justify-content-end">
            <Button className="btn btn-primary me-4" type='button' onClick={handleCloseDelete}>Cancelar</Button>
            <Button className="btn btn-primary" type='submit' onClick={handleDelete}>Confirmar</Button>
        </div>
        </Modals>
      : null
  )
}
