import './App.css';
import Floyd from './Floyd.js';
import Permutations from './Permutations.js';

function App() {

  let god = "GOD"

  return (
    <>
      <div className="App">
        <h1 className="App-header"> Write a function to represent Floyd's Triangle. The given input is the number of rows of the triangle.
        Example: If the number of rows is 8 </h1>
        <Floyd />
      </div>
      <div className="App">
        <h1 className="App-header"> Write a program to print all permutations of a given String. For example, if the given String is "GOD" then your program should print all 6 permutations of this string, e.g. "GOD," "OGD," "DOG," "GDO," "ODG," and "DGO." </h1>
        <Permutations godWord={god}/>
      </div>
    </>
  );
}

export default App;
