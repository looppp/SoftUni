import { useState } from "react";

export default function Timer(props) {
  const [time, setTime] = useState(props.startTime);

  // note Dont use SetTimeout,  useEffect is more appropriate
  setTimeout(() => {
    setTime(time + 1);
  }, 2000);

  return (
    <div>
      <h3>Timer</h3>

      <p>{time}</p>
    </div>
  );
}
