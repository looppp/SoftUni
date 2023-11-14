export default function RecipesContainer() {
  return (
    <section className="recipes-container">
      {/* <!-- tag container --> */}
      <div className="tags-container">
        <h4>recipes</h4>
        <div className="tags-list">
          <a href="tag-template.html">Beef (1)</a>
          <a href="tag-template.html">Breakfast (2)</a>
          <a href="tag-template.html">Carrots (3)</a>
          <a href="tag-template.html">Food (4)</a>
        </div>
      </div>
      {/* <!-- end of tag container --> */}
      {/* <!-- recipes list --> */}
      <div className="recipes-list">
        {/* <!-- single recipe --> */}
        <a href="single-recipe.html" className="recipe">
          <img
            src="./assets/recipes/recipe-1.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Carne Asada</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </a>
        {/* <!-- end of single recipe --> */}
        {/* <!-- single recipe --> */}
        <a href="single-recipe.html" className="recipe">
          <img
            src="./assets/recipes/recipe-2.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Greek Ribs</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </a>
        {/* <!-- end of single recipe --> */}
        {/* <!-- single recipe --> */}
        <a href="single-recipe.html" className="recipe">
          <img
            src="./assets/recipes/recipe-3.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Vegetable Soup</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </a>
        {/* <!-- end of single recipe --> */}
        {/* <!-- single recipe --> */}
        <a href="single-recipe.html" className="recipe">
          <img
            src="./assets/recipes/recipe-4.jpeg"
            className="img recipe-img"
            alt=""
          />
          <h5>Banana Pancakes</h5>
          <p>Prep : 15min | Cook : 5min</p>
        </a>
        {/* <!-- end of single recipe --> */}
      </div>
      {/* <!-- end of recipes list --> */}
    </section>
  );
}
