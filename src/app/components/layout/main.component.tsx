import React, { useEffect } from 'react'
import Header from './header/header.component'

import MainContentComponent from './main_content/main_content.component'
import ButtonComponent from '../shared/button/button.component'
import { useNavigate } from 'react-router-dom'



function MainComponent() {
  const navigate = useNavigate();
  const handleclkic = async ()=>{
  navigate('/addpost');
  }
  return (
   <div>
    <Header></Header>
    <MainContentComponent></MainContentComponent>
    <ButtonComponent onclick={handleclkic}></ButtonComponent>
   </div>
  )
}

export default MainComponent