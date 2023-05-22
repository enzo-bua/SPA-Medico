import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { getPaciente } from '../../../service/Pacientes/getPaciente'
export function FormUpdatePaciente() {
  const [paciente, setPaciente] = useState([])
  const [error, setError] = useState('')
  const { id } = useParams()
  const form = useRef()

  useEffect(() => {
    getPaciente(id)
    .then(res => {
      setPaciente(res)
    })
  },[id])

  const handleUpdate = (e) => {
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
      updatePacientes(id, newObject)
        .then(window.location.reload(true))
    } else {
      setError('Complete todos los campos!')
    }
  }
  
  return (
    <Form ref={form} onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
          <Form.Control type='text' defaultValue={paciente.nombre} id="disabledTextInput" name='nombre' placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
          <Form.Control type='text' defaultValue={paciente.apellido} id="disabledTextInput" name='apellido' placeholder="Ingrese apellido" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Localidad</Form.Label>
          <Form.Control type='text' defaultValue={paciente.localidad} id="disabledTextInput" name='localidad' placeholder="Ingrese localidad" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Fecha de Nacimiento</Form.Label>
          <Form.Control type='text' defaultValue={paciente.fecha_nacimiento} id="disabledTextInput" name='fecha_nacimiento' placeholder="Ingrese fecha de nacimiento" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Dni</Form.Label>
          <Form.Control type='text' defaultValue={paciente.dni} id="disabledTextInput" name='dni' placeholder="Ingrese dni" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Edad</Form.Label>
          <Form.Control type='text' defaultValue={paciente.edad} id="disabledTextInput" name='edad' placeholder="Ingrese edad " />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Telefono</Form.Label>
          <Form.Control type='text' defaultValue={paciente.telefono} id="disabledTextInput" name='telefono' placeholder="Ingrese telefono" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Obra Social</Form.Label>
          <Form.Control type='text' defaultValue={paciente.obra_social} id="disabledTextInput" name='obra_social' placeholder="Ingrese obra social" />
        </Form.Group> 
        <div class="text-center">
          {error && <p className='text-danger'>{error}</p>}
          <Button class="btn btn-primary" type='submit'>Actualizar</Button>
        </div>
    </Form>
  )
}