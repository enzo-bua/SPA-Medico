import { Router } from "express";
import { createPaciente, deletePaciente, getPaciente, getPacientes, updatePaciente } from "../controllers/paciente.controllers";
const router = Router();

router.post('/pacientes', createPaciente)

router.get('/pacientes', getPacientes)

router.get('/pacientes/:id', getPaciente)

router.put('/pacientes/:id', updatePaciente)

router.delete('/pacientes/:id', deletePaciente)

export default router