import { useState } from "react";
import Form from "./assets/components/Form";
import StepTwo from "./assets/components/stepTwo";
import Footer from "./assets/components/Footer";


import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showError, setShowError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [formScreen, setFormScreen] = useState(true);
  

  const handleSubmit = (event) => {

    event.preventDefault();

    if (password.length < 8) {
      setShowError(true);
    } else if (password !== passwordCheck) {
      setShowPasswordError(true);
    } else {
      setFormScreen(false);
    }
  };
  
  return (
    <>
        {formScreen ? (
          <Form 
          handleSubmit={handleSubmit}
          username={username}
          email={email} 
          password={password} 
          passwordCheck={passwordCheck} 
          setUsername={setUsername}
          setEmail={setEmail} 
          setPassword={setPassword} 
          setPasswordCheck={setPasswordCheck}/>

      ) : (

          <StepTwo  
          username={username} 
          email={email} 
          password={password} 
          setFormScreen={setFormScreen}/>

      )}

      {showError && (
        <p style={{ color: "red", textAlign: "center"}}>
          Votre mot de passe doit faire plus de 8 caractères !
        </p>
      )}
      {showPasswordError && (
        <p style={{ color: "red", textAlign: "center"}}>
          Les mots de passe ne sont pas identiques !
        </p>
      )}

      <Footer/>

    </>
  )
}

export default App
