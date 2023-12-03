import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import GameListItem from "./Game-list-item/GameListItem";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((games) => setGames(games));

    console.log(games);
  }, []);

  return (
    <section id="catalog-page">
      {games.map((game) => (
        <GameListItem key={game._id} {...game} />
      ))}

      {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
}
