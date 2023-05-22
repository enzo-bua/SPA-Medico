import axios from "axios"

export const updatePacientes = (id, newObject) => {
  const res = axios.put(`http://localhost:3000/pacientes/${id}`, newObject)
  return res.then(response => response.data)
}
