import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export function FormUpdatePaciente({nombre, apellido, localidad, fecha_nacimiento, dni, edad, telefono, obra_social }) {
  return (
    <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
          <Form.Control type='text' defaultValue={nombre} id="disabledTextInput" placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
          <Form.Control type='text' defaultValue={apellido} id="disabledTextInput" placeholder="Ingrese apellido" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Localidad</Form.Label>
          <Form.Control type='text' defaultValue={localidad} id="disabledTextInput" placeholder="Ingrese localidad" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Fecha de Nacimiento</Form.Label>
          <Form.Control type='text' defaultValue={fecha_nacimiento} id="disabledTextInput" placeholder="Ingrese fecha de nacimiento" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Dni</Form.Label>
          <Form.Control type='text' defaultValue={dni} id="disabledTextInput" placeholder="Ingrese dni" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Edad</Form.Label>
          <Form.Control type='text' defaultValue={edad} id="disabledTextInput" placeholder="Ingrese edad " />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Telefono</Form.Label>
          <Form.Control type='text' defaultValue={telefono} id="disabledTextInput" placeholder="Ingrese telefono" />
        </Form.Group> 
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Obra Social</Form.Label>
          <Form.Control type='text' defaultValue={obra_social} id="disabledTextInput" placeholder="Ingrese obra social" />
        </Form.Group> 
        <div class="text-center">
          <Button class="btn btn-primary">Guardar</Button>
        </div>
    </Form>
  )
}