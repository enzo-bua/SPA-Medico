import React, { useState } from 'react'
import { Modals } from '../../Modal';
import { FormConsulta } from '../FormConsulta';

export default function AgregarConsulta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='text-center'>
        <button className='btn btn-primary mt-5' onClick={handleShow}>Cargar Consulta</button>
      </div>

      {
        show  
        ? <Modals
            show={show}
            handleClose={handleClose}
            title='Cargar Consulta'

          >
            <FormConsulta />
          </Modals>
        :null
      }
    </>
    )
}
