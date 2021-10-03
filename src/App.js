import './App.css';
import {Counter} from "./Counter";


function App() {
  return (
      <div className="centered">
        <Counter name="first" seconds={0} />
        <Counter name="second" seconds={10} />
      </div>
  );
}

export default App;
