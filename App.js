import logo from './logo.svg';
import './App.css';
import {Login} from './Login';
import {Register} from './Register';
function App() {
 
  return (
    <div className="App">
      <login />
      <div>Login
        <form onSubmit={handlesubmit}>
        <label for="train">TRAINl</label>
        <input value={train} palceholder="getmail"/><br></br>
        <label for="trainanme">Trainname</label>
        <input value={trainname} placeholder="getname"/><br></br>
        <label for="REGISTER">REGISTER</label>
       <input value={register} placeholder="trainnn" id="password"/><br></br>
       <button>submit</button><br></br>
      </form>
    </div>
    </div>
  );
}

export default App;
