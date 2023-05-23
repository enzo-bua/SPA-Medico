import { Request, Response } from 'express'
import { Paciente } from '../entities/Paciente'

export const createPaciente = async (req: Request, res: Response) => {
 try {
    const { 
      nombre, 
      apellido, 
      localidad,
      fecha_nacimiento, 
      dni,  
      edad,
      telefono,
      obra_social,
    } = req.body
    const paciente  = new Paciente()
    paciente.nombre = nombre
    paciente.apellido = apellido
    paciente.localidad = localidad
    paciente.fecha_nacimiento = fecha_nacimiento
    paciente.dni = dni
    paciente.edad = edad
    paciente.telefono = telefono 
    paciente.obra_social = obra_social
    
    
    
    await paciente.save()

   return res.json(paciente)
  } catch(error: any) {
    return res.status(500).json({message: error.message})
 }
}

export const getPacientes = async (req: Request, res: Response) => {
 try {
  const pacientes = await Paciente.find()
  return res.json(pacientes)
 } catch (error: any) {
  return res.status(500).json({message: error.message})
 }
} 

export const getPaciente = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
   const paciente = await Paciente.findOneBy({id: parseInt(id)})
   if (paciente === null) {
    return res.status(404).json({ message: 'Paciente not faund'})
   }
   return res.json(paciente)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


export const updatePaciente = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const paciente = await Paciente.findOneBy({id: parseInt(req.params.id)})
    if (!paciente) return res.status(404).json({ message: 'Paciente no existente'})
    
    await Paciente.update({ id: parseInt(id) }, req.body)
    return res.status(204)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deletePaciente = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const results = await Paciente.delete({ id: parseInt(id) })

    if (results.affected === 0) {
     return res.status(404).json({ message: 'Paciente not faund'})
    }
   
    return res.sendStatus(204)
  } catch(error: any) {
    return res.status(500).json({ message: error.message })
  }

}