import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postPacientes } from '../../../service/Pacientes/postPacientes'
export function FormPaciente() {

  const form = useRef()
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    if (
      formData.get('nombre') !== '' &&
      formData.get('apellido') !== '' &&
      formData.get('localidad') !== '' &&
      formData.get('fecha_nacimiento') !== '' &&
      formData.get('dni') !== '' &&
      formData.get('edad') !== '' &&
      formData.get('telefono') !== '' &&
      formData.get('obra_social') !== '' 
    ) {
      const newObject =  {
        'nombre': formData.get('nombre'),
        'apellido': formData.get('apellido'),
        'localidad': formData.get('localidad'),
        'fecha_nacimiento': formData.get('fecha_nacimiento'),
        'dni': formData.get('dni'),
        'edad': formData.get('edad'),
        'telefono': formData.get('telefono'),
        'obra_social': formData.get('obra_social')
      }
      postPacientes(newObject)
        .then(window.location.reload(true))
    } else {
      setError('Complete todos los campos!')
    }
  }

  return (
    <Form ref={form} onSubmit={handleSubmit}> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
          <Form.Control type='text' name='nombre' id="disabledTextInput" placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
          <Form.Control type='text' name='apellido' id="disabledTextInput" placeholder="Ingrese apellido" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Localidad</Form.Label>
          <Form.Control type='text' name='localidad' id="disabledTextInput" placeholder="Ingrese localidad" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Fecha de Nacimiento</Form.Label>
          <Form.Control type='text' name='fecha_nacimiento' id="disabledTextInput" placeholder="Ingrese fecha de nacimiento" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Dni</Form.Label>
          <Form.Control type='text' name='dni' id="disabledTextInput" placeholder="Ingrese dni" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Edad</Form.Label>
          <Form.Control type='text' name='edad' id="disabledTextInput" placeholder="Ingrese edad " />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Telefono</Form.Label>
          <Form.Control type='text' name='telefono' id="disabledTextInput" placeholder="Ingrese telefono" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Obra Social</Form.Label>
          <Form.Control type='text' name='obra_social' id="disabledTextInput" placeholder="Ingrese obra social" />
        </Form.Group> 
        <div className="text-center">
          {error && <p className='text-danger'>{error}</p>}
          <Button type='submit' className="btn btn-primary">Guardar</Button>
        </div>
    </Form>
  )
}
