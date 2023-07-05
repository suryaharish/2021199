
import React ,{ useState } from "react";
const Login = () => {
    const{train}=useState('');
    const{trainname}=useState('');
    const{register}=useState('');
    const handlesubmit = (e) =>{
        e.preventdefault();
        console.log(train);
        console.log(trainname);
        console.log(register);
}
  return (
    <div>Login
        <form onSubmit={handlesubmit}>
        <label for="train">TRAIN</label>
        <input type={train} palceholder="getmail"/><br></br>
        <label for="trainanme">Trainname</label>
        <input type={trainname} placeholder="getname"/><br></br>
        <label for="REGISTER">REGISTER</label>
       <input type={register} id="password"/><br></br>
       <button>submit</button><br></br>
      </form>
    </div>
  )
}

export default Login