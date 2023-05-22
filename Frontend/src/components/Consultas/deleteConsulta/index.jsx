import React from 'react'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom'
import { Modals } from '../../Modal'
import { deleteConsultas } from '../../../service/Consultas/deleteConsultas'

export  function DeleteConsulta({ deleteConsulta, handleCloseDelete }) {
  const { id, id_consulta } = useParams()
  const handleDelete = () => {
    deleteConsultas(id, id_consulta)
      .then(window.location.reload(true))
  }
  return (
    deleteConsulta
      ? <Modals
          title='Eliminar Consulta'
          show={deleteConsulta}
          handleClose={handleCloseDelete}
        >
          <p>Estas seguro que quieres eliminar la consulta?</p>
          <div className="d-flex justify-content-end">
            <Button className="btn btn-primary me-4" type='button' onClick={handleCloseDelete}>Cancelar</Button>
            <Button className="btn btn-primary" type='submit' onClick={handleDelete}>Confirmar</Button>
        </div>
        </Modals>
      : null
  )
}
