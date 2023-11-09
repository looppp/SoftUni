import "./App.css";
import MovieList from "./components/MovieList";
import movies from "./assets/movies";
import Timer from "./components/Timer";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>My first Dynamic Application</h1>

      <Counter />
      <Timer startTime={5} />
      <MovieList
        movies={movies}
        heading="This is my Movie List for the Demo "
      />
    </div>
  );
}

export default App;
