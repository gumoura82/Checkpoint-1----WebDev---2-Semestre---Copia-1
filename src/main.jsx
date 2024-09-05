import React from 'react'
import ReactDOM from 'react-dom/client'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import './index.css'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
    children:[
      {index: true, element: <Home/>},
      {path:'sobre', element: <Sobre/>},
      {path:'contato', element: <Contato/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
