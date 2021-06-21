const layout = require('../views/layout');

const aboutPage = `
   <h1>About page </h1>
   <p>info for Website: </p>
   <a href="/">Home</a>
   <a href="/catalog">Catalog</a>`;

module.exports = (req, res) => {
  res.write(layout(aboutPage));
  res.end();
};
