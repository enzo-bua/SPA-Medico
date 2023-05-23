import { Request, Response } from "express"
import { Consulta } from "../entities/Consulta"
import { Paciente } from "../entities/Paciente"
import { truncate } from "fs";


export const createConsulta = async (req: Request, res: Response) => {  
  try {
    const { consultas } = req.body;
    const pacienteId = parseInt(req.params.id);

    const paciente = await Paciente.findOne({ where: { id: pacienteId } });
    if (!paciente) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    const consulta = new Consulta();
    consulta.consultas = consultas;
    consulta.consulta_paciente = pacienteId;
    consulta.paciente = paciente;
    await consulta.save();
  
    res.status(200).json({ message: "Consulta creada exitosamente" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getConsultas = async (req: Request, res: Response) => {
  try {
    const pacienteId = parseInt(req.params.id);

    const paciente = await Paciente.findOne({ where: { id: pacienteId } });
    if (!paciente) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    const consultas = await Consulta.find({ where: { consulta_paciente: pacienteId } });

    return res.json(consultas);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getConsulta = async (req: Request, res: Response) => {
  try {
    const pacienteId = parseInt(req.params.id_paciente)
    const paciente = await Paciente.find({
      where: {
        id: pacienteId
      }
    })

    if (paciente.length === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    const consulta = await Consulta.find({
      relations: {
        paciente: true
      },
      where: {
        id: parseInt(req.params.id_consulta),
        consulta_paciente: paciente[0].id
      }
    })

    if (consulta.length === 0) {
      return res.status(404).json({ message: "Consulta no encontrada" });
    }

    return res.json(consulta)

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export const updateConsulta = async (req: Request, res: Response) => {
  try {
    const pacienteId = parseInt(req.params.id_paciente);

    const paciente = await Paciente.find({
      where: {
        id: pacienteId
      }
    })

    if (paciente.length === 0) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    const consulta = await Consulta.find({
      relations: {
        paciente: true
      },
      where: {
        id: parseInt(req.params.id_consulta),
        consulta_paciente: paciente[0].id
      }
    })

    if (consulta.length === 0) {
      return res.status(404).json({ message: "Consulta no encontrada" });
    }

    consulta[0].consultas = req.body.consultas; // Actualiza las consultas con los datos enviados en el cuerpo de la solicitud

    await consulta[0].save();

    res.status(200).json({ message: "Consulta actualizada exitosamente" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteConsulta = async (req: Request, res: Response) => {
  const pacienteId = parseInt(req.params.id_paciente)
    const paciente = await Paciente.find({
      where: {
        id: pacienteId
      }
    })

  if (paciente.length === 0) {
    return res.status(404).json({ message: "Paciente no encontrado" });
  }
  
  const consulta = await Consulta.find({
    relations: {
      paciente: true
    },
    where: {
      id: parseInt(req.params.id_consulta),
      consulta_paciente: paciente[0].id
    }
  })

  if (consulta.length === 0) {
    return res.status(404).json({ message: "Consulta no encontrada" });
  }
  
  consulta[0].remove()
  

}



