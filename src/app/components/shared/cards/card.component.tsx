import React from 'react'

interface CardProps {
    title: string;
    description: string;
    user: number;

}
const Card: React.FC<CardProps> = ({ title, description, user }) => {
    return (
      <div className="App-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>User: {user}</p>
      </div>
    );
  };

  export default Card;


