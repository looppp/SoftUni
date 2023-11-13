import "./App.css";

function App() {
  let numbers = [1, 2, 3, 4, 5];
  let doubleNumbers = numbers.map((number) => <li>{number * 2}</li>);

  return (
    <div>
      <ul>{doubleNumbers}</ul>
    </div>
  );
}

export default App;
