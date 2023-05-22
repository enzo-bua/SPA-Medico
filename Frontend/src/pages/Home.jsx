import React from 'react'
import { Paciente } from '../components/Pacientes/Paciente'
import { AgregarPaciente } from '../components/Pacientes/AgregarPaciente'
import { CerrarSesion } from '../components/Usuario/CerrarSesion'
export function Home({ pacientes, loading }) {
  return (
    <>
     <CerrarSesion />
     <AgregarPaciente />
     <Paciente pacientes={pacientes} loading={loading}/>
    </>
    )
}
