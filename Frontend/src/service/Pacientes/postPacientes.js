import axios from "axios"

export const postPacientes = (newObject) => {
  const res = axios.post('http://localhost:3000/pacientes', newObject)
  return res.then(response => response.data)
}