import { useRef, useState } from "react";

const login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState<any>(null);

  const handleLogin = async () => {
    console.log(emailRef.current?.value, passRef.current?.value);
    const resp = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passRef.current?.value
      })
    });
    const json = await resp.json();
    console.log(json);
    setMessage(json);
  };

  return (
    <div>
      <h1>{message && JSON.stringify(message)}</h1>
      <input type="text" placeholder="email" ref={emailRef} />
      <input type="password" placeholder="password" ref={passRef} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default login;
