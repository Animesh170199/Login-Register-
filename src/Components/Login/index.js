import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../Home";
function Login() {
  const [EmailLog, setEmailLog] = useState("");
  const [PasswordLog, setPasswordLog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogIn(e) {
    e.preventDefault();
    const mail = JSON.parse(localStorage.getItem("Email"));
    const pass = JSON.parse(localStorage.getItem("password"));
    console.log(pass, "Empty", mail);

    if (!EmailLog || !PasswordLog) {
      setFlag(true);
    } else if (PasswordLog !== pass || EmailLog !== mail) {
      setFlag(true);
    } else {
      setFlag(false);
      setHome(!home);
    }
  }

  if (!home) {
    return <Home />;
  }

  return (
    <div>
      <form onSubmit={handleLogIn}>
        <h1>Log In!!</h1>
        <div className="form-group">
          <label style={{ width: 600, marginTop: 20 }}>Email</label>
          <input
            type="email"
            onChange={(e) => setEmailLog(e.target.value)}
            placeholder="Enter Email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label style={{ width: 600, marginTop: 20 }}>Password</label>
          <input
            type="password"
            onChange={(e) => setPasswordLog(e.target.value)}
            placeholder="Enter password"
            className="form-control"
          />
        </div>
        {flag && (
          <Alert color="primary" variant="danger">
            Please fill correct login details
          </Alert>
        )}
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
          onSubmit={handleLogIn}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
