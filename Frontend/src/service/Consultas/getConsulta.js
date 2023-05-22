import axios from "axios"

export const getConsulta = (id, id_consulta) => {
  const res = axios.get(`http://www.localhost:3000/consultas/${id}/${id_consulta}`)
  return res.then(response => response.data)
}