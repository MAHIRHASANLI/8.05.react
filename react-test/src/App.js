import About from "./About";
import Button from "./Button";
import './App.css'
import { useState } from "react"
import Welcome from "./Welcome";
import Login from "./Login";
function App() {
  let[isLogged,setIsLogged] = useState(false);
  let[user,setUser] = useState({username:'',password:''});
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          {/* <About /> */}
          <hr></hr>
          {/* <Button /> */}
          <hr></hr>
          { isLogged ? <Welcome user={user}/> : <Login user={user} setUser={setUser}  setIsLogged={setIsLogged}/> }
        </div>
      </div>
    </div>
  );
}

export default App;
