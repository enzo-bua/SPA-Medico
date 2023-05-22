import React, { useContext, useEffect, useState } from 'react'
import { getUsuario } from '../../service/Usuario'
import { userContext } from '../../context/user'
import { useNavigate } from 'react-router-dom'
export function Usuario() {

  const { activateAuth } = useContext(userContext)
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getUsuario()
    .then(res => {
      setUser(res)
    })
  },[])

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    if (user[0].password === password) {
      activateAuth()
      window.sessionStorage.setItem('token', 'active')
      navigate('/')
    } else {
      setError('Contraseña invalida')
    } 
  }
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="text-center" onSubmit={handleSumbit}>
        <h3>Bienvenido</h3>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Ingrese su contraseña</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handleChange} />
        </div>
        {error && <p className='text-danger'>{error}</p>}
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
    )
}
