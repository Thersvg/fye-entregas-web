import React from 'react'
import ReactDOM from 'react-dom/client'
import './GlobalStyle.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './Pages/Home/Home.jsx'
import { Profile } from './Pages/Profile/Profile.jsx'
import { GlobalStyled } from './GlobalStyle.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import {AuthenticateLogin } from './Pages/Authentication/AuthLogin.jsx'
import { AuthenticateCadastrar } from './Pages/Authentication/AuthCadastrar.jsx'
import EmpresaProvider from './Context/EmpresaContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
    ],
  },
  
  {
    path: "/login",
    element: <AuthenticateLogin />
  },
  {
    path: "/cadastrar",
    element: <AuthenticateCadastrar />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled/>
    <EmpresaProvider>
    <RouterProvider router={router}/>
    </EmpresaProvider>
  </React.StrictMode>,
)
