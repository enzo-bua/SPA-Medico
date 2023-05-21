import axios from "axios"

export const getPacientes = () => {
  const res = axios.get('http://localhost:3000/pacientes')
  return res.then(response => response.data)
}