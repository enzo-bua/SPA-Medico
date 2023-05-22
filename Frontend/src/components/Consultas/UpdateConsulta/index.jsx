import { Modals } from "../../Modal";
import FormUpdateConsulta from "../FormUpdateConsulta";


export default function UpdateConsulta({ openConsulta, handleCloseUpdate }) {

  return (
    openConsulta
      ? <Modals
          title='Actualizar Consulta'
          show={openConsulta}
          handleClose={handleCloseUpdate}
        >
          <FormUpdateConsulta />
        </Modals>
      : null
  )
}
