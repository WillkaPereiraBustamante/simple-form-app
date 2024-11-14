const Form = ({username, email, password, passwordCheck, setUsername, setEmail, setPassword, setPasswordCheck, handleSubmit, showPasswordError}) => {
  
    return <>
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
                </>
    ;
  };

export default Form;
  