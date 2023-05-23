import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import pacienteRouter from './routes/paciente.routes'
import consultaRouter from './routes/consulta.routes'
import passwordRouter from './routes/password.routes'

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(pacienteRouter)
app.use(consultaRouter)
app.use(passwordRouter)

export default app