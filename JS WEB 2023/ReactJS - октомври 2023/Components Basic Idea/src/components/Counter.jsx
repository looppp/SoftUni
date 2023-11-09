import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  // function reference
  const incrementClickHandler = () => {
    setCount((count) => count + 1);
  };

  const clearOnClick = () => {
    setCount(0);
  };

  //   if (count < 0) {
  //     return <p>This is Incorect!</p>;
  //   }

  let warning = null;

  if (count < 0) {
    warning = <p style={{ color: "red" }}>This number has to be positive!</p>;
  }

  return (
    <div>
      <p>Counter: {count}</p>

      {warning}

      {count > 0 ? <p style={{ background: "green" }}>Valid counter</p> : null}

      {count == 0 && <p style={{ background: "blue" }}>Start incrementing</p>}

      <button onClick={incrementClickHandler}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={clearOnClick}>Clear</button>
    </div>
  );
}
