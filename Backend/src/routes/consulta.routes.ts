import { Router } from "express";
import { createConsulta, deleteConsulta, getConsulta, getConsultas, updateConsulta } from "../controllers/consultas.controllers";
const router = Router()

router.post('/consultas/:id', createConsulta)

router.get('/consultas/:id', getConsultas)

router.get('/consultas/:id_paciente/:id_consulta', getConsulta)

router.put('/consultas/:id_paciente/:id_consulta', updateConsulta)

router.delete('/consultas/:id_paciente/:id_consulta', deleteConsulta)

export default router;