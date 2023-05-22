import axios from "axios"

export const getUsuario = () => {
  const res = axios.get('http://www.localhost:3000/password')
  return res.then(response => response.data)
}