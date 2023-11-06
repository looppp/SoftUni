import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

var rootDomElement = document.getElementById("root");

var root = ReactDOM.createRoot(rootDomElement);

// const Footer = () => {
//   return React.createElement(
//     "div",
//     { className: "site-footer" },
//     React.createElement("p", "{}", "All rights reserved by &copy")
//   );
// };

var Footer = function Footer() {
  return React.createElement(
    "div",
    { className: "site-footer" },
    "All rights reserved \xA9"
  );
};
var headerJSX = React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
      "h1",
      null,
      "Hello from JSX!"
    ),
    React.createElement(
      "h2",
      null,
      "The best JSX ever"
    ),
    React.createElement(
      "p",
      null,
      "My name is Slim shady"
    ),
    React.createElement(
      "p",
      null,
      "Hello WORL"
    )
  ),
  React.createElement(Footer, null)
);

root.render(headerJSX);