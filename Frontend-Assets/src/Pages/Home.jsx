/* eslint-disable no-unused-vars */
import React from 'react'
import { doSignOut } from '../firebase/auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate=useNavigate()

const logout=()=>{
  doSignOut()
  .then(() => {
    navigate('/login')
    console.log("Logout successful")
  }).catch(()=>console.log("Logout failed"))

}

  return (
    <div>
      <p>Home</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
