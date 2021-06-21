const layout = require('../views/layout')

const homePage = `

   <h1>Hello World!</h1>
   <a href="/about">About</a>
   <a href="/catalog">Catalog</a>
   <p>This is my Simple Website</p>
   <a><iframe width="555" height="333" src="https://www.youtube.com/embed/l9YxTXDiiFY" 
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
   encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>`;

module.exports = (req, res) => {
  res.write(layout(homePage));
  res.end();
};
