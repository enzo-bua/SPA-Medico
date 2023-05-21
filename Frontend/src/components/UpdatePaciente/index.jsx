import React, { useState } from 'react'
import { Modals } from '../Modal';
import { FormUpdatePaciente } from '../FormUpdatePaciente';

export default function UpdatePaciente() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    show 
      ? <Modals
          title="Actualizar Paciente"
          handleClose={handleClose}
          show={show}
        >   
          <FormUpdatePaciente />
        </Modals>
          
      : null
  )
}
