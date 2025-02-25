import React, { useEffect, useState } from "react";
import Card from "../../shared/cards/card.component";
import { Post } from "../../../services/posts_service";
import { getPosts } from "../../../utils/getData";

const MainContentComponent: React.FC = () => {
  const [cards, setCard] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => setCard(data));
  }, []);
  return (
    <div className="App-grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.body}
          user={card.userId}
        />
      ))}
    </div>
  );
};

export default MainContentComponent;
