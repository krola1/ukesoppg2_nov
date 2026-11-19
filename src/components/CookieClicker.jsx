import { useState } from "react";

export default function CookieClicker() {
  // create state
  const [count, setCount] = useState(0);

  // create function for updating clicks
  const updateClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ border: "solid white" }}>
      <button className="cookie" onClick={updateClick}>
        <img className="cookie" src="./cookie-1.png" alt="Image of a Cookie" />
      </button>
      <h3>you have clicked {count} times</h3>
    </div>
  );
}
