import { Modals } from "../../Modal";
import { FormUpdatePaciente } from "../FormUpdatePaciente";

export function UpdatePaciente({ show, handleClose }) {

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
