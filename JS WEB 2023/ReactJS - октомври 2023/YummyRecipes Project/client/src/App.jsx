import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RecipesContainer from "./components/RecipesContainer";

function App() {
  return (
    <div>
      <Navigation />
      <main className="page">
        <Header />
        <RecipesContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
