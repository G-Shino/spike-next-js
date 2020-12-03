import { useRef, useState } from "react";

const signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<any>(null);

  const handleSignup = async () => {
    const resp = await fetch("http://localhost:3000/api/signup", {
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
      <h1>Create a new User!!</h1>
      <h2>{message && JSON.stringify(message)}</h2>
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
      <button onClick={handleSignup}>signup</button>
    </div>
  );
};

export default signup;
