import React from 'react';
import { NavBar } from "../components"
import './App.css'
import AppLogic from "./AppLogic"
import { StoriesContainer, AddButton } from './AppElements';

const App = () => {
  const { user, renderStories, createStoryView } = AppLogic()

  return (
    <>
      <NavBar user={user} />
      <StoriesContainer>
        <AddButton onClick={createStoryView}><p>+</p></AddButton>
        {renderStories()}
      </StoriesContainer>
    </>
  )
}

export default App;
