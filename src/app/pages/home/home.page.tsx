import React from "react";
import MainContentComponent from "../../components/layout/main_content/main_content.component";
import ButtonComponent from "../../components/shared/button/button.component";
import { useNavigate } from "react-router-dom";

function Home() {
 
    const navigate = useNavigate();
    const handleclkic = async () => {
      navigate("/add_post");
    };
  
  return (
    <div>
      <MainContentComponent></MainContentComponent>
      <ButtonComponent onclick={handleclkic} children='+'></ButtonComponent>
    </div>
  );
}

export default Home;
