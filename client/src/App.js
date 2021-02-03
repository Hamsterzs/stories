import React from 'react';
import { NavBar } from "./components"
import './App.css'
import AppLogic from "./AppLogic"

const App = () => {
  const { user, renderStories } = AppLogic()

  return (
    <>
      <NavBar user={user} />
      <div style={{ width: "100vw", height: "87vh", position: "absolute", top: "100px", zIndex: "10", display: "flex", flexDirection: "column", alignItems: "center", overflow: "scroll" }}>
        {renderStories()}
      </div>
    </>
  )
}

export default App;
