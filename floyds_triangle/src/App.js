import './App.css';
import Floyd from './Floyd.js';

function App() {
 
  function triangle() {
    let count = 1
    let rows = 8

    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= i; j++, count++)
            document.write(count + " ");
            document.write("<br/ > \n");
    }
}

  return (
    <div className="App">
      <h1 className="App-header"> Floyd's Triangle </h1>
      <Floyd tri={triangle()} />
    </div>
  );
}

export default App;
