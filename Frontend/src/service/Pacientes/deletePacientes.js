import axios from "axios"

export const deletePacientes = (id) => {
  const res = axios.delete(`http://www.localhost:3000/pacientes/${id}`)
  return res.then(response => response.data)
}