import { useContext, useEffect, useState } from "react"
import { getPacientes } from "./service/Pacientes/getPacientes"
import { Home} from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { Consultas } from "./pages/Consultas"
import { Usuario } from "./components/Usuario/login"
import { userContext } from "./context/user"

function App() {

  const { isAuth } = useContext(userContext)
  console.log(isAuth)
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getPacientes()
    .then(res => {
      setPacientes(res)
      setLoading(true)
    })
  },[])

  return (
    <>
    {
      isAuth
        ? <Routes>
           <Route path="/:id?" element={<Home pacientes={pacientes} loading={loading}/>} />
           <Route path="/consultas/:id?/:id_consulta?" element={<Consultas />} />
          </Routes>
        : <Usuario />
    }
    
    
    </>
  )
}

export default App
