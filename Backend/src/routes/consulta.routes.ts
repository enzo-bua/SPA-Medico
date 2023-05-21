import { Router } from "express";
import { createConsulta, getConsulta, getConsultas, updateConsulta } from "../controllers/consultas.controllers";
const router = Router()

router.post('/consultas/:id', createConsulta)

router.get('/consultas/:id', getConsultas)

router.get('/consultas/:id_paciente/:id_consulta', getConsulta)

router.put('/consultas/:id_paciente/:id_consulta', updateConsulta)

export default router;