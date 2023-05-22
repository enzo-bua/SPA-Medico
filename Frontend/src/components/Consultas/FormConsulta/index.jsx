import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postConsultas } from '../../../service/Consultas/postConsultas';
import { useParams } from 'react-router-dom';

export function FormConsulta() {
  const form = useRef()
  const { id } = useParams()
  const [error, setError] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    
    const capitalizedFormData = {
      consultas: formData.get('consultas').toUpperCase(),
    };
  
    if (capitalizedFormData.consultas !== '') {
      postConsultas(id, capitalizedFormData)
        .then(() => window.location.reload(true))
    } else {
      setError('Complete el campo');
    }
  };
  
  return (
    <Form ref={form} onSubmit={handleSubmit}> 
      <Form.Label htmlFor="disabledTextInput">Consulta</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Ingrese la consulta.."
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
