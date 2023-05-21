import { useEffect, useState } from "react"
import { getPacientes } from "./service/getPacientes"
import { Home} from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { Consultas } from "./pages/Consultas"

function App() {

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
    <Routes>
      <Route path="/" element={<Home pacientes={pacientes} loading={loading}/>} />
      <Route path="/consultas/:id?" element={<Consultas />} />
    </Routes>
      
    </>
  )
}

export default App
