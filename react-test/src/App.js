import About from "./About";
import Button from "./Button";
import './App.css'
function App() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <About />
          <hr></hr>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
