import './App.css';
import {Counter} from "./Counter";


function App() {
  return (
      <div className="centered">
        <Counter name="first" startSeconds={0} tickInterval={1000} endSeconds={10} />
        <Counter name="second" startSeconds={10} tickInterval={1000} endSeconds={20}/>
      </div>
  );
}

export default App;
