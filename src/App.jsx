import { useState } from "react";
import Footer from "./assets/components/Footer";

import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showError, setShowError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [finalMessage, setFinalMessage] = useState(false);
  const [formScreen, setFormScreen] = useState(true);
  

  const handleSubmit = (event) => {

    event.preventDefault();

    if (password.length < 8) {
      setShowError(true);
    } else if (password !== passwordCheck) {
      setShowPasswordError(true);
    } else {
      setFinalMessage(true);
      setFormScreen(false);

    }
  };
  
  return (
    <>
        {formScreen && (
          <div>

        <h1>Create account</h1>

       <form onSubmit={handleSubmit} className="form">
          <span>Name</span>
        <input type="text" placeholder="Jean Dupont" name="username" value={username} onChange={(event) => {
            setUsername(event.target.value);
          }}/>
          <span>Email</span>
        <input type="email" placeholder="jeandupont@lereacteur.io" name="email" value={email} onChange={(event) => {
            setEmail(event.target.value);
          }}/>
          <span>Password</span>
        <input className={showPasswordError ? "redBorder" : ""} type="password" placeholder="azerty" name="password" value={password} onChange={(event) => {
            setPassword(event.target.value);
          }}/>
          <span>Confirm your password</span>
        <input className={showPasswordError ? "redBorder" : ""} type="password" placeholder="azerty" name="passwordCheck" value={passwordCheck} onChange={(event) => {
            setPasswordCheck(event.target.value);
          }}/>
        <button type="submit">Register</button>
      </form>

      </div>

      )}

      {showError && (
        <p style={{ color: "red" }}>
          Votre mot de passe doit faire plus de 8 caractères !
        </p>
      )}
      {showPasswordError && (
        <p style={{ color: "red" }}>
          Les mots de passe ne sont pas identiques !
        </p>
      )}
      {finalMessage && (
        <div className="result">
          <div>
        <h1>Results</h1>
          <div className="resultContent">
            <div>name : {username}</div>
            <div>email : {email}</div>
            <div>password : {password}</div>
          </div>
          <button>Edit your informations</button>
          </div>
        </div>
      )}

      <Footer/>
    </>
  )
}

export default App
