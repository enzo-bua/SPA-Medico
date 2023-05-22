import axios from "axios"

export const updateConsultas = (id, id_consulta, newObject) => {
  const res = axios.put(`http://www.localhost:3000/consultas/${id}/${id_consulta}`, newObject)
  return res.then(response => response.data)
}