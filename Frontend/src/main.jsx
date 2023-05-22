import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import userContext from './context/user'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <userContext.Provider>
    <App />
  </userContext.Provider>
  </BrowserRouter>,
)
