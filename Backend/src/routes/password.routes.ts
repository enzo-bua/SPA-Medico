import { Router } from "express";
import { getPassword } from "../controllers/password.controllers";
const router = Router()

router.get('/password', getPassword)

export default router;