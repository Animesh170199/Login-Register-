import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "../Login";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [lastname, setLastName] = useState("");
  const [LogIn, setLogIn] = useState(true);
  const [flag, setFlag] = useState(false);

  //   function handleChange(e) {
  //     e.preventDefault();
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("FirstName", JSON.stringify(firstname));
      localStorage.setItem("LastName", JSON.stringify(lastname));
      localStorage.setItem("password", JSON.stringify(password));
      localStorage.setItem("phoneNumber", JSON.stringify(phone));
      console.log("Saved to local storage");
      setLogIn(!LogIn);
    }
  }
  function handleClick() {
    setLogIn(!LogIn);
  }
  return (
    <div>
      {LogIn ? (
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form-group">
            <label style={{ width: 600, marginTop: 20 }}>First Name</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label style={{ width: 600, marginTop: 20 }}>Last Name</label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label style={{ width: 600, marginTop: 20 }}>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label style={{ width: 600, marginTop: 20 }}>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label style={{ width: 600, marginTop: 20 }}>
              Confirm Password{" "}
            </label>
            <input
              className="form-control"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group">
            <label style={{ width: 600, marginTop: 20 }}>Phone Number</label>
            <input
              className="form-control"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone Number"
            />
          </div>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
            onSubmit={handleSubmit}
          >
            Register
          </button>
          <h4 onClick={handleClick}> Already Registered login in ?{""} </h4>
          {flag && (
            <Alert color="primary" variant="danger">
              Please fill every field first
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Register;
