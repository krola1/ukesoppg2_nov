import { useState } from "react";
import { mockData } from "../data/data.js";

export default function Users() {
  const [userData, setUserData] = useState(mockData);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    const newUser = { username: userName, email: email };

    setUserData([...userData, newUser]);
    setUserName("");
    setEmail("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <>
      <h1>Users</h1>

      <form onSubmit={onSubmit} action="">
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
        <button>add</button>
      </form>

      {userData.map((user, i) => (
        <div key={i} style={{ border: "solid white" }}>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </>
  );
}
