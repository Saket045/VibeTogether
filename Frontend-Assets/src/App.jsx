/* eslint-disable no-unused-vars */
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import SignUp from './auth/Signup.jsx'
import Login from './auth/Login.jsx'
import { AuthProvider } from './contexts/authContext/index.jsx'
import { Navigate } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <AuthProvider>
      <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/signup' element={ <SignUp/>} />
      <Route path='/login' element={ <Login/>} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
