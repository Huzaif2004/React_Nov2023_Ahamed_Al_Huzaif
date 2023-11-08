
import './App.css';
import HelloWorld from './classComponents/democlass';
import Hello from './functionalComponent/Hello';
function App() {
  return (
    <div className="App">
     <h1>Welcome</h1>
     <HelloWorld name="hi"/>
     <Hello/>
    </div>
  );
}

export default App;
