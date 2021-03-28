// import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter </h2>
        <Counter />
        <br></br>
        <h2>Calculator</h2>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
