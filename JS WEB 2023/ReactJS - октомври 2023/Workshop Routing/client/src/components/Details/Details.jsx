import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from "../../services/gameService";

export default function Details() {
  const { gameId } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    gameService.getOne(gameId).then(setGame);
  }, [gameId]);

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>
      </div>
    </section>
  );
}
