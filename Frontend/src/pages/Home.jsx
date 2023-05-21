import React from 'react'
import {Pacientes} from '../components/Pacientes'
import { AgregarPaciente } from '../components/AgregarPaciente'

export function Home({ pacientes, loading }) {
  return (
    <>
     <AgregarPaciente />
     <Pacientes pacientes={pacientes} loading={loading}/>
    </>
    )
}
