import axios from "axios"

export const getConsulta = (id) => {
  const res = axios.get(`http://localhost:3000/consultas/${id}`)
  return res.then(response => response.data)
}