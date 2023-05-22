import React, { useContext, useState } from 'react'
import { userContext } from '../../context/user'
import { Modals } from '../Modal';
import { Button } from 'react-bootstrap';

export function CerrarSesion() {
  const { removeAuth } = useContext(userContext)
  const [openSesion, setOpenSesion] = useState(false)

  const handleClose = () => setOpenSesion(false);
  const handleOpen = () => setOpenSesion(true);

  const handleCerrarSesion = () => {
    removeAuth()
  }
  return (
    <>
      <Button onClick={handleOpen} className='btn-dark float-end me-4 mt-4'>
        Cerrar Sesion
      </Button>

      {
        openSesion 
      ? <Modals
          title='Cerrar Sesion'
          show={openSesion}
          handleClose={handleClose}
        > 
          <div className="d-flex justify-content-end">
            <Button className="btn btn-primary me-4" type='button' onClick={handleClose}>Cancelar</Button>
            <Button className="btn btn-primary" type='submit' onClick={handleCerrarSesion}>Confirmar</Button>
          </div>
        </Modals>
      : null
      }
    </>
  )
}
