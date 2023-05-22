import axios from "axios"

export const deleteConsultas = (id, id_consulta) => {
  const res = axios.delete(`http://www.localhost:3000/consultas/${id}/${id_consulta}`)
  return res.then(response => response.data)
}