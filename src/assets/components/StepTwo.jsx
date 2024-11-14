const StepTwo = ({username, email, password, setFormScreen}) => {
  
    return <>
       <div className="result">
          <div>
        <h1>Results</h1>
          <div className="resultContent">
            <div>name : {username}</div>
            <div>email : {email}</div>
            <div>password : {password}</div>
          </div>
          <button onClick={() => {setFormScreen(true)}}>Edit your informations</button>
          </div>
        </div>
    </>
    ;
  };

export default StepTwo;
  