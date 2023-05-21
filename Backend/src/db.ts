import { DataSource } from "typeorm";
import { Paciente } from './entities/Paciente'
import { Consulta } from "./entities/Consulta";

//conexion de base de datos
export  const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'buabua123',
  port: 5432,
  database: 'proyect-medico',
  entities: [Paciente, Consulta],
  logging: true,
  synchronize: true
})