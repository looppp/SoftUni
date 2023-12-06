import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import * as gameService from "../../services/gameService";
import { useNavigate, useParams } from "react-router-dom";

export default function GameEdit() {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [game, setGame] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      setGame(result);
    });
  }, [gameId]);

  const editGameSubmitHandler = async (values) => {
    try {
      await gameService.edit(gameId, values);

      navigate("/games");
    } catch (err) {
      //Error notification
      console.log(err);
    }
  };

  const { values, onChange, onSubmit } = useForm(game, editGameSubmitHandler);

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={onChange}
            value={values.title}
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={onChange}
            value={values.category}
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            onChange={onChange}
            value={values.maxLevel}
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={onChange}
            value={values.imageUrl}
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            onChange={onChange}
            value={values.summary}
            id="summary"
          ></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
}
