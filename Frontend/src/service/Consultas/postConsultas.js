import axios from "axios"

export const postConsultas = (id, newObject) => {
  const req = axios.post(`http://www.localhost:3000/consultas/${id}`, newObject)
  return req.then(resposnse => resposnse.data)
}