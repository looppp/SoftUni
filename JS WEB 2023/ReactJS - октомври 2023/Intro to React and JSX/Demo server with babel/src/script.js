import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

const rootDomElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootDomElement);

// const Footer = () => {
//   return React.createElement(
//     "div",
//     { className: "site-footer" },
//     React.createElement("p", "{}", "All rights reserved by &copy")
//   );
// };

const Footer = () => (
  <div className="site-footer">All rights reserved &copy;</div>
);
const headerJSX = (
  <div>
    <header className="site-header">
      <h1>Hello from JSX!</h1>
      <h2>The best JSX ever</h2>
      <p>My name is Slim shady</p>
      <p>Hello WORL</p>
    </header>

    <Footer />
  </div>
);

root.render(headerJSX);
