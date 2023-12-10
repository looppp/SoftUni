import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import LastestGame from "./latest-game/LatestGame";

export default function Home() {
  const [latestGames, setLatestGames] = useState([]);

  useEffect(() => {
    gameService.getLatest().then((result) => setLatestGames(result));
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>

        {latestGames.map((game) => (
          <LastestGame {...game} />
        ))}

        {!latestGames.length && <p className="no-articles">No games yet</p>}
      </div>
    </section>
  );
}
