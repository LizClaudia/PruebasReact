import React from 'react'
import Header from './header/header.component'

import MainContentComponent from './main_content/main_content.component'
import ButtonComponent from '../shared/button/button.component'

function MainComponent() {
  return (
   <div>
    <Header></Header>
    <MainContentComponent></MainContentComponent>
    <ButtonComponent></ButtonComponent>
   </div>
  )
}

export default MainComponent