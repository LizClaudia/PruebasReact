import React from "react";
import Card from "../../shared/cards/card.component";

const MainContentComponent: React.FC = () => {
  const cards = [
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    { title: "Card 4", description: "Description 4" },
    { title: "Card 5", description: "Description 5" },
    { title: "Card 6", description: "Description 6" },
    { title: "Card 7", description: "Description 7" },
    { title: "Card 8", description: "Description 8" },
  ];
  return (
    <div className="App-grid">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
      
    </div>
  );
};

export default MainContentComponent;
