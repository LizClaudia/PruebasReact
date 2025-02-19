import React from 'react'

interface CardProps {
    title: string;
    description: string;

}
const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
      <div className="App-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  export default Card;


