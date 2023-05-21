import './index.css'
import React, { useState } from 'react'

import { Modals } from '../Modal';
import { FormPaciente } from '../FormPaciente';
export function AgregarPaciente() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="text-center">
        <button className="btn btn-primary mt-3" onClick={handleShow}>Cargar Paciente</button>
      </div>
      {
        show 
        ? <Modals
            title="Aregar Pacientes"
            handleClose={handleClose}
            show={show}
          >   
            <FormPaciente />
          </Modals>
            
        : null
      }
    </>
  )
}
