import axios from "axios"

export const getPaciente = (id) => {
  const res = axios.get(`http://localhost:3000/pacientes/${id}`)
  return res.then(response => response.data)
}