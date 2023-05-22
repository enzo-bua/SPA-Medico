import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import { getConsulta } from '../../../service/Consultas/getConsulta'
import { updateConsultas } from '../../../service/Consultas/updateConsultas';

export default function FormUpdateConsulta() {

  const { id, id_consulta } = useParams()
  const form = useRef()

  const [consulta, setConsulta] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getConsulta(id, id_consulta)
    .then(res => {
      setConsulta(res[0])
    })
  },[id_consulta])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    
    const capitalizedFormData = {
      consultas: formData.get('consultas').toUpperCase(),
    };
  
    if (capitalizedFormData.consultas !== '') {
      updateConsultas(id, id_consulta, capitalizedFormData)
        .then(() => window.location.reload(true))
    } else {
      setError('Complete el campo');
    }
  };
  
  return (
    <Form ref={form} onSubmit={handleSubmit}> 
    <Form.Label htmlFor="disabledTextInput">Modificar Consulta</Form.Label>
      <Form.Control
        as="textarea"
        defaultValue={consulta.consultas}
        name='consultas'
        style={{ height: '100px' }}
      />
      <div className="text-center">
        {error && <p className='text-danger'>{error}</p>}
        <Button type='submit' className="btn btn-primary mt-3">Guardar</Button>
      </div>
   </Form>
  )
}
