import { useState } from "react";
// Import our test data (a list of users) from another file.
// The curly braces { } are needed because data.js uses a "named export".
import { mockData } from "../data/data.js";

// Shows a list of users and a form where you can add a new user.
export default function Users() {
  // userData -> the list of all users. It starts out as our mock data.
  const [userData, setUserData] = useState(mockData);

  // One piece of state for each input field.
  // They start as empty strings "" because the fields are empty at first.
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  // Adds a new user to the list.
  const addUser = () => {
    // Make a new user object from what was typed in the input fields.
    const newUser = { username: userName, email: email };

    // IMPORTANT: In React we never change state directly
    // (for example with userData.push(newUser) - that will NOT update the screen).
    // Instead we make a NEW array:
    //   ...userData -> the "spread operator" copies all the old users
    //   newUser     -> then we add the new user at the end
    setUserData([...userData, newUser]);

    // Clear the input fields so they are ready for the next user.
    setUserName("");
    setEmail("");
  };

  // Runs when the form is submitted (button clicked or Enter pressed).
  // "e" is the event object, with information about what happened.
  const onSubmit = (e) => {
    // By default the browser reloads the page when a form is submitted.
    // That would reset all our state, so we stop it with preventDefault().
    e.preventDefault();
    addUser();
  };

  return (
    <>
      <h1>Users</h1>

      <form onSubmit={onSubmit} action="">
        {/* This is called a "controlled input":
            value    -> the input always shows what is in our state
            onChange -> runs every time the user types a letter.
                        e.target.value is the text in the field right now,
                        and we save it in state.
            So React state and the input field are always in sync. */}
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        {/* A button inside a form submits the form when clicked,
            which runs the onSubmit function above. */}
        <button>add</button>
      </form>

      {/* Go through every user in the list and make a box for each one.
          user -> the current user object, for example { username: "Sander", email: "..." }
          i    -> the index, used as a unique "key" so React can tell the items apart */}
      {userData.map((user, i) => (
        <div key={i} style={{ border: "solid white" }}>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </>
  );
}
