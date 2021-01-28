import React from 'react';
import { NavBar } from "./components"
import './App.css'
import AppLogic from "./AppLogic"

const App = () => {
  const { user } = AppLogic()

  return (
    <>
      <NavBar user={user} />
    </>
  )
}

export default App;
