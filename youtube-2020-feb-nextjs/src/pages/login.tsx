import { useState } from "react";

const login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<any>(null);

  const handleLogin = async () => {
    const resp = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const json = await resp.json();
    console.log(json);
    setMessage(json);
  };

  return (
    <div>
      <h1>{message && JSON.stringify(message)}</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default login;
