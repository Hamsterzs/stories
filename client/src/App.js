import React, { useState, useEffect } from 'react';
import { NavBar } from "./components"
import './App.css'

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      let response = await (await fetch("/api/get-user")).json()

      if (response.user) {
        setUser(response.user)
        return
      } else {
        return
      }
    }

    getUser()

  }, [])

  return (
    <>
      <NavBar user={user} />
    </>
  )
}

export default App;
