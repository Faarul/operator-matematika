// import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h2>Counter </h2> */}
        <Counter title="Counter"/>
        <br></br>
        {/* <h2>Calculator</h2> */}
        <Calculator title="Calculator"/>
      </header>
    </div>
  );
}

export default App;
