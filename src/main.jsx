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
import Cookies from 'js-cookie'
import { GetEmailClient } from './Pages/Recover/EtapaEmail.jsx'
import { VerifyCodeClient } from './Pages/Recover/EtapaVerifyCode.jsx'
import { NewPasswordClient } from './Pages/Recover/EtapaNewPassword.jsx'
import { Welcome } from './Pages/Welcome/Welcome.jsx'


const isTokenPresent = () => {
  const token = Cookies.get('token');
  return !!token; 
};

const PrivateRoute = ({ element }) => {
  const isAuthenticated = isTokenPresent();
  return isAuthenticated ? element :<Welcome />;
};

const isTokenRecover = () => {
  const token = Cookies.get('rY6660v28hf87h3');
  return !!token; 
};

const PrivateRouteRecover = ({ element }) => {
  const isAuthenticatedToModify = isTokenRecover();
  return isAuthenticatedToModify ? element :<Welcome />;
};


const routes = [
  {
    path: '/',
    element: <PrivateRoute element= {<Navbar />}/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <PrivateRoute element= {<Home />}/>,
      },
      {
        path: '/profile',
        element: <PrivateRoute element={<Profile />} />,
      },
    ],
  },

  {
    path: '/welcome',
    element: <Welcome />,
  },  

  {
    path: '/login',
    element: <AuthenticateLogin />,
  },
  {
    path: '/cadastrar',
    element: <AuthenticateCadastrar />,
  },
  {
    path: '/recuperacao',
    element: <GetEmailClient />,
  },
  {
    path: '/verificacao',
    element: <PrivateRouteRecover element={<VerifyCodeClient />}/>,
  },
  {
    path: '/newpassword',
    element: <PrivateRouteRecover element={<NewPasswordClient />}/>,
  },
];


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <EmpresaProvider>
      <RouterProvider router={router} />
    </EmpresaProvider>
  </React.StrictMode>,
);