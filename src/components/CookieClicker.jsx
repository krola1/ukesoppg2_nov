// useState is a React "hook". It lets a component REMEMBER a value
// (like a number) and update the screen when that value changes.
import { useState } from "react";

// A simple clicker game: every click on the cookie adds 1 to a counter.
export default function CookieClicker() {
  // create state
  // useState(0) creates a value that starts at 0.
  // It gives back two things:
  //   count    -> the current value (read it)
  //   setCount -> a function to change the value (write it)
  // Every time we call setCount, React re-renders (redraws) the component
  // so the new number shows up on the screen.
  const [count, setCount] = useState(0);

  // create function for updating clicks
  // "prev" is the value count had just before this update.
  // Using prev => prev + 1 is the safe way to update state
  // that depends on its previous value.
  const updateClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    // In JSX the style attribute takes a JavaScript object,
    // which is why there are two sets of curly braces: {{ }}
    <div style={{ border: "solid white" }}>
      {/* onClick tells React which function to run when the button is clicked.
          Note: we write updateClick, NOT updateClick().
          With () it would run right away instead of waiting for a click. */}
      {/* In JSX we write "className" instead of "class",
          because "class" is a reserved word in JavaScript. */}
      <button className="cookie" onClick={updateClick}>
        {/* The image is in the "public" folder, so we can use it directly. */}
        <img className="cookie" src="./cookie-1.png" alt="Image of a Cookie" />
      </button>

      {/* Curly braces { } let us put JavaScript values inside JSX. */}
      <h3>you have clicked {count} times</h3>
    </div>
  );
}
